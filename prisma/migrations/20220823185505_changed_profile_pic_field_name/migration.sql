/*
  Warnings:

  - You are about to drop the column `profile_pic_url` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "profile_pic_url",
ADD COLUMN     "profile_pic_cloudinary_public_id" TEXT;
