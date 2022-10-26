/*
  Warnings:

  - You are about to drop the column `picture_cloudinary_public_id` on the `Product` table. All the data in the column will be lost.
  - Added the required column `cloudinary_url` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "picture_cloudinary_public_id",
ADD COLUMN     "cloudinary_url" TEXT NOT NULL;
