import { bmkMetadata } from '../../client/src/content/bmk-pages';
import { BmkRoute } from '../../client/src/components/bmk/bmk-page';

export const metadata = bmkMetadata('our-work');

export default function Page() {
  return <BmkRoute id="our-work" />;
}
