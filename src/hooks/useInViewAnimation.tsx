import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useInViewAnimation = (threshold = 0.35) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [inView]);
  return {
    ref,
    animation,
  };
};

export default useInViewAnimation;
