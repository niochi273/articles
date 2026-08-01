import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ArticleProps {
  id: string;
  title: string;
  content: string;
  image: StaticImageData;
}

export default function Article({ id, title, content, image }: ArticleProps) {
  return (
    <article className="w-40 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow">
      <Link href={`/article/${id}`} className="flex flex-col">
        <div className="relative aspect-4/3 w-full">
          <Image
            src={image}
            alt=""
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
        <div className="px-4 py-3">
          <h4 className="line-clamp-2 leading-4">{title}</h4>
          <p className="text-muted-foreground text-xs line-clamp-4 mt-2">
            {content}
          </p>
        </div>
      </Link>
    </article>
  );
}
