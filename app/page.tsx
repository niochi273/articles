import Article from "@/components/article";
import articleImage from "@/article.avif";

export default function Home() {
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
