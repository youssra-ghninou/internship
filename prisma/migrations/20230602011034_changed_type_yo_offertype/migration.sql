/*
  Warnings:

  - You are about to drop the column `type` on the `Offer` table. All the data in the column will be lost.
  - Added the required column `offertype` to the `Offer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Offer" DROP COLUMN "type",
ADD COLUMN     "offertype" TEXT NOT NULL;
