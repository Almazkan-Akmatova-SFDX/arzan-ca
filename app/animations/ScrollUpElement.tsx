// import React, { memo } from "react";
// import { useBreakpointValue } from "@chakra-ui/react";
// import dynamic from "next/dynamic";

// const MotionDiv = dynamic(
//   () => import("framer-motion").then((framer) => framer.motion.div),
//   {
//     ssr: false,
//   }
// );

// const ScrollUpElementComponent = ({ children }: React.PropsWithChildren) => {
//   const initialY = useBreakpointValue({ base: 30, md: 50 });

//   return (
//     <MotionDiv
//       initial={{ opacity: 0, y: initialY }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       style={{ position: "relative" }}
//     >
//       {children}
//     </MotionDiv>
//   );
// };

// const ScrollUpElement = memo(ScrollUpElementComponent);
// ScrollUpElement.displayName = "ScrollUpElement";

// export default ScrollUpElement;

import { Flex } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

const ScrollUpElement = ({ children }: PropsWithChildren) => {
  return <Flex>{children}</Flex>;
};

export default ScrollUpElement;
