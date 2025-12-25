'use client';

import { Content, isPreviewing } from '@builder.io/sdk-react';
import { customComponents } from '../../builder-registry';
import { useEffect, useState } from 'react';

interface BuilderContentProps {
  content: any;
  model: string;
}

export function RenderBuilderContent({ content, model }: BuilderContentProps) {
  const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
  const [isMounted, setIsMounted] = useState(false);

  // Only render Content on client to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // If no content is found and we're not in preview mode, show a message
  if (!content && !isPreviewing()) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p>Create this page in Builder.io to see content here.</p>
        <p>
          <a href="https://builder.io" target="_blank" rel="noopener noreferrer">
            Go to Builder.io →
          </a>
        </p>
      </div>
    );
  }

  // Show nothing during SSR, render Content only on client
  if (!isMounted) {
    return null;
  }

  return (
    <Content
      content={content}
      model={model}
      apiKey={apiKey}
      customComponents={customComponents}
    />
  );
}
