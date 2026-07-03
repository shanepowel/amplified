import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug / id',
      type: 'slug',
      options: { source: 'company', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'sector', title: 'Sector', type: 'string' }),
    defineField({ name: 'service', title: 'Service line', type: 'string' }),
    defineField({
      name: 'summary',
      title: 'Summary (used by the assistant)',
      type: 'text',
      rows: 5,
    }),
    defineField({ name: 'challenge', title: 'The challenge', type: 'text', rows: 5 }),
    defineField({ name: 'solution', title: 'What we did', type: 'text', rows: 5 }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Users', value: 'users' },
                  { title: 'Clock', value: 'clock' },
                  { title: 'Trending up', value: 'trending' },
                  { title: 'Award', value: 'award' },
                ],
              },
              initialValue: 'trending',
            },
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
    defineField({ name: 'outcome', title: 'Outcome', type: 'text', rows: 3 }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'company', subtitle: 'sector' },
  },
});
