import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, bigint } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// 复习资料表
export const reviewMaterials = mysqlTable("review_materials", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(), // 资料标题
  description: text("description"), // 资料描述
  subject: varchar("subject", { length: 100 }).notNull(), // 科目名称
  category: varchar("category", { length: 100 }), // 分类（如：复习指南、历年真题等）
  fileKey: varchar("fileKey", { length: 255 }).notNull(), // S3文件key
  fileUrl: varchar("fileUrl", { length: 512 }).notNull(), // S3文件URL
  fileName: varchar("fileName", { length: 255 }).notNull(), // 原始文件名
  fileSize: bigint("fileSize", { mode: "number" }), // 文件大小（字节）
  mimeType: varchar("mimeType", { length: 100 }), // 文件类型
  uploadedBy: int("uploadedBy").notNull(), // 上传者ID（关联users表）
  uploadedAt: timestamp("uploadedAt").defaultNow().notNull(), // 上传时间
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(), // 更新时间
  downloads: int("downloads").default(0), // 下载次数
  isPublished: int("isPublished").default(1), // 是否发布（1=已发布，0=草稿）
});

export type ReviewMaterial = typeof reviewMaterials.$inferSelect;
export type InsertReviewMaterial = typeof reviewMaterials.$inferInsert;
