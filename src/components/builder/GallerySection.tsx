'use client';

interface GalleryItem {
  imageUrl: string;
  title: string;
}

interface GallerySectionProps {
  supHeading?: string;
  heading?: string;
  items?: GalleryItem[];
}

export function GallerySection({
  supHeading = 'Our Gallery',
  heading = 'Moment from kids',
  items = [
    { imageUrl: '/images/dummy-img-600x400.jpg', title: 'Gallery #1' },
    { imageUrl: '/images/dummy-img-600x400.jpg', title: 'Gallery #2' },
    { imageUrl: '/images/dummy-img-600x400.jpg', title: 'Gallery #3' },
    { imageUrl: '/images/dummy-img-600x400.jpg', title: 'Gallery #4' },
    { imageUrl: '/images/dummy-img-600x400.jpg', title: 'Gallery #5' },
    { imageUrl: '/images/dummy-img-600x400.jpg', title: 'Gallery #6' },
  ],
}: GallerySectionProps) {
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

          <div className="row popup-gallery gutter-5">
            {items.map((item, index) => (
              <div key={index} className="col-xs-12 col-md-6 col-lg-4">
                <div className="box-gallery">
                  <a href={item.imageUrl} title={item.title}>
                    <img src={item.imageUrl} alt="" className="img-fluid" />
                    <div className="project-info">
                      <div className="project-icon">
                        <span className="fa fa-search"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const gallerySectionInfo = {
  name: 'Gallery Section',
  inputs: [
    { name: 'supHeading', type: 'string', defaultValue: 'Our Gallery' },
    { name: 'heading', type: 'string', defaultValue: 'Moment from kids' },
    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'imageUrl', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], required: true },
        { name: 'title', type: 'string', required: true },
      ],
    },
  ],
};

export default GallerySection;
