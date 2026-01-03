import { RenderBuilderContent } from '../components/builder-content';

interface PageProps {
  params: Promise<{
    page?: string[];
  }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

function firstString(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

// Fetch content using the Builder Content API directly (server-side compatible)
async function fetchBuilderContent({
  model,
  urlPath,
  contentId,
  isPreview,
}: {
  model: string;
  urlPath?: string;
  contentId?: string;
  isPreview?: boolean;
}) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
  
  if (!apiKey) {
    return null;
  }

  const fetchOptions: RequestInit & { next?: { revalidate: number } } = isPreview
    ? { cache: 'no-store' }
    : { next: { revalidate: 60 } };

  try {
    // When editing symbols (or previewing specific entries), Builder passes an entry/content id.
    // Symbols do not rely on URL targeting, so we must be able to fetch by id.
    if (contentId) {
      // Try direct-by-id endpoint (some Builder setups support this)
      const directResponse = await fetch(
        `https://cdn.builder.io/api/v3/content/${model}/${encodeURIComponent(contentId)}?apiKey=${apiKey}&cachebust=true`,
        fetchOptions
      );

      if (directResponse.ok) {
        const directData = await directResponse.json();
        // Some responses are { results: [...] }, others may return the entry directly
        return directData?.results?.[0] || directData || null;
      }

      // Fallback: query for id via list endpoint
      const queryResponse = await fetch(
        `https://cdn.builder.io/api/v3/content/${model}?apiKey=${apiKey}&query.id=${encodeURIComponent(contentId)}&cachebust=true`,
        fetchOptions
      );

      if (queryResponse.ok) {
        const queryData = await queryResponse.json();
        return queryData?.results?.[0] || null;
      }

      return null;
    }

    if (!urlPath) return null;

    const urlResponse = await fetch(
      `https://cdn.builder.io/api/v3/content/${model}?apiKey=${apiKey}&url=${encodeURIComponent(urlPath)}&cachebust=true`,
      fetchOptions
    );

    if (!urlResponse.ok) {
      return null;
    }

    const urlData = await urlResponse.json();
    return urlData?.results?.[0] || null;
  } catch (error) {
    console.error('[Builder.io] Error fetching content:', error);
    return null;
  }
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const searchParams = (await props.searchParams) || {};
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

  // Builder preview can pass an explicit model (e.g. model=symbol when editing a Symbol)
  const explicitModel = firstString(searchParams.model);

  // Determine which model to use based on the URL path
  // Check if it's an event page (starts with /events/)
  let model: string;
  if (explicitModel) {
    model = explicitModel;
  } else if (urlPath.startsWith('/events/') || urlPath === '/events') {
    model = 'event-page';
  } else {
    model = modelMapping[urlPath] || 'home-page';
  }

  // When Builder is editing, it can provide an entry/content id rather than relying on URL targeting
  const contentId =
    firstString(searchParams.entry) ||
    firstString(searchParams.contentId) ||
    firstString(searchParams['builder.contentId']) ||
    firstString(searchParams['builder.entry']);

  const isPreview = Boolean(firstString(searchParams['builder.preview'])) || Boolean(firstString(searchParams.preview));

  // Fetch content server-side using Content API
  const content = await fetchBuilderContent({ model, urlPath, contentId, isPreview });

  // Log for debugging
  if (!content && process.env.NODE_ENV === 'development') {
    console.log(`[Builder.io Debug] No content found for:`, {
      model,
      urlPath,
      contentId,
      isPreview,
      apiKey: apiKey ? '✓ Set' : '✗ Missing',
    });
  }

  return (
    <>
      <RenderBuilderContent content={content} model={model} />
    </>
  );
}
