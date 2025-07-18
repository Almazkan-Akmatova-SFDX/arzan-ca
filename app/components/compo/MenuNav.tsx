"use client";
import { Box, Flex, Button } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";

const NavLink = ({
  href,
  name,
  currentPage,
  color,
  dropMenu,
}: {
  href: string;
  name: string;
  currentPage: string;
  color: string;
  dropMenu?: boolean;
}) => {
  const currentStyle = {
    color: dropMenu
      ? currentPage === name
        ? "#dfa25f"
        : "black"
      : currentPage === name
      ? "#dfa25f"
      : color,
    fontWeight: currentPage === name ? "bold" : "normal",
  };

  return (
    <Box style={currentStyle}>
      <Link href={href} className="navLink">
        {name}
      </Link>
    </Box>
  );
};

const MenuNav = ({
  currentPage,
  menuColor,
  menuButtonStatus,
}: {
  currentPage: string;
  menuColor: string;
  menuButtonStatus: boolean;
}) => {
  const menuControls = useAnimationControls();
  const transition = {
    duration: 0.3,
    ease: "easeOut",
  };

  useEffect(() => {
    if (menuButtonStatus) {
      menuControls.start("dropDown");
    } else {
      menuControls.start("hide");
    }
  }, [menuButtonStatus, menuControls]);

  return (
    <Box overflow="clip" display={{ base: "block", md: "none" }}>
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
        initial="initial"
        animate={menuControls}
        style={{ width: "100%" }}
        transition={transition}
      >
        <Flex
          w="100%"
          h="380px"
          align="center"
          direction="column"
          bg="white"
          padding="10px"
        >
          <Flex
            justify="center"
            width="100%"
            borderBottomWidth="1px"
            borderTopWidth="1px"
            py="16px"
          >
            <NavLink
              dropMenu={true}
              href="/"
              name="HOME"
              currentPage={currentPage}
              color={menuColor}
            />
          </Flex>
          <Flex justify="center" width="100%" borderBottomWidth="1px" py="16px">
            <NavLink
              dropMenu={true}
              href="/menu"
              name="MENU"
              currentPage={currentPage}
              color={menuColor}
            />
          </Flex>
          <Flex justify="center" width="100%" borderBottomWidth="1px" py="16px">
            <NavLink
              dropMenu={true}
              href="/blog"
              name="BLOG"
              currentPage={currentPage}
              color={menuColor}
            />
          </Flex>
          <Flex justify="center" width="100%" borderBottomWidth="1px" py="16px">
            <NavLink
              dropMenu={true}
              href="/about"
              name="ABOUT"
              currentPage={currentPage}
              color={menuColor}
            />
          </Flex>
          <Flex justify="center" width="100%" borderBottomWidth="1px" py="16px">
            <NavLink
              dropMenu={true}
              href="/contact"
              name="CONTACT"
              currentPage={currentPage}
              color={menuColor}
            />
          </Flex>
          <Flex justify="center" width="100%" borderBottomWidth="1px" py="16px">
            <Button
              fontWeight="bold"
              bgColor="#F45734"
              py="23"
              px="30"
              color="white"
              borderRadius="3xl"
            >
              /*
              <Link href="https://order.toasttab.com/online/arzan-cafe">
                RESERVATION
              </Link>
              */
            </Button>
          </Flex>
          
        </Flex>
      </motion.div>
    </Box>
  );
};

export default MenuNav;
