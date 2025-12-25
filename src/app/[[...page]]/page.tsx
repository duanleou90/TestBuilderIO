import { fetchOneEntry } from '@builder.io/sdk-react';
import { RenderBuilderContent } from '../components/builder-content';

interface PageProps {
  params: Promise<{
    page?: string[];
  }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const urlPath = '/' + (params?.page?.join('/') || '');
  
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';

  // If no API key is set, redirect to preview page
  if (!apiKey) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Builder.io Setup Required</h1>
        <p>Please set your NEXT_PUBLIC_BUILDER_API_KEY environment variable.</p>
        <p>
          <a href="/preview" style={{ color: '#FD4D40', textDecoration: 'underline' }}>
            View Component Preview →
          </a>
        </p>
        <p style={{ marginTop: '20px' }}>
          <a href="https://builder.io/account/settings" target="_blank" rel="noopener noreferrer">
            Get your API key from Builder.io →
          </a>
        </p>
      </div>
    );
  }

  const content = await fetchOneEntry({
    model: 'home-page',
    apiKey,
    userAttributes: {
      urlPath,
    },
  });

  return (
    <>
      <RenderBuilderContent content={content} model="home-page" />
    </>
  );
}
