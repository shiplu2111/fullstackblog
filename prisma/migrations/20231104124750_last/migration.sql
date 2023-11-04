/*
  Warnings:

  - You are about to alter the column `lastName` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `lastName` VARCHAR(50) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `message` LONGTEXT NOT NULL;
