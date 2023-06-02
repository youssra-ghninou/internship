/*
  Warnings:

  - Added the required column `link` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localisation` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `methode` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mode` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remuneration` to the `Offer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Offer" ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "localisation" TEXT NOT NULL,
ADD COLUMN     "methode" TEXT NOT NULL,
ADD COLUMN     "mode" TEXT NOT NULL,
ADD COLUMN     "remuneration" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
