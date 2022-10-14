/*
  Warnings:

  - Added the required column `made_with` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priceInCents` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "made_with" TEXT NOT NULL,
ADD COLUMN     "priceInCents" INTEGER NOT NULL;
