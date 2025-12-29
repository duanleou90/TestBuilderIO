'use client';

interface EventHighlightProps {
  content?: string;
}

export function EventHighlight({
  content = 'Research Beyond The Business Plan',
}: EventHighlightProps) {
  return (
    <p className="uk24 text-primary">
      <strong>{content}</strong>
    </p>
  );
}

export const eventHighlightInfo = {
  name: 'EventHighlight',
  friendlyName: 'Event Highlight',
  inputs: [
    {
      name: 'content',
      type: 'string',
      defaultValue: 'Research Beyond The Business Plan',
      helperText: 'Highlighted text content',
    },
  ],
};

export default EventHighlight;

