import Article from "@/components/article";
import articleImage from "@/article.avif";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/db/drizzle";
import { article } from "@/db/auth-schema";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/login");

  const articles = await db.select().from(article);

  return (
    <main>
      <h2 className="mb-6 text-3xl font-bold tracking-tight">Articles</h2>

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {articles.map((article) => (
          <Article key={article.id} {...article} image={articleImage} />
        ))}
      </section>
    </main>
  );
}
