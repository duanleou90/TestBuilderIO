'use client';

import { useState } from 'react';

interface AccordionItem {
  title?: string;
  content?: string;
}

interface EventAccordionProps {
  items?: AccordionItem[];
}

export function EventAccordion({
  items = [
    {
      title: 'How do children learn?',
      content:
        'Create and publish dynamic websites for desktop, tablet, and mobile devices that meet the latest web standards- without writing code. Design freely using familiar tools and hundreds of web fonts. Easily add interactivity, including slide shows, forms, and more.',
    },
    {
      title: 'When can I enroll?',
      content:
        'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.',
    },
  ],
}: EventAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Handle case where items might be undefined or empty
  if (!items || items.length === 0) {
    return <div>No accordion items</div>;
  }

  return (
    <div className="accordion rs-accordion" id="eventAccordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div key={index} className="card">
            <div className="card-header" id={`heading${index}`}>
              <h3 className="title">
                <button
                  className={`btn btn-link ${!isOpen ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`collapse${index}`}
                >
                  {item?.title || 'Untitled'}
                </button>
              </h3>
            </div>
            {/* Remove Bootstrap collapse classes and use inline styles only */}
            {isOpen && (
              <div
                id={`collapse${index}`}
                aria-labelledby={`heading${index}`}
                style={{
                  padding: '15px 20px',
                  backgroundColor: '#fff',
                  borderTop: '1px solid #eee',
                }}
              >
                <div className="card-body" style={{ padding: 0 }}>
                  {item?.content || 'No content provided'}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export const eventAccordionInfo = {
  name: 'EventAccordion',
  friendlyName: 'Event Accordion',
  inputs: [
    {
      name: 'items',
      type: 'list',
      defaultValue: [
        {
          title: 'How do children learn?',
          content:
            'Create and publish dynamic websites for desktop, tablet, and mobile devices that meet the latest web standards- without writing code.',
        },
        {
          title: 'When can I enroll?',
          content:
            'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
        },
      ],
      subFields: [
        {
          name: 'title',
          type: 'string',
          required: true,
          helperText: 'Accordion item title/question',
        },
        {
          name: 'content',
          type: 'longText',
          required: true,
          helperText: 'Accordion item content/answer',
        },
      ],
    },
  ],
};

export default EventAccordion;
