/*
  Warnings:

  - The `status` column on the `Application` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatusCandidature" AS ENUM ('Processing', 'Accepted', 'Rejected');

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "status",
ADD COLUMN     "status" "StatusCandidature" NOT NULL DEFAULT 'Processing';
