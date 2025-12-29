'use client';

interface EventHeaderProps {
  image?: string;
  name?: string;
  publishedDate?: string;
}

export function EventHeader({
  image = '/images/dummy-img-900x600.jpg',
  name = 'English Day on Carfree day',
  publishedDate = 'March 19, 2016 / 08:00 am - 10:00 am',
}: EventHeaderProps) {
  return (
    <div className="single-news">
      <img src={image} alt={name} className="img-fluid rounded" />
      <div className="spacer-30"></div>
      <h2 className="title">{name}</h2>
      <div className="meta-date">{publishedDate}</div>
      <div className="spacer-30"></div>
    </div>
  );
}

export const eventHeaderInfo = {
  name: 'EventHeader',
  friendlyName: 'Event Header',
  inputs: [
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
      defaultValue: '/images/dummy-img-900x600.jpg',
      helperText: 'Event image (recommended size: 900x600px)',
    },
    {
      name: 'name',
      type: 'string',
      defaultValue: 'English Day on Carfree day',
      helperText: 'Event name/title',
    },
    {
      name: 'publishedDate',
      type: 'string',
      defaultValue: 'March 19, 2016 / 08:00 am - 10:00 am',
      helperText: 'Published date and time range',
    },
  ],
};

export default EventHeader;

