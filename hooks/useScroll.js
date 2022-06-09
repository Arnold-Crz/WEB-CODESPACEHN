import { useEffect } from 'react';

const useScroll = () => {
  let animationScroll;
  useEffect(() => {
    async function animate() {
      const sr = (await import('scrollreveal')).default;
      sr({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
      });
      sr().reveal(`.${animationScroll}`, { delay: 500 });
    }
    animate();
  }, [animationScroll]);

  return { animationScroll };
};

export default useScroll;
