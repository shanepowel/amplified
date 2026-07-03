import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Site settings',
    }),
    defineField({
      name: 'beliefs',
      title: 'Manifesto beliefs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            { name: 'headline', title: 'Headline', type: 'string' },
            {
              name: 'body',
              title: 'Body paragraphs',
              type: 'array',
              of: [{ type: 'text', rows: 4 }],
            },
          ],
          preview: { select: { title: 'headline', subtitle: 'number' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
