/*
  Warnings:

  - You are about to drop the column `picture_cloudinary_url` on the `Product` table. All the data in the column will be lost.
  - Added the required column `picture_cloudinary_public_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "picture_cloudinary_url",
ADD COLUMN     "picture_cloudinary_public_id" TEXT NOT NULL;
