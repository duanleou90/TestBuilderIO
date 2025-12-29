'use client';

import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from 'react';

// Import the registry to ensure components are registered
import '../../builder-registry';

// Initialize Builder with API key (client-side only)
if (typeof window !== 'undefined') {
  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');
}

interface BuilderContentProps {
  content: any;
  model: string;
}

export function RenderBuilderContent({ content, model }: BuilderContentProps) {
  const isPreviewing = useIsPreviewing();
  const [isMounted, setIsMounted] = useState(false);

  // Initialize Builder on mount and handle hydration
  useEffect(() => {
    builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');
    setIsMounted(true);
  }, []);
  
  // If no content is found and we're not in preview mode, show a message
  if (!content && !isPreviewing) {
    return (
      <div style={{ padding: '50px', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Page Not Found</h1>
        <p>No published content found for the model: <strong>{model}</strong></p>
        <div style={{ marginTop: '30px', padding: '20px', background: '#f5f5f5', borderRadius: '8px', textAlign: 'left' }}>
          <h3 style={{ marginTop: 0 }}>Possible solutions:</h3>
          <ol style={{ paddingLeft: '20px' }}>
            <li>Make sure you've created an entry in Builder.io for the <strong>{model}</strong> model</li>
            <li>Check that the entry's <strong>URL targeting</strong> is set correctly</li>
            <li><strong>Publish</strong> your entry in Builder.io (draft content won't show in production mode)</li>
            <li>If you just created the entry, wait a moment and refresh the page</li>
          </ol>
        </div>
        <p style={{ marginTop: '30px' }}>
          <a 
            href="https://builder.io" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#FD4D40', textDecoration: 'underline', fontSize: '16px' }}
          >
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
    <BuilderComponent
      content={content}
      model={model}
    />
  );
}
