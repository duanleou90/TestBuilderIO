'use client';

interface BreadcrumbItem {
  label: string;
  url?: string;
  isActive?: boolean;
}

interface PageBannerProps {
  title?: string;
  backgroundImage?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageBanner({
  title = 'About Us',
  backgroundImage = '/images/dummy-img-1920x300.jpg',
  breadcrumbs = [
    { label: 'Home', url: '/', isActive: false },
    { label: 'About Us', isActive: true },
  ],
}: PageBannerProps) {
  return (
    <div 
      className="section banner-page" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="content-wrap pos-relative">
        <div className="d-flex justify-content-center bd-highlight mb-3">
          <div className="title-page">{title}</div>
        </div>
        <div className="d-flex justify-content-center bd-highlight mb-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              {breadcrumbs.map((item, index) => (
                <li 
                  key={index}
                  className={`breadcrumb-item ${item.isActive ? 'active' : ''}`}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  {item.isActive || !item.url ? (
                    item.label
                  ) : (
                    <a href={item.url}>{item.label}</a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

export const pageBannerInfo = {
  name: 'PageBanner',
  friendlyName: 'Page Banner',
  inputs: [
    { 
      name: 'title', 
      type: 'string', 
      defaultValue: 'About Us',
      helperText: 'The main title displayed on the banner'
    },
    { 
      name: 'backgroundImage', 
      type: 'file', 
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
      defaultValue: '/images/dummy-img-1920x300.jpg',
      helperText: 'Background image for the banner (recommended size: 1920x300px)'
    },
    {
      name: 'breadcrumbs',
      type: 'list',
      defaultValue: [
        { label: 'Home', url: '/', isActive: false },
        { label: 'About Us', isActive: true },
      ],
      subFields: [
        { 
          name: 'label', 
          type: 'string', 
          required: true,
          helperText: 'Breadcrumb text'
        },
        { 
          name: 'url', 
          type: 'url',
          helperText: 'Link URL (leave empty for active/current page)'
        },
        { 
          name: 'isActive', 
          type: 'boolean', 
          defaultValue: false,
          helperText: 'Mark as current page'
        },
      ],
    },
  ],
};

export default PageBanner;

