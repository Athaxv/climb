import { describe, expect, it } from "vitest";
import {
  planCloneLinkMoves,
  planListingMerge,
  planSocialLinkAttach,
  usableOwnerUserId,
} from "./listing-merge-core";

describe("usableOwnerUserId", () => {
  it("ignores guest and empty ids", () => {
    expect(usableOwnerUserId("guest")).toBeUndefined();
    expect(usableOwnerUserId("")).toBeUndefined();
    expect(usableOwnerUserId(undefined)).toBeUndefined();
    expect(usableOwnerUserId("user_abc")).toBe("user_abc");
  });
});

describe("planSocialLinkAttach", () => {
  const github = {
    id: "link-gh",
    type: "GITHUB",
    url: "https://github.com/maya",
  };

  it("creates a LinkedIn link on an existing GitHub listing", () => {
    expect(
      planSocialLinkAttach({
        ownerLinks: [github],
        incoming: { type: "LINKEDIN", url: "https://www.linkedin.com/in/maya-chen" },
      }),
    ).toEqual({
      action: "create",
      type: "LINKEDIN",
      url: "https://www.linkedin.com/in/maya-chen",
    });
  });

  it("does not reset currentBid: attach is a link write only", () => {
    const plan = planSocialLinkAttach({
      ownerLinks: [github],
      incoming: { type: "LINKEDIN", url: "https://www.linkedin.com/in/maya-chen" },
    });
    expect(plan.action).not.toBe("noop");
  });

  it("updates the URL when the owner already has that platform", () => {
    expect(
      planSocialLinkAttach({
        ownerLinks: [{ id: "link-li", type: "LINKEDIN", url: "https://www.linkedin.com/in/old" }],
        incoming: { type: "LINKEDIN", url: "https://www.linkedin.com/in/new" },
      }),
    ).toEqual({
      action: "update",
      linkId: "link-li",
      url: "https://www.linkedin.com/in/new",
    });
  });
});

describe("planListingMerge", () => {
  it("keeps the paid GitHub seat and lists it after a LinkedIn clone is merged", () => {
    const merge = planListingMerge({
      owner: { id: "person-a", currentBid: 5000 },
      clone: { id: "person-b", currentBid: 0 },
      newBidCents: 500,
    });
    expect(merge.targetPersonId).toBe("person-a");
    expect(merge.appliedBidCents).toBe(5000);
    expect(merge.shouldUpdateBid).toBe(false);
    expect(merge.kind).toBe("raised");
    expect(merge.deleteClone).toBe(true);
    expect(merge.listed).toBe(true);
  });

  it("raises the owner when the clone payment is higher", () => {
    const merge = planListingMerge({
      owner: { id: "person-a", currentBid: 5000 },
      clone: { id: "person-b", currentBid: 0 },
      newBidCents: 7600,
    });
    expect(merge.appliedBidCents).toBe(7600);
    expect(merge.shouldUpdateBid).toBe(true);
    expect(merge.listed).toBe(true);
  });

  it("moves only new platform links off the clone", () => {
    expect(
      planCloneLinkMoves({
        ownerLinks: [{ id: "a-gh", type: "GITHUB" }],
        cloneLinks: [
          { id: "b-gh", type: "GITHUB" },
          { id: "b-li", type: "LINKEDIN" },
        ],
      }),
    ).toEqual([
      { action: "drop", linkId: "b-gh" },
      { action: "move", linkId: "b-li" },
    ]);
  });
});
