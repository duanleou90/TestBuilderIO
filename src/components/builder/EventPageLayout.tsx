'use client';

import { BuilderBlocks } from '@builder.io/react';

interface EventPageLayoutProps {
  // Event Header fields (for 9-column)
  image?: string;
  name?: string;
  publishedDate?: string;
  // Sidebar fields (for 3-column)
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
  // Builder blocks for content slots
  mainContent?: any[];
  sidebarContent?: any[];
  // Builder block reference (passed automatically by Builder.io)
  builderBlock?: any;
}

export function EventPageLayout({
  // Event Header fields
  image = '/images/dummy-img-900x600.jpg',
  name = 'English Day on Carfree day',
  publishedDate = 'March 19, 2016 / 08:00 am - 10:00 am',
  // Sidebar fields
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
  // Builder blocks
  mainContent = [],
  sidebarContent = [],
  builderBlock,
}: EventPageLayoutProps) {
  return (
    <div className="section">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            {/* 9-Column Section */}
            <div className="col-sm-12 col-md-12 col-lg-9">
              {/* Default Event Header */}
              <div className="single-news">
                <img src={image} alt={name} className="img-fluid rounded" />
                <div className="spacer-30"></div>
                <h2 className="title">{name}</h2>
                <div className="meta-date">{publishedDate}</div>
                <div className="spacer-30"></div>
              </div>
              {/* Droppable content slot for 9-column using BuilderBlocks (Gen 1) */}
              <BuilderBlocks
                parentElementId={builderBlock?.id}
                dataPath="component.options.mainContent"
                blocks={mainContent}
              />
            </div>

            {/* 3-Column Section */}
            <div className="col-sm-12 col-md-12 col-lg-3">
              {/* Default Event Sidebar */}
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
              {/* Droppable content slot for 3-column using BuilderBlocks (Gen 1) */}
              <BuilderBlocks
                parentElementId={builderBlock?.id}
                dataPath="component.options.sidebarContent"
                blocks={sidebarContent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const eventPageLayoutInfo = {
  name: 'EventPageLayout',
  friendlyName: 'Event Page Layout (9-3)',
  canHaveChildren: true,
  inputs: [
    // Event Header inputs
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
    // Sidebar inputs
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
    // Content slots - using 'blocks' type for Gen 1
    {
      name: 'mainContent',
      type: 'blocks',
      hideFromUI: true,
      defaultValue: [],
    },
    {
      name: 'sidebarContent',
      type: 'blocks',
      hideFromUI: true,
      defaultValue: [],
    },
  ],
};

export default EventPageLayout;
