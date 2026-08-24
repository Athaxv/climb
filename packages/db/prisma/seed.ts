import { CATEGORIES } from "../src/categories";
import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.personSkill.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.analyticsEvent.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.providerWebhookEvent.deleteMany();
  await prisma.linkClick.deleteMany();
  await prisma.profileView.deleteMany();
  await prisma.rankSnapshot.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.bid.deleteMany();
  await prisma.socialLink.deleteMany();
  await prisma.person.deleteMany();
  await prisma.user.deleteMany();
  await prisma.category.deleteMany();

  await prisma.category.createMany({
    data: CATEGORIES.map((category) => ({
      name: category.name,
      slug: category.slug,
      sortOrder: category.sortOrder,
    })),
  });

  console.log(`Seeded ${CATEGORIES.length} categories. Board is empty until a real payment succeeds.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
