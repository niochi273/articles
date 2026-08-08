// scripts/seed.ts
import "dotenv/config";
import { db } from "@/db/drizzle";
import { user, article } from "@/db/auth-schema";

async function main() {
  const [firstUser] = await db.select().from(user).limit(1);
  if (!firstUser) throw new Error("Sign up a user first, then re-run.");

  await db.insert(article).values(
    Array.from({ length: 6 }, (_, i) => ({
      title: `Article ${i + 1}`,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/article.avif",
      creatorId: firstUser.id,
    })),
  );

  console.log("Seeded 6 articles for", firstUser.email);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => process.exit(0));
