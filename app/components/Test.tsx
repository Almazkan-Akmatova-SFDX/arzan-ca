import { Button, Flex } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

const Test = () => {
  const menuControls = useAnimationControls();
  const newMenuControls = useAnimationControls();
  const newNavControls = useAnimationControls();
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isNewNavMenuShown, setIsNewNavMenuShown] = useState(false);

  const newNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 3; // Adjusted for better sensitivity
      const isScrolledUp = window.scrollY < triggerHeight;

      if (isScrolledUp) {
        newNavControls.start("hide");
        if (isNewNavMenuShown) {
          newMenuControls.start("hide");
          setIsNewNavMenuShown(false);
        }
      } else {
        newNavControls.start("dropDown");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [newNavControls, newMenuControls, isNewNavMenuShown]);

  const handleClickOldNav = () => {
    if (isMenuShown) {
      menuControls.start("hide");
    } else {
      menuControls.start("dropDown");
    }
    setIsMenuShown(!isMenuShown);
  };

  const handleClickNewNav = () => {
    if (isNewNavMenuShown) {
      newMenuControls.start("hide");
    } else {
      newMenuControls.start("dropDown");
    }
    setIsNewNavMenuShown(!isNewNavMenuShown);
  };

  const transition = {
    duration: 0.5,
    ease: "easeOut",
  };

  return (
    <Flex direction="column" height="100%" width="100%">
      {/* New Nav */}
      <motion.div
        ref={newNavRef}
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          flexDirection: "column",
          zIndex: 999,
        }}
        variants={{
          initial: {
            y: -100,
            opacity: 0,
          },
          dropDown: {
            y: 0,
            opacity: 1,
          },
          hide: {
            y: -100,
            opacity: 0,
          },
        }}
        transition={transition}
        initial="initial"
        animate={newNavControls}
      >
        <Flex w="100%" position="absolute" direction="column">
          <Flex
            zIndex="1000"
            px="10%"
            bg="gray.200"
            align="center"
            h="100px"
            w="100%"
            justify="end"
          >
            <Button onClick={handleClickNewNav} bg="tomato" color="white">
              {isNewNavMenuShown ? "Hide New Menu" : "Show New Menu"}
            </Button>
          </Flex>
          {/* New Menu component */}
          <motion.div
            variants={{
              initial: {
                opacity: 0,
                y: -420,
              },
              dropDown: {
                opacity: 1,
                y: 0,
              },
              hide: {
                opacity: 0,
                y: -420,
              },
            }}
            transition={transition}
            initial="initial"
            animate={newMenuControls}
          >
            <Flex h="320px" w="100%" bg="blue.300"></Flex>
          </motion.div>
        </Flex>
      </motion.div>

      {/* Old Nav */}
      <Flex w="100%" position="absolute" direction="column" zIndex="999">
        <Flex
          zIndex="1000"
          px="10%"
          bg="gray.200"
          align="center"
          h="100px"
          w="100%"
          justify="end"
        >
          <Button onClick={handleClickOldNav} bg="tomato" color="white">
            {isMenuShown ? "Hide Old Menu" : "Show Old Menu"}
          </Button>
        </Flex>
        {/* Old Menu component */}
        <motion.div
          style={{ height: 320 }}
          variants={{
            initial: {
              opacity: 0,
              y: -420,
            },
            dropDown: {
              opacity: 1,
              y: 0,
            },
            hide: {
              y: -420,
              opacity: 0,
            },
          }}
          transition={transition}
          initial="initial"
          animate={menuControls}
        >
          <Flex h="320px" w="100%" bg="blue.300"></Flex>
        </motion.div>
      </Flex>

      {/* Additional Content */}
      <Flex h="100vh" w="100%" bg="gray.300"></Flex>
      <Flex h="100vh" w="100%" bg="gray.400"></Flex>
      <Flex h="100vh" w="100%" bg="gray.600"></Flex>
      <Flex h="100vh" w="100%" bg="gray.800"></Flex>
    </Flex>
  );
};

export default Test;
