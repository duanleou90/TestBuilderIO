'use client';

interface EventItem {
  imageUrl: string;
  title: string;
  date: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

interface EventsSectionProps {
  backgroundImage?: string;
  supHeading?: string;
  heading?: string;
  events?: EventItem[];
}

export function EventsSection({
  backgroundImage = '/images/dummy-img-1920x900-2.jpg',
  supHeading = 'Our Events',
  heading = "Don't miss our event",
  events = [
    {
      imageUrl: '/images/dummy-img-600x400.jpg',
      title: 'English Day on Carfree day',
      date: 'March 19, 2016 / 08:00 am - 10:00 am',
      description: 'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
      buttonText: 'JOIN NOW',
      buttonUrl: '#',
    },
    {
      imageUrl: '/images/dummy-img-600x400.jpg',
      title: 'Play & Study with Mrs. Smith',
      date: 'March 19, 2016 / 08:00 am - 10:00 am',
      description: 'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
      buttonText: 'JOIN NOW',
      buttonUrl: '#',
    },
    {
      imageUrl: '/images/dummy-img-600x400.jpg',
      title: 'Drawing at City Park',
      date: 'March 19, 2016 / 08:00 am - 10:00 am',
      description: 'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
      buttonText: 'JOIN NOW',
      buttonUrl: '#',
    },
  ],
}: EventsSectionProps) {
  return (
    <div
      className="section bgi-cover-center"
      data-background={backgroundImage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="supheading text-center">{supHeading}</p>
              <h2 className="section-heading text-center mb-5">{heading}</h2>
            </div>
          </div>

          <div className="row mt-4">
            {events.map((event, index) => (
              <div key={index} className="col-sm-12 col-md-12 col-lg-4 mb-5">
                <div className="rs-news-1">
                  <div className="media-box">
                    <img src={event.imageUrl} alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="title">{event.title}</div>
                    <div className="meta-date">{event.date}</div>
                    <p>{event.description}</p>
                    <div className="text-center">
                      <a href={event.buttonUrl} className="btn btn-primary">
                        {event.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const eventsSectionInfo = {
  name: 'Events Section',
  inputs: [
    { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], defaultValue: '/images/dummy-img-1920x900-2.jpg' },
    { name: 'supHeading', type: 'string', defaultValue: 'Our Events' },
    { name: 'heading', type: 'string', defaultValue: "Don't miss our event" },
    {
      name: 'events',
      type: 'list',
      subFields: [
        { name: 'imageUrl', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], required: true },
        { name: 'title', type: 'string', required: true },
        { name: 'date', type: 'string', defaultValue: 'March 19, 2016 / 08:00 am - 10:00 am' },
        { name: 'description', type: 'longText' },
        { name: 'buttonText', type: 'string', defaultValue: 'JOIN NOW' },
        { name: 'buttonUrl', type: 'url', defaultValue: '#' },
      ],
    },
  ],
};

export default EventsSection;
