import type { Route } from './+types/_index';
import { PageLayout } from '../../src/containers/PageLayout';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Kenneth Yu - Software Engineer' },
    {
      name: 'description',
      content:
        'Kenneth Yu is a software engineer who specializes in building exceptional digital experiences by focusing on user centric products',
    },
    {
      property: 'og:description',
      content:
        'Kenneth Yu is a software engineer who specializes in building exceptional digital experiences by focusing on user centric products',
    },
    {
      name: 'twitter:description',
      content:
        'Kenneth Yu is a software engineer who specializes in building exceptional digital experiences by focusing on user centric products',
    },
  ];
}

export default function Index() {
  return <PageLayout />;
}
