import "dotenv/config"; // or: import { config } from "dotenv"; config({ path: ".env.local" });
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/auth-schema.ts", // must match the real path
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: { url: process.env.DATABASE_URL! },
});
