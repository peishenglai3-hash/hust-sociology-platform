CREATE TABLE `review_materials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`subject` varchar(100) NOT NULL,
	`category` varchar(100),
	`fileKey` varchar(255) NOT NULL,
	`fileUrl` varchar(512) NOT NULL,
	`fileName` varchar(255) NOT NULL,
	`fileSize` bigint,
	`mimeType` varchar(100),
	`uploadedBy` int NOT NULL,
	`uploadedAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`downloads` int DEFAULT 0,
	`isPublished` int DEFAULT 1,
	CONSTRAINT `review_materials_id` PRIMARY KEY(`id`)
);
