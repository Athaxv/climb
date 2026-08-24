-- AlterTable
ALTER TABLE "Category" ADD COLUMN "sortOrder" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE INDEX "Category_sortOrder_idx" ON "Category"("sortOrder");

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonSkill" (
    "personId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "PersonSkill_pkey" PRIMARY KEY ("personId","skillId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_slug_key" ON "Skill"("slug");

-- CreateIndex
CREATE INDEX "PersonSkill_skillId_idx" ON "PersonSkill"("skillId");

-- AddForeignKey
ALTER TABLE "PersonSkill" ADD CONSTRAINT "PersonSkill_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonSkill" ADD CONSTRAINT "PersonSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Merge obsolete occupation boards into the new taxonomy
UPDATE "Person" SET "categoryId" = (SELECT "id" FROM "Category" WHERE "slug" = 'founder' LIMIT 1)
WHERE "categoryId" IN (SELECT "id" FROM "Category" WHERE "slug" IN ('startup'));

UPDATE "Person" SET "categoryId" = (SELECT "id" FROM "Category" WHERE "slug" = 'software-engineering' LIMIT 1)
WHERE "categoryId" IN (SELECT "id" FROM "Category" WHERE "slug" IN ('open-source'));

DELETE FROM "Category" WHERE "slug" IN ('startup', 'open-source');

UPDATE "Category" SET "slug" = 'engineering', "name" = 'Engineering', "sortOrder" = 10 WHERE "slug" = 'software-engineering';
UPDATE "Category" SET "slug" = 'ai-data', "name" = 'AI & Data', "sortOrder" = 20 WHERE "slug" = 'ai-ml';
UPDATE "Category" SET "slug" = 'founders', "name" = 'Founders & Entrepreneurship', "sortOrder" = 50 WHERE "slug" = 'founder';
UPDATE "Category" SET "slug" = 'growth', "name" = 'Growth & Marketing', "sortOrder" = 60 WHERE "slug" = 'marketing';
UPDATE "Category" SET "slug" = 'creators', "name" = 'Content & Creators', "sortOrder" = 110 WHERE "slug" = 'creator';
UPDATE "Category" SET "slug" = 'students', "name" = 'Student & Early Career', "sortOrder" = 120 WHERE "slug" = 'student';
UPDATE "Category" SET "name" = 'Product', "sortOrder" = 90 WHERE "slug" = 'product';
UPDATE "Category" SET "name" = 'Design', "sortOrder" = 100 WHERE "slug" = 'design';
UPDATE "Category" SET "name" = 'Finance', "sortOrder" = 80 WHERE "slug" = 'finance';
UPDATE "Category" SET "name" = 'Other', "sortOrder" = 130 WHERE "slug" = 'other';

INSERT INTO "Category" ("id", "name", "slug", "sortOrder", "createdAt")
SELECT 'cat_cybersecurity', 'Cybersecurity', 'cybersecurity', 30, CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM "Category" WHERE "slug" = 'cybersecurity');

INSERT INTO "Category" ("id", "name", "slug", "sortOrder", "createdAt")
SELECT 'cat_devops', 'DevOps & Cloud', 'devops', 40, CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM "Category" WHERE "slug" = 'devops');

INSERT INTO "Category" ("id", "name", "slug", "sortOrder", "createdAt")
SELECT 'cat_sales', 'Sales & Business Development', 'sales', 70, CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM "Category" WHERE "slug" = 'sales');

CREATE EXTENSION IF NOT EXISTS pg_trgm;

CREATE INDEX IF NOT EXISTS "Person_fullName_trgm_idx" ON "Person" USING gin ("fullName" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "Person_username_trgm_idx" ON "Person" USING gin ("username" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "Skill_name_trgm_idx" ON "Skill" USING gin ("name" gin_trgm_ops);
CREATE INDEX IF NOT EXISTS "Skill_slug_trgm_idx" ON "Skill" USING gin ("slug" gin_trgm_ops);
