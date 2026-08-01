import Article from "@/components/article";
import articleImage from "@/article.avif";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <h2 className="text-3xl">Articles</h2>
      <main className="flex flex-wrap gap-5 mt-3">
        <Article
          id="1"
          title="Trump was assisinated by..."
          content="Recently, President of the United States Donald Trump was assisinated..."
          image={articleImage}
        />
        <Article
          id="1"
          title="Trump was assisinated by..."
          content="Recently, President of the United States Donald Trump was assisinated..."
          image={articleImage}
        />
        <Article
          id="1"
          title="Trump was assisinated by..."
          content="Recently, President of the United States Donald Trump was assisinated..."
          image={articleImage}
        />
      </main>
    </>
  );
}
