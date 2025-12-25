'use client';

interface WhyChooseUsProps {
  backgroundImage?: string;
  supHeading?: string;
  heading?: string;
  description?: string;
  checkPoints?: string[];
  sideImageUrl?: string;
}

export function WhyChooseUs({
  backgroundImage = '/images/dummy-img-1920x900-3.jpg',
  supHeading = 'Why Choose Us',
  heading = 'Best Kindergarten',
  description = 'Dolor sit amet, dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod. Dolor sit amet consectetuer adipiscing elit, sed diam nonummy nibh euismod. Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent. Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent.',
  checkPoints = [
    '100% education, for your kids, consectetuer adipiscing elit, sed diam nonummy nibh euismod. Dolor sit amet, dolor gravida placerat liberolorem ipsum dolor consectetur adipiscing elit, sed do eiusmod.',
    'More programs activities, sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet.',
    'More benefit nonummy nibh euismod. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  ],
  sideImageUrl = '/images/dummy-img-600x700.jpg',
}: WhyChooseUsProps) {
  return (
    <div
      className="section bgi-repeat"
      data-background={backgroundImage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content-wrap pb-0">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <p className="supheading">{supHeading}</p>
              <h2 className="section-heading">{heading}</h2>
              <p className="text-white">{description}</p>
              {checkPoints.map((point, index) => (
                <p key={index} className="p-check text-white">
                  {point}
                </p>
              ))}
              <div className="spacer-90"></div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <img src={sideImageUrl} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const whyChooseUsInfo = {
  name: 'Why Choose Us',
  inputs: [
    { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], defaultValue: '/images/dummy-img-1920x900-3.jpg' },
    { name: 'supHeading', type: 'string', defaultValue: 'Why Choose Us' },
    { name: 'heading', type: 'string', defaultValue: 'Best Kindergarten' },
    { name: 'description', type: 'longText' },
    {
      name: 'checkPoints',
      type: 'list',
      subFields: [{ name: 'text', type: 'longText' }],
    },
    { name: 'sideImageUrl', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], defaultValue: '/images/dummy-img-600x700.jpg' },
  ],
};

export default WhyChooseUs;
