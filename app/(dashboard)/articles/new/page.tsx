import { ImageIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function CreateArticle() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-10 sm:px-6 lg:py-14">
      <header className="flex flex-col gap-1.5">
        <h1 className="text-3xl font-bold tracking-tight">New article</h1>
        <p className="text-sm text-muted-foreground">
          Write something worth reading. You can edit it after publishing.
        </p>
      </header>

      <Separator className="my-8" />

      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="A short, specific headline"
            required
            maxLength={120}
            className="h-11 text-base"
          />
          <p className="text-xs text-muted-foreground">
            Aim for under 120 characters.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="image">Cover image</Label>
          <label
            htmlFor="image"
            className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed bg-muted/30 px-6 py-10 text-center transition-colors hover:bg-muted/60 focus-within:ring-2 focus-within:ring-ring"
          >
            <ImageIcon className="size-6 text-muted-foreground" />
            <span className="text-sm font-medium">Click to upload</span>
            <span className="text-xs text-muted-foreground">
              AVIF, WebP, PNG or JPG · max 2 MB
            </span>
          </label>
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="sr-only"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline justify-between">
            <Label htmlFor="content">Content</Label>
            <span className="text-xs tabular-nums text-muted-foreground">
              {/* char count */}
            </span>
          </div>
          <Textarea
            id="content"
            name="content"
            required
            placeholder="Start writing…"
            className="min-h-72 resize-y text-base leading-relaxed"
          />
          <p className="text-xs text-muted-foreground">
            Separate paragraphs with a blank line.
          </p>
        </div>

        {/* error slot */}
        <p
          role="alert"
          className="hidden rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          {/* message */}
        </p>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="ghost">
            <Link href="/home">Cancel</Link>
          </Button>
          <Button type="submit" className="sm:min-w-32">
            Publish
          </Button>
        </div>
      </form>
    </main>
  );
}
