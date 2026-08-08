import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type ArticleProps = {
  id: number;
  title: string;
  content: string;
  image: StaticImageData;
};

export default function Article({ id, title, content, image }: ArticleProps) {
  return (
    <Link
      href={`/articles/${id}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="line-clamp-2 text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm text-neutral-600 dark:text-neutral-400">
          {content}
        </p>
        <span className="mt-auto pt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          Read more →
        </span>
      </div>
    </Link>
  );
}
