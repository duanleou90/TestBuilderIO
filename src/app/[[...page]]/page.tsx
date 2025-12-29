import { RenderBuilderContent } from '../components/builder-content';

interface PageProps {
  params: Promise<{
    page?: string[];
  }>;
}

// Fetch content using the Builder Content API directly (server-side compatible)
async function fetchBuilderContent(model: string, urlPath: string) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
  
  if (!apiKey) {
    return null;
  }

  try {
    const response = await fetch(
      `https://cdn.builder.io/api/v3/content/${model}?apiKey=${apiKey}&url=${encodeURIComponent(urlPath)}&cachebust=true`,
      { next: { revalidate: 60 } } // Cache for 60 seconds
    );
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    return data?.results?.[0] || null;
  } catch (error) {
    console.error('[Builder.io] Error fetching content:', error);
    return null;
  }
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const urlPath = '/' + (params?.page?.join('/') || '');
  
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';

  // If no API key is set, show setup message
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
  // Check if it's an event page (starts with /events/)
  let model: string;
  if (urlPath.startsWith('/events/') || urlPath === '/events') {
    model = 'event-page';
  } else {
    model = modelMapping[urlPath] || 'home-page';
  }

  // Fetch content server-side using Content API
  const content = await fetchBuilderContent(model, urlPath);

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
