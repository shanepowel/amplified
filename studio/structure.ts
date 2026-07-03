import type { StructureResolver } from 'sanity/structure';

// Custom desk structure: site settings is a singleton, the rest are lists.
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('insight').title('Insights / Articles'),
      S.documentTypeListItem('engagement').title('Engagements'),
      S.documentTypeListItem('caseStudy').title('Case studies'),
    ]);
