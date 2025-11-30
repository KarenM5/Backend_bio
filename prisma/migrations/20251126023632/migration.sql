-- CreateTable
CREATE TABLE `Patient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `lastname` VARCHAR(191) NULL,
    `age` INTEGER NULL,
    `weight` DOUBLE NULL,
    `heart_rate` INTEGER NULL,
    `disease` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Symptom` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `patient_id` INTEGER NOT NULL,
    `patientName` VARCHAR(191) NULL,
    `description` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Symptom` ADD CONSTRAINT `Symptom_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
