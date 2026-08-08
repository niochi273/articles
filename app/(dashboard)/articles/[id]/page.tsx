import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { article, user } from "@/db/auth-schema";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = { params: Promise<{ id: string }> };

const ratings = [
  { label: "Well argued", value: 83 },
  { label: "Interesting points", value: 70 },
  { label: "Agree with arguments", value: 80 },
];

export default async function Page({ params }: Props) {
  const { id } = await params;
  const articleId = Number(id);

  if (!Number.isInteger(articleId)) notFound();

  const [row] = await db
    .select({
      id: article.id,
      title: article.title,
      content: article.content,
      image: article.image,
      authorName: user.name,
      authorImage: user.image,
    })
    .from(article)
    .innerJoin(user, eq(article.creatorId, user.id))
    .where(eq(article.id, articleId));

  if (!row) notFound();

  function countWords(str: string) {
    return str.trim().split(/\s+/).filter(Boolean).length;
  }

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 lg:py-16">
      <header className="flex flex-col gap-6">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {row.title}
        </h1>

        <div className="flex items-center gap-3">
          <Avatar className="size-9">
            <AvatarImage
              src={row.authorImage ?? undefined}
              alt={row.authorName}
            />
            <AvatarFallback>
              {row.authorName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{row.authorName}</p>
            <p className="text-muted-foreground">
              {Math.ceil(countWords(row.content) / 200)} min read
            </p>
          </div>
        </div>
      </header>

      <div className="relative my-8 aspect-video overflow-hidden rounded-xl border">
        <Image
          src={row.image}
          alt={row.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
      </div>

      <section className="rounded-xl border bg-card p-5">
        <h2 className="text-sm font-medium text-muted-foreground">
          Member ratings
        </h2>
        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {ratings.map(({ label, value }) => (
            <div key={label} className="flex items-center gap-2">
              <dt className="text-sm">{label}</dt>
              <dd>
                <Badge variant="secondary" className="tabular-nums">
                  {value}%
                </Badge>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Separator className="my-8" />

      <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
        {row.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </article>
  );
}
