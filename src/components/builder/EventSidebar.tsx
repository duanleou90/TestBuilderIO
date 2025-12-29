'use client';

interface EventSidebarProps {
  address?: string;
  phone?: string;
  website?: string;
  startTime?: string;
  endTime?: string;
  organizerName?: string;
  organizerPhone?: string;
  organizerWebsite?: string;
  joinButtonText?: string;
  joinButtonUrl?: string;
}

export function EventSidebar({
  address = '99 S.t Jomblo Park Pekanbaru 28292. Indonesia',
  phone = '074574217447',
  website = 'http://www.website.com',
  startTime = 'July 16 @ 11:00 am',
  endTime = 'July 29 @ 4:00 pm',
  organizerName = 'Max Organizer',
  organizerPhone = '074574217447',
  organizerWebsite = 'http://www.website.com',
  joinButtonText = 'JOIN',
  joinButtonUrl = '#',
}: EventSidebarProps) {
  return (
    <div className="events-widget">
      <div className="widget-title">Venue</div>
      <dl>
        <dt>{address}</dt>
        <dt>Phone:</dt>
        <dd>{phone}</dd>
        <dt>Website:</dt>
        <dd>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </dd>
      </dl>

      <div className="widget-title">Detail</div>
      <dl>
        <dt>Start:</dt>
        <dd>{startTime}</dd>
        <dt>End:</dt>
        <dd>{endTime}</dd>
      </dl>

      <div className="widget-title">Organizer</div>
      <dl>
        <dt>{organizerName}</dt>
        <dt>Phone:</dt>
        <dd>{organizerPhone}</dd>
        <dt>Website:</dt>
        <dd>
          <a href={organizerWebsite} target="_blank" rel="noopener noreferrer">
            {organizerWebsite}
          </a>
        </dd>
      </dl>
      <div className="spacer-30"></div>
      <a href={joinButtonUrl} className="btn btn-primary btn-block">
        {joinButtonText}
      </a>
      <div className="spacer-30"></div>
    </div>
  );
}

export const eventSidebarInfo = {
  name: 'EventSidebar',
  friendlyName: 'Event Sidebar',
  inputs: [
    {
      name: 'address',
      type: 'string',
      defaultValue: '99 S.t Jomblo Park Pekanbaru 28292. Indonesia',
      helperText: 'Venue address',
    },
    {
      name: 'phone',
      type: 'string',
      defaultValue: '074574217447',
      helperText: 'Venue phone number',
    },
    {
      name: 'website',
      type: 'url',
      defaultValue: 'http://www.website.com',
      helperText: 'Venue website URL',
    },
    {
      name: 'startTime',
      type: 'string',
      defaultValue: 'July 16 @ 11:00 am',
      helperText: 'Event start date and time',
    },
    {
      name: 'endTime',
      type: 'string',
      defaultValue: 'July 29 @ 4:00 pm',
      helperText: 'Event end date and time',
    },
    {
      name: 'organizerName',
      type: 'string',
      defaultValue: 'Max Organizer',
      helperText: 'Organizer name',
    },
    {
      name: 'organizerPhone',
      type: 'string',
      defaultValue: '074574217447',
      helperText: 'Organizer phone number',
    },
    {
      name: 'organizerWebsite',
      type: 'url',
      defaultValue: 'http://www.website.com',
      helperText: 'Organizer website URL',
    },
    {
      name: 'joinButtonText',
      type: 'string',
      defaultValue: 'JOIN',
      helperText: 'Text for the join button',
    },
    {
      name: 'joinButtonUrl',
      type: 'url',
      defaultValue: '#',
      helperText: 'URL for the join button',
    },
  ],
};

export default EventSidebar;

