import type { SchemaTypeDefinition } from 'sanity';
import { insight } from './insight';
import { engagement } from './engagement';
import { caseStudy } from './caseStudy';
import { siteSettings } from './siteSettings';

export const schemaTypes: SchemaTypeDefinition[] = [
  insight,
  engagement,
  caseStudy,
  siteSettings,
];
