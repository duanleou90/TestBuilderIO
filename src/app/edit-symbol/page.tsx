import { RenderBuilderContent } from '../components/builder-content';

function firstString(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

// This route exists specifically for Builder "Symbol" editing.
// Configure the Builder "symbol" model Preview URL to point here (e.g. http://localhost:3000/edit-symbol).
export default async function EditSymbolPage(props: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = (await props.searchParams) || {};

  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
  if (!apiKey) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Builder.io Setup Required</h1>
        <p>Please set your NEXT_PUBLIC_BUILDER_API_KEY environment variable.</p>
      </div>
    );
  }

  const model = firstString(searchParams.model) || 'symbol';
  const contentId =
    firstString(searchParams.entry) ||
    firstString(searchParams.contentId) ||
    firstString(searchParams['builder.contentId']) ||
    firstString(searchParams['builder.entry']);

  const isPreview = Boolean(firstString(searchParams['builder.preview'])) || Boolean(firstString(searchParams.preview));

  // Fetch by id (symbols do not rely on URL targeting)
  let content: any = null;
  if (contentId) {
    try {
      const fetchOptions: RequestInit = isPreview ? { cache: 'no-store' } : {};

      // Try direct-by-id endpoint first
      const directResponse = await fetch(
        `https://cdn.builder.io/api/v3/content/${model}/${encodeURIComponent(contentId)}?apiKey=${apiKey}&cachebust=true`,
        fetchOptions
      );
      if (directResponse.ok) {
        const directData = await directResponse.json();
        content = directData?.results?.[0] || directData || null;
      } else {
        // Fallback: query for id via list endpoint
        const queryResponse = await fetch(
          `https://cdn.builder.io/api/v3/content/${model}?apiKey=${apiKey}&query.id=${encodeURIComponent(contentId)}&cachebust=true`,
          fetchOptions
        );
        if (queryResponse.ok) {
          const queryData = await queryResponse.json();
          content = queryData?.results?.[0] || null;
        }
      }
    } catch (err) {
      console.error('[Builder.io] Error fetching symbol content:', err);
    }
  }

  return <RenderBuilderContent content={content} model={model} />;
}


