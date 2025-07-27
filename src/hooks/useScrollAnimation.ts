'use client';

import { useEffect, useState } from 'react';
import { throttle } from '@/utils/helpers';

export const useScrollAnimation = () => {
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  useEffect(() => {
    const section3 = document.querySelector('.section-3');
    const steps = document.querySelectorAll('.step');
    const solidLine = document.querySelector('.solid-line') as HTMLElement;
    const arrow = document.querySelector('.arrow') as HTMLElement;
    const process = document.querySelector('.process') as HTMLElement;

    if (!section3 || !solidLine || !arrow || !process) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSection3Visible(true);
            updateProgress();
          } else {
            setIsSection3Visible(false);
            if (solidLine) solidLine.style.height = "0";
            if (arrow) arrow.style.top = "0";
            setActiveSteps([]);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section3);

    const updateProgress = throttle(() => {
      if (!isSection3Visible) return;

      const scrollPosition = window.scrollY;
      const section3Top = (section3 as HTMLElement).offsetTop;
      const section3Height = (section3 as HTMLElement).offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollPercentage = Math.max(
        0,
        Math.min(
          100,
          ((scrollPosition - section3Top + windowHeight) / section3Height) * 100
        )
      );

      if (solidLine) solidLine.style.height = `${scrollPercentage}%`;
      if (arrow) arrow.style.top = `${scrollPercentage}%`;

      const newActiveSteps: number[] = [];
      steps.forEach((step, index) => {
        const stepElement = step as HTMLElement;
        const stepTop = stepElement.offsetTop - process.offsetTop;
        const stepHeight = stepElement.offsetHeight;
        const stepMiddle = stepTop + stepHeight / 2;
        const stepPercentage = (stepMiddle / process.offsetHeight) * 100;

        if (scrollPercentage >= stepPercentage) {
          newActiveSteps.push(index + 1);
          stepElement.classList.add('active');
        } else {
          stepElement.classList.remove('active');
        }
      });

      setActiveSteps(newActiveSteps);
    }, 16); // ~60fps

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [isSection3Visible]);

  return { isSection3Visible, activeSteps };
};
