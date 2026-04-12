import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/image";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  lead: string | null;
  body: PortableTextBlock[];
  coverImage: {
    asset: { _ref: string };
    alt?: string;
  } | null;
};

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  lead,
  body,
  coverImage
}`;

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(POST_QUERY, { slug });
  if (!post) return { title: "Статья не найдена" };

  const url = `https://anyamalets.ru/articles/${post.slug.current}`;
  const coverImageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).height(630).fit("crop").quality(85).url()
    : undefined;

  return {
    title: post.title,
    description: post.lead || undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.lead || undefined,
      url,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      authors: ["Анна Малюточкина"],
      siteName: "anyamalets.ru",
      locale: "ru_RU",
      ...(coverImageUrl && {
        images: [
          {
            url: coverImageUrl,
            width: 1200,
            height: 630,
            alt: post.coverImage?.alt || post.title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.lead || undefined,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await client.fetch<Post | null>(POST_QUERY, { slug });

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.lead || undefined,
    datePublished: post.publishedAt || undefined,
    author: {
      "@type": "Person",
      name: "Анна Малюточкина",
      url: "https://anyamalets.ru",
    },
    publisher: {
      "@type": "Person",
      name: "Анна Малюточкина",
      url: "https://anyamalets.ru",
    },
    url: `https://anyamalets.ru/articles/${slug}`,
    mainEntityOfPage: `https://anyamalets.ru/articles/${slug}`,
  };

  return (
    <main className="bg-bg text-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-[820px] px-6 md:px-10 py-16 md:py-24">
        <header>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[14px] text-text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Все статьи</span>
          </Link>

          {post.publishedAt && (
            <time
              dateTime={post.publishedAt}
              className="mt-8 md:mt-10 block text-[13px] md:text-[14px] text-text-muted"
            >
              {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          )}

          <h1 className="mt-3 md:mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          {post.lead && (
            <p className="mt-5 md:mt-6 text-[17px] md:text-[18px] leading-[1.6] text-text-muted max-w-[640px]">
              {post.lead}
            </p>
          )}
        </header>

        {post.coverImage?.asset && (
          <div className="mt-10 md:mt-12 relative w-full aspect-[16/9] overflow-hidden rounded-xl">
            <Image
              src={urlFor(post.coverImage).width(1600).quality(85).url()}
              alt={post.coverImage.alt || post.title}
              fill
              priority
              sizes="(max-width: 820px) 100vw, 820px"
              className="object-cover"
            />
          </div>
        )}

        <article className="mt-10 md:mt-14 prose-custom">
          <PortableText
            value={post.body}
            components={{
              block: {
                h2: ({ children }) => (
                  <h2 className="mt-10 md:mt-12 mb-4 text-[24px] md:text-[28px] font-semibold text-text leading-tight">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-8 md:mt-10 mb-3 text-[20px] md:text-[22px] font-medium text-text leading-tight">
                    {children}
                  </h3>
                ),
                normal: ({ children }) => (
                  <p className="mb-5 text-[16px] md:text-[17px] leading-[1.75] text-text">
                    {children}
                  </p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="my-8 pl-6 border-l-[3px] border-accent text-[16px] md:text-[17px] leading-[1.75] text-text-muted italic">
                    {children}
                  </blockquote>
                ),
              },
              marks: {
                link: ({ children, value }) => (
                  <a
                    href={value?.href}
                    target={
                      value?.href?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      value?.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-accent hover:text-accent-dark underline underline-offset-2 decoration-accent/40 hover:decoration-accent transition-colors"
                  >
                    {children}
                  </a>
                ),
              },
              types: {
                image: ({ value }) => {
                  if (!value?.asset) return null;
                  return (
                    <figure className="my-8 md:my-10">
                      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
                        <Image
                          src={urlFor(value).width(1600).quality(85).url()}
                          alt={value.alt || ""}
                          fill
                          sizes="(max-width: 820px) 100vw, 820px"
                          className="object-cover"
                        />
                      </div>
                      {value.alt && (
                        <figcaption className="mt-3 text-[13px] text-text-muted text-center">
                          {value.alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                },
              },
            }}
          />
        </article>

        <div className="mt-16 md:mt-20 pt-10 border-t border-bg-beige flex flex-wrap gap-6 items-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-[15px] text-text-muted hover:text-accent transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Все статьи</span>
          </Link>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[15px] text-text-muted hover:text-accent transition-colors"
          >
            На главную
          </a>
        </div>
      </div>
    </main>
  );
}
