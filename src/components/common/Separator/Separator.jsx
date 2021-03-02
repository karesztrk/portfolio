import React, { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import {
  Wrapper,
  SeparatorImage,
  SeparatorLightSide,
  SeparatorLightMiddle,
  SeparatorDarkSide,
  SeparatorDarkMiddle,
} from './styles';

const renderImage = (variant, transform) => {
  switch (variant) {
    case 'dark':
      return (
        <SeparatorImage width="208" height="135" viewBox="0 0 208 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <SeparatorDarkSide
            style={{ transform }}
            d="M2.49994 28.4363L44.1672 4.14385L85.8345 28.4363V77.0637L44.1672 101.356L2.49994 77.0637V28.4363Z"
          />
          <SeparatorDarkSide
            style={{ transform }}
            d="M122.165 27.1863L163.833 2.89385L205.5 27.1863V75.8137L163.833 100.106L122.165 75.8137V27.1863Z"
          />
          <SeparatorDarkMiddle d="M62.3327 58.4363L104 34.1439L145.667 58.4363V107.064L104 131.356L62.3327 107.064V58.4363Z" />
        </SeparatorImage>
      );
    case 'light':
    default:
      return (
        <SeparatorImage width="208" height="135" viewBox="0 0 208 135" fill="none" xmlns="http://www.w3.org/2000/svg">
          <SeparatorLightSide
            style={{ transform }}
            d="M2.49994 28.4363L44.1672 4.14385L85.8345 28.4363V77.0637L44.1672 101.356L2.49994 77.0637V28.4363Z"
          />
          <SeparatorLightSide
            style={{ transform }}
            d="M122.165 27.1863L163.833 2.89385L205.5 27.1863V75.8137L163.833 100.106L122.165 75.8137V27.1863Z"
          />
          <SeparatorLightMiddle d="M62.3327 58.4363L104 34.1439L145.667 58.4363V107.064L104 131.356L62.3327 107.064V58.4363Z" />
        </SeparatorImage>
      );
  }
};

export const Separator = ({ variant = 'light' }) => {
  const ref = useRef();
  const [{ scrollTop }, setSpring] = useSpring(() => ({ scrollTop: 0 }));
  const transform = scrollTop.interpolate(o => `translate(0px,${o / -20}px)`);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const { pageYOffset } = window;
      const { offsetTop } = ref.current;
      if (pageYOffset) {
        setSpring({ scrollTop: pageYOffset - offsetTop });
      }
    });
  }, []);
  return <Wrapper ref={ref}>{renderImage(variant, transform)}</Wrapper>;
};