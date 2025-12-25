'use client';

import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  phone?: string;
  email?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  logoSrc?: string;
  navItems?: {
    label: string;
    url: string;
    isActive?: boolean;
    dropdownItems?: { label: string; url: string }[];
  }[];
}

export function Header({
  phone = '+62 7144 3300',
  email = 'support@kids.com',
  facebookUrl = '#',
  twitterUrl = '#',
  instagramUrl = '#',
  linkedinUrl = '#',
  logoSrc = '/images/logo.png',
  navItems = [
    { label: 'HOME', url: '/', isActive: true },
    { label: 'ABOUT US', url: '/about' },
    { label: 'CLASSES', url: '/classes' },
    { label: 'TEACHERS', url: '/teachers' },
    {
      label: 'PAGES',
      url: '#',
      dropdownItems: [
        { label: 'GALLERY', url: '/gallery' },
        { label: 'TESTIMONIALS', url: '/testimonials' },
        { label: 'FAQ', url: '/faq' },
        { label: 'EVENTS', url: '/events' },
        { label: 'NEWS', url: '/news' },
      ],
    },
    { label: 'CONTACT US', url: '/contact' },
  ],
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="header header-1">
      {/* TOPBAR */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8 col-md-6">
              <div className="info">
                <div className="info-item">
                  <i className="fa fa-phone"></i> {phone}
                </div>
                <div className="info-item">
                  <i className="fa fa-envelope-o"></i>{' '}
                  <a href={`mailto:${email}`} title="">
                    {email}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-md-6">
              <div className="sosmed-icon pull-right d-inline-flex">
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

      {/* NAVBAR SECTION */}
      <div className="navbar-main">
        <div className="container">
          <nav id="navbar-example" className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
              <Image src={logoSrc} alt="Logo" width={150} height={50} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNavDropdown"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div 
              className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`} 
              id="navbarNavDropdown"
              style={isMenuOpen ? { display: 'block' } : {}}
            >
              <ul className="navbar-nav ml-auto">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`nav-item ${item.isActive ? 'active' : ''} ${item.dropdownItems ? 'dropdown dmenu' : ''} ${openDropdown === index ? 'show' : ''}`}
                  >
                    {item.dropdownItems ? (
                      <>
                        <a
                          className="nav-link dropdown-toggle"
                          href={item.url}
                          role="button"
                          onClick={(e) => toggleDropdown(index, e)}
                          aria-haspopup="true"
                          aria-expanded={openDropdown === index}
                        >
                          {item.label}
                        </a>
                        <div className={`dropdown-menu ${openDropdown === index ? 'show' : ''}`}>
                          {item.dropdownItems.map((dropItem, dropIndex) => (
                            <a key={dropIndex} className="dropdown-item" href={dropItem.url}>
                              {dropItem.label}
                            </a>
                          ))}
                        </div>
                      </>
                    ) : (
                      <a className="nav-link" href={item.url}>
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export const headerInfo = {
  name: 'Header',
  inputs: [
    { name: 'phone', type: 'string', defaultValue: '+62 7144 3300' },
    { name: 'email', type: 'string', defaultValue: 'support@kids.com' },
    { name: 'facebookUrl', type: 'url', defaultValue: '#' },
    { name: 'twitterUrl', type: 'url', defaultValue: '#' },
    { name: 'instagramUrl', type: 'url', defaultValue: '#' },
    { name: 'linkedinUrl', type: 'url', defaultValue: '#' },
    { name: 'logoSrc', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'], defaultValue: '/images/logo.png' },
    {
      name: 'navItems',
      type: 'list',
      defaultValue: [
        { label: 'HOME', url: '/', isActive: true },
        { label: 'ABOUT US', url: '/about', isActive: false },
        { label: 'CLASSES', url: '/classes', isActive: false },
        { label: 'TEACHERS', url: '/teachers', isActive: false },
        {
          label: 'PAGES',
          url: '#',
          isActive: false,
          dropdownItems: [
            { label: 'GALLERY', url: '/gallery' },
            { label: 'TESTIMONIALS', url: '/testimonials' },
            { label: 'FAQ', url: '/faq' },
            { label: 'EVENTS', url: '/events' },
            { label: 'NEWS', url: '/news' },
          ],
        },
        { label: 'CONTACT US', url: '/contact', isActive: false },
      ],
      subFields: [
        { name: 'label', type: 'string', required: true },
        { name: 'url', type: 'url', required: true },
        { name: 'isActive', type: 'boolean', defaultValue: false },
        {
          name: 'dropdownItems',
          type: 'list',
          subFields: [
            { name: 'label', type: 'string', required: true },
            { name: 'url', type: 'url', required: true },
          ],
        },
      ],
    },
  ],
};

export default Header;
