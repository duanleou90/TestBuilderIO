'use client';

interface FunFactItem {
  number: string;
  title: string;
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
}

interface FunFactsProps {
  backgroundImage?: string;
  facts?: FunFactItem[];
}

export function FunFacts({
  backgroundImage = '/images/dummy-img-1920x900-2.jpg',
  facts = [
    { number: '852', title: 'Students', bgColor: 'primary' },
    { number: '125', title: 'Teachers', bgColor: 'secondary' },
    { number: '32', title: 'Class Rooms', bgColor: 'tertiary' },
    { number: '15', title: 'Bus Schools', bgColor: 'quaternary' },
  ],
}: FunFactsProps) {
  return (
    <div
      className="section bgi-overlay bgi-cover-center"
      data-background={backgroundImage}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            {facts.map((fact, index) => (
              <div key={index} className="col-sm-6 col-md-3">
                <div className={`rs-funfact bg-${fact.bgColor}`}>
                  <div className="box-fun">
                    <h2>{fact.number}</h2>
                  </div>
                  <div className="title">{fact.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const funFactsInfo = {
  name: 'Fun Facts',
  inputs: [
    { name: 'backgroundImage', type: 'file', allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'], defaultValue: '/images/dummy-img-1920x900-2.jpg' },
    {
      name: 'facts',
      type: 'list',
      subFields: [
        { name: 'number', type: 'string', required: true },
        { name: 'title', type: 'string', required: true },
        { name: 'bgColor', type: 'string', enum: ['primary', 'secondary', 'tertiary', 'quaternary'], defaultValue: 'primary' },
      ],
    },
  ],
};

export default FunFacts;
