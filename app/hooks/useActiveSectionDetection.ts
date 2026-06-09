import { useEffect, useState } from 'react';

function useActiveSectionDetection(sections: { id: string }[]): string {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const updateActive = () => {
      const line = window.innerHeight * 0.4;
      let current = '';

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) {
          current = id;
        }
      });

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        current = sections[sections.length - 1].id;
      }

      setActiveId(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sections]);

  return activeId;
}

export default useActiveSectionDetection;
