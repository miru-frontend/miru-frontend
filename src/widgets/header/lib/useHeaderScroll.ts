import { useState, useEffect } from 'react';

export const useHeaderScroll = (threshold = 80) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    //스크롤 계산중인지 확인하는 플래그
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};
