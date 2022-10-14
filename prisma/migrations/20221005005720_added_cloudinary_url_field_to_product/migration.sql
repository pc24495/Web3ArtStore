/*
  Warnings:

  - Added the required column `picture_cloudinary_url` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "picture_cloudinary_url" INTEGER NOT NULL;
