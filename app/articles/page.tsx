import type { Metadata } from "next";
import Link from "next/link";
import { client } from "../../sanity/client";

export const metadata: Metadata = {
  title: "Статьи",
  description:
    "Статьи о расстройствах пищевого поведения, терапии и отношениях с едой и телом.",
};

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  lead: string | null;
};

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  lead
}`;

export const revalidate = 60;

export default async function ArticlesPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY);

  return (
    <main id="main-content" className="bg-bg text-text">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <header>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[14px] text-text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>На главную</span>
          </a>
          <h1 className="mt-8 md:mt-10 text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-tight">
            Статьи
          </h1>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-text-muted leading-[1.6] max-w-[600px]">
            О&nbsp;расстройствах пищевого поведения, терапии
            и&nbsp;отношениях с&nbsp;едой и&nbsp;телом.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="mt-16 md:mt-20 py-16 text-center">
            <p className="text-text-muted text-lg">
              Пока здесь пусто. Скоро появятся первые статьи.
            </p>
          </div>
        ) : (
          <div className="mt-12 md:mt-16 max-w-[900px] flex flex-col">
            {posts.map((post, idx) => (
              <article
                key={post._id}
                className={`py-8 md:py-10 ${
                  idx > 0 ? "border-t border-bg-beige" : ""
                }`}
              >
                <Link
                  href={`/articles/${post.slug.current}`}
                  className="group block"
                >
                  {post.publishedAt && (
                    <time
                      dateTime={post.publishedAt}
                      className="text-[13px] md:text-[14px] text-text-muted"
                    >
                      {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  )}
                  <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-text leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  {post.lead && (
                    <p className="mt-3 text-[16px] md:text-[17px] leading-[1.65] text-text-muted max-w-[700px]">
                      {post.lead}
                    </p>
                  )}
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-accent group-hover:text-accent-dark transition-colors">
                    Читать
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
