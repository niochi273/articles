CREATE TABLE "article" (
	"id" text PRIMARY KEY,
	"image" text NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"creator_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "article" ADD CONSTRAINT "article_creator_id_user_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "user"("id") ON DELETE CASCADE;