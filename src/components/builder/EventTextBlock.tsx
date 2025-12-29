'use client';

interface EventTextBlockProps {
  content?: string;
}

export function EventTextBlock({
  content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}: EventTextBlockProps) {
  return <p>{content}</p>;
}

export const eventTextBlockInfo = {
  name: 'EventTextBlock',
  friendlyName: 'Event Text Block',
  inputs: [
    {
      name: 'content',
      type: 'longText',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      helperText: 'Text content for the paragraph',
    },
  ],
};

export default EventTextBlock;

