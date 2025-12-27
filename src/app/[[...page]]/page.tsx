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

  // Map URL paths to content models
  const modelMapping: { [key: string]: string } = {
    '/': 'home-page',
    '/about-us': 'about-us-page',
    // Add more mappings as needed
  };

  // Determine which model to use based on the URL path
  const model = modelMapping[urlPath] || 'home-page';

  const content = await fetchOneEntry({
    model,
    apiKey,
    userAttributes: {
      urlPath,
    },
    options: {
      // In development, show draft content; in production, only show published
      includeUnpublished: process.env.NODE_ENV === 'development',
    },
  });

  // Log for debugging
  if (!content && process.env.NODE_ENV === 'development') {
    console.log(`[Builder.io Debug] No content found for:`, {
      model,
      urlPath,
      apiKey: apiKey ? '✓ Set' : '✗ Missing',
    });
  }

  return (
    <>
      <RenderBuilderContent content={content} model={model} />
    </>
  );
}
