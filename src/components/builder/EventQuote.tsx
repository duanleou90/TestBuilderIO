'use client';

interface EventQuoteProps {
  content?: string;
}

export function EventQuote({
  content = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}: EventQuoteProps) {
  return <blockquote>{content}</blockquote>;
}

export const eventQuoteInfo = {
  name: 'EventQuote',
  friendlyName: 'Event Quote',
  inputs: [
    {
      name: 'content',
      type: 'longText',
      defaultValue:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      helperText: 'Quote content',
    },
  ],
};

export default EventQuote;

