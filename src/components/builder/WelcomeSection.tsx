'use client';

interface WelcomeSectionProps {
  imageUrl?: string;
  heading?: string;
  paragraphs?: string[];
  buttonText?: string;
  buttonUrl?: string;
}

export function WelcomeSection({
  imageUrl = '/images/dummy-img-900x600.jpg',
  heading = 'Welcome to Kids',
  paragraphs = [
    'Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis iste natus error sitdolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod. Praesent interdum est gravida vehicula est node maecenas loareet morbi a dosis luctus novum est praesent. Magna est consectetur interdum modest dictum.',
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo invent.',
  ],
  buttonText = 'DISCOVER MORE',
  buttonUrl = '#',
}: WelcomeSectionProps) {
  return (
    <div className="section">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6">
              <img src={imageUrl} alt="" className="img-fluid img-border" />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h2 className="section-heading">{heading}</h2>
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="spacer-10"></div>
              <a href={buttonUrl} className="btn btn-secondary">
                {buttonText}
              </a>
              <div className="spacer-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const welcomeSectionInfo = {
  name: 'Welcome Section',
  inputs: [
    { name: 'imageUrl', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], defaultValue: '/images/dummy-img-900x600.jpg' },
    { name: 'heading', type: 'string', defaultValue: 'Welcome to Kids' },
    {
      name: 'paragraphs',
      type: 'list',
      subFields: [{ name: 'text', type: 'longText' }],
    },
    { name: 'buttonText', type: 'string', defaultValue: 'DISCOVER MORE' },
    { name: 'buttonUrl', type: 'url', defaultValue: '#' },
  ],
};

export default WelcomeSection;
