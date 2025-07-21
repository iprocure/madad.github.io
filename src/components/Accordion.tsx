'use client';

import { AccordionItem } from '@/types';
import { useAccordion } from '@/hooks/useAccordion';

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
}

const Accordion = ({
  items,
  allowMultiple = false,
  defaultOpenItems = []
}: AccordionProps) => {
  const { toggleItem, isOpen } = useAccordion({
    allowMultiple,
    defaultOpenItems,
    trackAnalytics: true
  });

  return (
    <div className="accordion">
      {items.map((item) => (
        <div
          key={item.id}
          className={`accordion-item ${isOpen(item.id) ? 'active' : ''}`}
        >
          <button
            className="accordion-header"
            onClick={() => toggleItem(item.id)}
          >
            <span>{item.question}</span>
            <svg 
              className="accordion-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              width="45" 
              height="31"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="accordion-content">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
