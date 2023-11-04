-- AlterTable
ALTER TABLE `blogs` MODIFY `shortDesc` LONGTEXT NOT NULL,
    MODIFY `longDesc` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `categorys` MODIFY `shortDesc` LONGTEXT NOT NULL,
    MODIFY `longDesc` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `services` MODIFY `shortDesc` LONGTEXT NOT NULL,
    MODIFY `longDesc` LONGTEXT NOT NULL;
