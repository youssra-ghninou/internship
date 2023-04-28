/*
  Warnings:

  - You are about to drop the column `niveau` on the `Competence` table. All the data in the column will be lost.
  - You are about to drop the column `lieu` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Competence" DROP COLUMN "niveau";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "lieu";
