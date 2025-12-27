'use client';

interface FeatureBox {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  bgColor: 'primary' | 'secondary' | 'tertiary';
}

interface FeatureBoxesProps {
  boxes?: FeatureBox[];
}

export function FeatureBoxes({
  boxes = [
    {
      icon: 'fa-clock-o',
      title: 'Full Day Programs',
      description: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
      buttonText: 'LEARN MORE',
      buttonUrl: '#',
      bgColor: 'primary',
    },
    {
      icon: 'fa-home',
      title: 'Full Day Programs',
      description: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium',
      buttonText: 'LEARN MORE',
      buttonUrl: '#',
      bgColor: 'secondary',
    },
    {
      icon: 'fa-trophy',
      title: 'Full Day Programs',
      description: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium',
      buttonText: 'LEARN MORE',
      buttonUrl: '#',
      bgColor: 'tertiary',
    },
  ],
}: FeatureBoxesProps) {
  return (
    <div className="section services">
      <div className="content-wrap pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className="row col-0 no-gutters">
                {boxes.map((box, index) => (
                  <div key={index} className="col-sm-12 col-md-4 col-lg-4">
                    <div className={`rs-feature-box-1 bg-${box.bgColor}`}>
                      <i className={`fa ${box.icon}`}></i>
                      <div className="body">
                        <h4>{box.title}</h4>
                        <p>{box.description}</p>
                        <div className="spacer-10"></div>
                        <a href={box.buttonUrl} className="btn">
                          {box.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const featureBoxesInfo = {
  name: 'Feature Boxes',
  inputs: [
    {
      name: 'boxes',
      type: 'list',
      subFields: [
        { name: 'icon', type: 'string', defaultValue: 'fa-clock-o', helperText: 'Font Awesome icon class (e.g., fa-clock-o, fa-home, fa-trophy)' },
        { name: 'title', type: 'string', defaultValue: 'Full Day Programs' },
        { name: 'description', type: 'longText', defaultValue: 'Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium.' },
        { name: 'buttonText', type: 'string', defaultValue: 'LEARN MORE' },
        { name: 'buttonUrl', type: 'url', defaultValue: '#' },
        { name: 'bgColor', type: 'string', enum: ['primary', 'secondary', 'tertiary'], defaultValue: 'primary' },
      ],
    },
  ],
};

export default FeatureBoxes;
