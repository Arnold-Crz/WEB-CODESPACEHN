import { useEffect, useRef } from 'react';

const useObserver = () => {
  const refObserver = useRef(null);

  useEffect(() => {
    let observer;
    const callback = (entries) => {
      entries.forEach((entry) => {
        let navElement = document.querySelector(
          `a[href="#${entry.target.id}"]`
        );
        if (entry.isIntersecting && !navElement.classList.contains('active')) {
          navElement.classList.add('active');
        } else {
          if (navElement.classList.contains('active')) {
            navElement.classList.remove('active');
          }
        }
      });
    };

    const options = {
      rootMargin: '0px 0px 0px -100px',
    };

    observer = new IntersectionObserver(callback, options);

    observer.observe(refObserver.current);
  });

  return refObserver;
};

export default useObserver;
