"use client";
import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import NavBarComponent from "./compo/NavSkelet";
import { useScroll } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function NewNavBar({ cP }: { cP: string }) {
  const controls = useAnimationControls();
  const { scrollY } = useScroll();

  useEffect(() => {
    let isNavBarVisible = false;

    return scrollY.onChange((currentScrollY) => {
      if (currentScrollY > 600 && !isNavBarVisible) {
        // Show the navbar when scrolling down past 600px
        controls.start("dropDown");
        isNavBarVisible = true;
      } else if (currentScrollY <= 600 && isNavBarVisible) {
        // Hide the navbar only when scrolling back up to the initial 600px point
        controls.start("slideUp");
        isNavBarVisible = false;
      }
    });
  }, [controls, scrollY]);

  return (
    <>
      <Box position="relative" style={{ zIndex: 1000 }}>
        {/* Higher z-index for old nav bar */}
        <NavBarComponent menuColor="white" bgColor="rgba(0,0,0,.5)" cP={cP} />
      </Box>

      <motion.div
        style={{
          position: "sticky",
          top: 0,
          display: "block",
          flexDirection: "column",
          zIndex: 999, // Lower zIndex for new nav bar
        }}
        animate={controls}
        initial="initial"
        variants={{
          initial: {
            opacity: 0,
            y: -100,
            pointerEvents: "none", // Disable pointer events when not visible
          },
          dropDown: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, when: "beforeChildren" },
            pointerEvents: "auto", // Enable pointer events
          },
          slideUp: {
            opacity: 0,
            y: -100,
            transition: { duration: 0.2, when: "afterChildren" },
            pointerEvents: "none", // Disable pointer events
          },
        }}
      >
        <NavBarComponent menuColor="black" bgColor="white" cP={cP} />
      </motion.div>
    </>
  );
}

