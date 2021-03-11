import { useTransform, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { FC, useEffect, useRef, useState } from 'react';
import {
  Wrapper,
  SeparatorImage,
  SeparatorLightSide,
  SeparatorLightMiddle,
  SeparatorDarkSide,
  SeparatorDarkMiddle,
} from './styles';

interface SeparatorProps {
  variant?: string;
}

export const Separator: FC<SeparatorProps> = ({ variant = 'light' }) => {
  const { scrollY } = useViewportScroll();
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });
  const y = useTransform(scrollY, [start, end], [0, -50]);
  useEffect(() => {
    if (inView && entry) {
      const { offsetTop } = entry.target as HTMLElement;
      setStart(offsetTop - window.innerHeight);
      setEnd(offsetTop);
    }
  }, [inView]);
  const renderImage = () => {
    switch (variant) {
      case 'dark':
        return (
          <SeparatorImage
            width='208'
            height='135'
            viewBox='0 0 208 135'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <SeparatorDarkSide
              style={{ y }}
              d='M2.49994 28.4363L44.1672 4.14385L85.8345 28.4363V77.0637L44.1672 101.356L2.49994 77.0637V28.4363Z'
            />
            <SeparatorDarkSide
              style={{ y }}
              d='M122.165 27.1863L163.833 2.89385L205.5 27.1863V75.8137L163.833 100.106L122.165 75.8137V27.1863Z'
            />
            <SeparatorDarkMiddle d='M62.3327 58.4363L104 34.1439L145.667 58.4363V107.064L104 131.356L62.3327 107.064V58.4363Z' />
          </SeparatorImage>
        );
      case 'light':
      default:
        return (
          <SeparatorImage
            width='208'
            height='135'
            viewBox='0 0 208 135'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <SeparatorLightSide
              style={{ y }}
              d='M2.49994 28.4363L44.1672 4.14385L85.8345 28.4363V77.0637L44.1672 101.356L2.49994 77.0637V28.4363Z'
            />
            <SeparatorLightSide
              style={{ y }}
              d='M122.165 27.1863L163.833 2.89385L205.5 27.1863V75.8137L163.833 100.106L122.165 75.8137V27.1863Z'
            />
            <SeparatorLightMiddle d='M62.3327 58.4363L104 34.1439L145.667 58.4363V107.064L104 131.356L62.3327 107.064V58.4363Z' />
          </SeparatorImage>
        );
    }
  };
  return <Wrapper ref={ref}>{renderImage()}</Wrapper>;
};
