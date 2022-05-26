import { useEffect, useRef } from 'react';

const useObserver = () => {
  const refObserver = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        let navElement = document.querySelector(
          `a[href="#${entry.target.id}"]`
        );
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          navElement.classList.add('active');
        } else {
          if (navElement.classList.contains('active')) {
            navElement.classList.remove('active');
          }
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(callback, options);

    observer.observe(refObserver.current);
  }, [refObserver]);

  return { refObserver };
};

export default useObserver;
