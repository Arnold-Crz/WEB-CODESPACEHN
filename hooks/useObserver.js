import { useEffect, useRef } from 'react';

const useObserver = () => {
  const refObserver = useRef(null);

  useEffect(() => {
    let observer;
    const callback = (entries) => {
      entries.forEach((entry) => {
        const navElement = document.querySelector(
          `a[href="#${entry.target.id}"]`
        );
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          if (!navElement.classList.contains('active')) {
            navElement.classList.add('active');
          }
        } else {
          if (navElement.classList.contains('active')) {
            navElement.classList.remove('active');
          }
        }
      });
    };

    const options = {
      threshold: 0.55,
    };

    observer = new IntersectionObserver(callback, options);

    observer.observe(refObserver.current);
  }, [refObserver]);

  return refObserver;
};

export default useObserver;
