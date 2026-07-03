import { defineField, defineType } from 'sanity';

export const engagement = defineType({
  name: 'engagement',
  title: 'Engagement',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Controls ordering on the engagements hub and homepage.',
    }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'text', rows: 2 }),
    defineField({
      name: 'forBuyer',
      title: 'For buyer (label)',
      type: 'string',
      description: 'e.g. "for delivery directors"',
    }),
    defineField({ name: 'buyerSentence', title: 'Buyer sentence', type: 'text', rows: 3 }),
    defineField({
      name: 'problem',
      title: 'Problem (paragraphs)',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'included',
      title: 'What is included',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'duration', title: 'Duration', type: 'string' }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Keep as "Scoped to engagement, discussed during initial conversation."',
    }),
    defineField({ name: 'outcome', title: 'Outcome', type: 'text', rows: 4 }),
    defineField({ name: 'oneLineOutcome', title: 'One-line outcome', type: 'string' }),
    defineField({
      name: 'qualifiers',
      title: 'Qualifiers (is this you?)',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'notForYouIf',
      title: 'Not for you if',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'focus', title: 'Focus', type: 'string' },
            { name: 'detail', title: 'Detail', type: 'text', rows: 2 },
          ],
          preview: { select: { title: 'label', subtitle: 'focus' } },
        },
      ],
    }),
    defineField({ name: 'caseStudyId', title: 'Case study id', type: 'string' }),
    defineField({ name: 'caseStudyName', title: 'Case study name', type: 'string' }),
    defineField({ name: 'caseStudySector', title: 'Case study sector', type: 'string' }),
    defineField({ name: 'caseStudyOutcome', title: 'Case study outcome', type: 'text', rows: 3 }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'tagline' },
  },
});
