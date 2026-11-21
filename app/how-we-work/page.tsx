import { bmkMetadata } from '../../client/src/content/bmk-pages';
import { BmkRoute } from '../../client/src/components/bmk/bmk-page';

export const metadata = bmkMetadata('how-we-work');

export default function Page() {
  return <BmkRoute id="how-we-work" />;
}
