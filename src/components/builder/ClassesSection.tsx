'use client';

interface ClassItem {
  imageUrl: string;
  title: string;
  price: string;
  openClass: string;
  description: string;
  ageRange: string;
  classSize: string;
}

interface ClassesSectionProps {
  supHeading?: string;
  heading?: string;
  classes?: ClassItem[];
  showMoreButton?: boolean;
  moreButtonText?: string;
  moreButtonUrl?: string;
}

export function ClassesSection({
  supHeading = 'Our Programs',
  heading = 'Popular Classes',
  classes = [
    {
      imageUrl: '/images/dummy-img-600x400.jpg',
      title: 'Drawing Classes',
      price: '$20',
      openClass: '08:00 am - 10:00 am',
      description: 'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
      ageRange: 'Age 2-5 years',
      classSize: 'Class Size 20',
    },
    {
      imageUrl: '/images/dummy-img-600x400.jpg',
      title: 'Gaming Classes',
      price: '$20',
      openClass: '08:00 am - 10:00 am',
      description: 'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
      ageRange: 'Age 2-5 years',
      classSize: 'Class Size 20',
    },
    {
      imageUrl: '/images/dummy-img-600x400.jpg',
      title: 'Learning Classes',
      price: '$20',
      openClass: '08:00 am - 10:00 am',
      description: 'We provide high quality design at vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores...',
      ageRange: 'Age 2-5 years',
      classSize: 'Class Size 20',
    },
  ],
  showMoreButton = true,
  moreButtonText = 'SEE MORE CLASSES',
  moreButtonUrl = '#',
}: ClassesSectionProps) {
  return (
    <div className="">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="supheading text-center">{supHeading}</p>
              <h2 className="section-heading text-center mb-5">{heading}</h2>
            </div>
          </div>

          <div className="row mt-4">
            {classes.map((classItem, index) => (
              <div key={index} className="col-sm-12 col-md-12 col-lg-4">
                <div className="rs-class-box mb-5">
                  <div className="media-box">
                    <img src={classItem.imageUrl} alt="" className="img-fluid" />
                  </div>
                  <div className="body-box">
                    <div className="class-name">
                      <div className="title">{classItem.title}</div>
                      <div className="price">{classItem.price}</div>
                    </div>
                    <div className="open-class">
                      Open Class : <span>{classItem.openClass}</span>
                    </div>
                    <p>{classItem.description}</p>
                    <div className="detail">
                      <div className="age col">{classItem.ageRange}</div>
                      <div className="size col">{classItem.classSize}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showMoreButton && (
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <div className="text-center">
                  <a href={moreButtonUrl} className="btn btn-primary">
                    {moreButtonText}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export const classesSectionInfo = {
  name: 'Classes Section',
  inputs: [
    { name: 'supHeading', type: 'string', defaultValue: 'Our Programs' },
    { name: 'heading', type: 'string', defaultValue: 'Popular Classes' },
    {
      name: 'classes',
      type: 'list',
      subFields: [
        { name: 'imageUrl', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], required: true },
        { name: 'title', type: 'string', required: true },
        { name: 'price', type: 'string', defaultValue: '$20' },
        { name: 'openClass', type: 'string', defaultValue: '08:00 am - 10:00 am' },
        { name: 'description', type: 'longText' },
        { name: 'ageRange', type: 'string', defaultValue: 'Age 2-5 years' },
        { name: 'classSize', type: 'string', defaultValue: 'Class Size 20' },
      ],
    },
    { name: 'showMoreButton', type: 'boolean', defaultValue: true },
    { name: 'moreButtonText', type: 'string', defaultValue: 'SEE MORE CLASSES' },
    { name: 'moreButtonUrl', type: 'url', defaultValue: '#' },
  ],
};

export default ClassesSection;
