import {
  manifestoClaims as fallbackClaims,
  type ManifestoClaim,
} from '../../client/src/lib/manifesto';
import { sanityFetch } from '../sanity/client';
import { SITE_SETTINGS_QUERY, type SanitySiteSettings } from '../sanity/queries';

/**
 * Manifesto claims. Prefers Sanity site settings; falls back to the bundled
 * claims when Sanity is not configured or empty.
 */
export async function getManifestoClaims(): Promise<ManifestoClaim[]> {
  const settings = await sanityFetch<SanitySiteSettings | null>(SITE_SETTINGS_QUERY);
  const beliefs = settings?.beliefs;
  if (beliefs && beliefs.length > 0) {
    return beliefs
      .filter((b) => b.headline)
      .map((b, idx) => ({
        number: b.number ?? String(idx + 1).padStart(2, '0'),
        headline: b.headline ?? '',
        body: b.body ?? [],
      }));
  }
  return fallbackClaims;
}
