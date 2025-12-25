'use client';

interface CTASectionProps {
  heading?: string;
  subHeading?: string;
  buttonText?: string;
  buttonUrl?: string;
}

export function CTASection({
  heading = "Let's join the best kindergarten now!",
  subHeading = 'We provide high standar clean website for your business solutions',
  buttonText = 'CONTACT US',
  buttonUrl = '/contact',
}: CTASectionProps) {
  return (
    <div className="section bg-tertiary">
      <div className="content-wrap py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-12">
              <div className="cta-1">
                <div className="body-text mb-3">
                  <h3 className="my-1 text-secondary">{heading}</h3>
                  <p className="uk18 mb-0 text-white">{subHeading}</p>
                </div>
                <div className="body-action">
                  <a href={buttonUrl} className="btn btn-primary mt-3">
                    {buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ctaSectionInfo = {
  name: 'CTA Section',
  inputs: [
    { name: 'heading', type: 'string', defaultValue: "Let's join the best kindergarten now!" },
    { name: 'subHeading', type: 'string', defaultValue: 'We provide high standar clean website for your business solutions' },
    { name: 'buttonText', type: 'string', defaultValue: 'CONTACT US' },
    { name: 'buttonUrl', type: 'url', defaultValue: '/contact' },
  ],
};

export default CTASection;
