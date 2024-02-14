import { Flex, Button, Box } from "@chakra-ui/react";
import { useAnimationControls, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import ArzanLogo from "@/public/Arzan-logo.svg";
import dynamic from "next/dynamic";
const MenuNav = dynamic(() => import("./MenuNav"));

interface Props {
  menuColor: string;
  bgColor: string;
  cP: string;
}

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

const NavBarComponent = ({ menuColor, bgColor, cP }: Props) => {
  const currentPage = cP.toUpperCase();
  const [isMenuShown, setIsMenuShown] = useState(false);
  const menuControls = useAnimationControls();

  const handleClickNav = () => {
    setIsMenuShown(!isMenuShown);
    menuControls.start(isMenuShown ? "hide" : "dropDown");
  };
  const transition = {
    duration: 0.3,
    ease: "easeOut",
  };

  return (
    <Flex w="100%" position="absolute" zIndex="999" direction="column">
      <Flex
        borderBottomWidth={bgColor === "white" ? "1px" : "0"}
        bg={bgColor}
        direction="row"
        h="100px"
        align="center"
        justify="center"
      >
        <Flex
          h="60px"
          width={{ base: "90%", md: "80%" }}
          justify="space-between"
          align="center"
        >
          <Flex>
            <Link href="/">
              <Image
                width="100"
                height="100"
                alt="ARZAN CAFE LOGO"
                src={ArzanLogo}
              />
            </Link>
            {/* <FaCircle size="50px" color="white" /> */}
          </Flex>
          <Box
            width={{ md: "80%", lg: "60%" }}
            display={{ base: "none", md: "block" }}
          >
            <Flex
              direction="row"
              justify="space-between"
              width="100%"
              align="center"
              color={menuColor}
            >
              <NavLink
                href="/"
                name="HOME"
                currentPage={currentPage}
                color={menuColor}
              />
              <NavLink
                href="/menu"
                name="MENU"
                currentPage={currentPage}
                color={menuColor}
              />
              <NavLink
                href="/blog"
                name="BLOG"
                currentPage={currentPage}
                color={menuColor}
              />
              <NavLink
                href="/about"
                name="ABOUT"
                currentPage={currentPage}
                color={menuColor}
              />
              <NavLink
                href="/contact"
                name="CONTACT"
                currentPage={currentPage}
                color={menuColor}
              />
              <Box>
                <Button
                  h="40px"
                  fontSize="13px"
                  color="black"
                  bg="#ddc5a2"
                  py="10px"
                  px="24px"
                  borderRadius="20px"
                >
                  <Link href="https://www.doordash.com/store/arzan-cafe-chicago-26144973/">
                    RESERVATION
                  </Link>
                </Button>
              </Box>
              <Box>
                <Button
                  h="40px"
                  fontSize="13px"
                  color="white"
                  bg="#F05A2A"
                  py="10px"
                  px="24px"
                  borderRadius="20px"
                >
                  <Link href="https://slicelife.com/restaurants/il/chicago/60625/arzan-cafe/menu">
                    ORDER NOW
                  </Link>
                </Button>
              </Box>
            </Flex>
          </Box>
          <Button
            display={{ base: "block", md: "none" }}
            boxSize="30px"
            variant="unstyled"
            onClick={handleClickNav}
          >
            <IoMenu color={menuColor} size="24px" />
          </Button>
        </Flex>
      </Flex>
      {/* New Menu component */}
      <MenuNav
        menuButtonStatus={isMenuShown}
        currentPage={currentPage}
        menuColor={menuColor}
      />
    </Flex>
  );
};

export default NavBarComponent;
