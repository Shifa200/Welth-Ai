/*
  Warnings:

  - The values [CURRENTS] on the enum `AccountType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AccountType_new" AS ENUM ('CURRENT', 'SAVINGS');
ALTER TABLE "public"."accounts" ALTER COLUMN "type" TYPE "public"."AccountType_new" USING ("type"::text::"public"."AccountType_new");
ALTER TYPE "public"."AccountType" RENAME TO "AccountType_old";
ALTER TYPE "public"."AccountType_new" RENAME TO "AccountType";
DROP TYPE "public"."AccountType_old";
COMMIT;
