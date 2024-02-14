import React, { memo } from 'react';
import { chakra, HTMLChakraProps, useBreakpointValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((framer) => framer.motion(chakra.div)), {
  ssr: false,
});

type ScrollLeftElementProps = HTMLChakraProps<'div'>;

const ScrollLeftElementComponent: React.FC<ScrollLeftElementProps> = ({
  children,
  ...otherProps
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const initialX = isMobile ? 20 : 50;
  const delay = isMobile ? 0.2 : 0.3;

  return (
    <MotionDiv
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      {...otherProps}
    >
      {children}
    </MotionDiv>
  );
};

const ScrollLeftElement = memo(ScrollLeftElementComponent);
ScrollLeftElement.displayName = 'ScrollLeftElement';

export default ScrollLeftElement;
