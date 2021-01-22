import { useState, useEffect, useRef } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const prevWidth = useRef();

  useEffect(() => {
    function handleResize() {
      const windowDim = getWindowDimensions();
      if (prevWidth.current !== windowDim.width) {
        setWindowDimensions(windowDim);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    prevWidth.current = windowDimensions.width;
  });

  return windowDimensions;
}

export default function useWindowDimensions() {
  const windowDimensions = useDimensions();

  const sm = 576;
  const md = 768;
  const lg = 992;
  const xl = 1200;

  return {
    ...windowDimensions,
    isSmall: windowDimensions.width < sm,
    isMedium: windowDimensions.width < md,
    isLarge: windowDimensions.width < lg,
    isExtraLarge: windowDimensions.width < xl,
    isUpSmall: windowDimensions.width >= sm,
    isUpMedium: windowDimensions.width >= md,
    isUpLarge: windowDimensions.width >= lg,
    isUpExtraLarge: windowDimensions.width >= xl,
  };
}

export function useBreakpoint(breakpoint) {
  const windowDimensions = useDimensions();

  return (windowDimensions.width < breakpoint);
}

export function useBreakpointUpper(breakpoint) {
  const windowDimensions = useDimensions();

  return (windowDimensions.width > breakpoint);
}

export function useRange(minWidth, maxWidth) {
  const windowDimensions = useDimensions();

  return (minWidth <= windowDimensions.width && windowDimensions.width <= maxWidth);
}