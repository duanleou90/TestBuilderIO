'use client';

import Image from 'next/image';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface LinkItem {
  label: string;
  url: string;
}

interface FooterProps {
  backgroundImage?: string;
  logoSrc?: string;
  aboutText?: string;
  contactInfo?: ContactInfo;
  usefulLinks?: LinkItem[];
  socialText?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  copyrightText?: string;
}

export function Footer({
  backgroundImage = '/images/dummy-img-1920x900-3.jpg',
  logoSrc = '/images/logo.png',
  aboutText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.',
  contactInfo = {
    address: '99 S.t Jomblo Park Pekanbaru 28292. Indonesia',
    phone: '(0761) 654-123987',
    email: 'info@yoursite.com',
    hours: 'Mon - Sat 09:00 - 17:00',
  },
  usefulLinks = [
    { label: 'About us', url: '/about' },
    { label: 'Our Teacher', url: '/teachers' },
    { label: 'Our Classes', url: '/classes' },
    { label: 'Our Events', url: '/events' },
    { label: 'Contact Us', url: '/contact' },
  ],
  socialText = 'Lit sed The Best in dolor sit amet consectetur adipisicing elit sedconsectetur adipisicing',
  facebookUrl = '#',
  twitterUrl = '#',
  instagramUrl = '#',
  linkedinUrl = '#',
  copyrightText = 'Copyright 2019 © Kids HTML Template. Designed by Rometheme.',
}: FooterProps) {
  return (
    <div
      className="footer"
      data-background={backgroundImage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-item">
                <Image src={logoSrc} alt="logo bottom" className="logo-bottom" width={150} height={50} />
                <div className="spacer-30"></div>
                <p>{aboutText}</p>
                <a href="#">
                  <i className="fa fa-angle-right"></i> Read More
                </a>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-title">Contact Info</div>
                <ul className="list-info">
                  <li>
                    <div className="info-icon">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="info-text">{contactInfo.address}</div>
                  </li>
                  <li>
                    <div className="info-icon">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="info-text">{contactInfo.phone}</div>
                  </li>
                  <li>
                    <div className="info-icon">
                      <span className="fa fa-envelope"></span>
                    </div>
                    <div className="info-text">{contactInfo.email}</div>
                  </li>
                  <li>
                    <div className="info-icon">
                      <span className="fa fa-clock-o"></span>
                    </div>
                    <div className="info-text">{contactInfo.hours}</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-title">Useful Links</div>
                <ul className="list">
                  {usefulLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.url} title={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-title">Get in Touch</div>
                <p>{socialText}</p>
                <div className="sosmed-icon d-inline-flex">
                  <a href={facebookUrl} className="fb">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href={twitterUrl} className="tw">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href={instagramUrl} className="ig">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href={linkedinUrl} className="in">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fcopy">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <p className="ftex" dangerouslySetInnerHTML={{ __html: copyrightText }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const footerInfo = {
  name: 'Footer',
  inputs: [
    { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], defaultValue: '/images/dummy-img-1920x900-3.jpg' },
    { name: 'logoSrc', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'], defaultValue: '/images/logo.png' },
    { name: 'aboutText', type: 'longText' },
    {
      name: 'contactInfo',
      type: 'object',
      subFields: [
        { name: 'address', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'hours', type: 'string' },
      ],
    },
    {
      name: 'usefulLinks',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string', required: true },
        { name: 'url', type: 'url', required: true },
      ],
    },
    { name: 'socialText', type: 'longText' },
    { name: 'facebookUrl', type: 'url', defaultValue: '#' },
    { name: 'twitterUrl', type: 'url', defaultValue: '#' },
    { name: 'instagramUrl', type: 'url', defaultValue: '#' },
    { name: 'linkedinUrl', type: 'url', defaultValue: '#' },
    { name: 'copyrightText', type: 'richText' },
  ],
};

export default Footer;
