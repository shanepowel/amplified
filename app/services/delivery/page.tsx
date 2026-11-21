import { bmkMetadata } from '../../../client/src/content/bmk-pages';
import { BmkRoute } from '../../../client/src/components/bmk/bmk-page';

export const metadata = bmkMetadata('services-delivery');

export default function Page() {
  return <BmkRoute id="services-delivery" />;
}
