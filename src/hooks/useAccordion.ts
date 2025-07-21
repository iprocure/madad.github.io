'use client';

import { useState, useCallback } from 'react';
import { analyticsService } from '@/lib/api';

interface UseAccordionOptions {
  allowMultiple?: boolean;
  defaultOpenItems?: string[];
  trackAnalytics?: boolean;
}

export const useAccordion = (options: UseAccordionOptions = {}) => {
  const {
    allowMultiple = false,
    defaultOpenItems = [],
    trackAnalytics = true
  } = options;

  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenItems)
  );

  const toggleItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      
      if (newOpenItems.has(itemId)) {
        // Close the item
        newOpenItems.delete(itemId);
        
        // Track analytics
        if (trackAnalytics) {
          analyticsService.trackEvent('accordion_toggle', undefined, {
            accordion_item: itemId,
            action: 'close',
            page_path: window.location.pathname
          });
        }
      } else {
        // Open the item
        if (!allowMultiple) {
          // Close all other items if multiple is not allowed
          newOpenItems.clear();
        }
        newOpenItems.add(itemId);
        
        // Track analytics
        if (trackAnalytics) {
          analyticsService.trackEvent('accordion_toggle', undefined, {
            accordion_item: itemId,
            action: 'open',
            page_path: window.location.pathname
          });
        }
      }
      
      return newOpenItems;
    });
  }, [allowMultiple, trackAnalytics]);

  const openItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      if (!allowMultiple) {
        newOpenItems.clear();
      }
      newOpenItems.add(itemId);
      return newOpenItems;
    });
  }, [allowMultiple]);

  const closeItem = useCallback((itemId: string) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      newOpenItems.delete(itemId);
      return newOpenItems;
    });
  }, []);

  const closeAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  const openAll = useCallback((itemIds: string[]) => {
    if (allowMultiple) {
      setOpenItems(new Set(itemIds));
    }
  }, [allowMultiple]);

  const isOpen = useCallback((itemId: string) => {
    return openItems.has(itemId);
  }, [openItems]);

  return {
    openItems: Array.from(openItems),
    toggleItem,
    openItem,
    closeItem,
    closeAll,
    openAll,
    isOpen
  };
};
