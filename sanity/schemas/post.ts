import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Статья",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (r) => r.required().min(5).max(120),
    }),
    defineField({
      name: "slug",
      title: "URL-адрес (slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Дата публикации",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "lead",
      title: "Лид (короткое описание)",
      type: "text",
      rows: 3,
      validation: (r) => r.max(300),
    }),
    defineField({
      name: "body",
      title: "Текст статьи",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Обычный", value: "normal" },
            { title: "Заголовок 2", value: "h2" },
            { title: "Заголовок 3", value: "h3" },
            { title: "Цитата", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Жирный", value: "strong" },
              { title: "Курсив", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Ссылка",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (r) =>
                      r.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Описание изображения (alt)",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "coverImage",
      title: "Обложка",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Описание изображения (alt)",
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Дата публикации (новые первые)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      date: "publishedAt",
    },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date
          ? new Date(date).toLocaleDateString("ru-RU", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "Без даты",
      };
    },
  },
});
