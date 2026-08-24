export type SocialLinkPlan =
  | { action: "noop" }
  | { action: "create"; type: string; url: string }
  | { action: "update"; linkId: string; url: string };

export type CloneLinkMove = { action: "move" | "drop"; linkId: string };

export function usableOwnerUserId(userId: string | undefined | null): string | undefined {
  if (!userId || userId === "guest") return undefined;
  return userId;
}

export function planSocialLinkAttach(input: {
  ownerLinks: { id: string; type: string; url: string }[];
  incoming: { type: string; url: string };
}): SocialLinkPlan {
  const sameUrl = input.ownerLinks.find(
    (link) => link.type === input.incoming.type && link.url === input.incoming.url,
  );
  if (sameUrl) return { action: "noop" };
  const sameType = input.ownerLinks.find((link) => link.type === input.incoming.type);
  if (sameType) return { action: "update", linkId: sameType.id, url: input.incoming.url };
  return { action: "create", type: input.incoming.type, url: input.incoming.url };
}

export function planCloneLinkMoves(input: {
  ownerLinks: { id: string; type: string }[];
  cloneLinks: { id: string; type: string }[];
}): CloneLinkMove[] {
  const ownerTypes = new Set(input.ownerLinks.map((link) => link.type));
  return input.cloneLinks.map((link) =>
    ownerTypes.has(link.type)
      ? { action: "drop", linkId: link.id }
      : { action: "move", linkId: link.id },
  );
}

export function planListingMerge(input: {
  owner: { id: string; currentBid: number };
  clone: { id: string; currentBid: number };
  newBidCents: number;
}): {
  targetPersonId: string;
  appliedBidCents: number;
  shouldUpdateBid: boolean;
  kind: "joined" | "raised";
  deleteClone: boolean;
  listed: boolean;
} {
  const appliedBidCents = Math.max(input.owner.currentBid, input.clone.currentBid, input.newBidCents);
  return {
    targetPersonId: input.owner.id,
    appliedBidCents,
    shouldUpdateBid: appliedBidCents > input.owner.currentBid,
    kind: input.owner.currentBid <= 0 ? "joined" : "raised",
    deleteClone: true,
    listed: appliedBidCents > 0,
  };
}
