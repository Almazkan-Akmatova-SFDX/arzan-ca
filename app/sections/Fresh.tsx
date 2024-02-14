"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import BoldText from "../components/BoldText";
import ScrollRightElement from "../animations/ScrollRightElement";
import ScrollLeftElement from "../animations/ScrollLeftElement";
import Link from "next/link";
import Image from "next/image";

const Fresh = () => {
  return (
    <Flex
      overflow="clip"
      align="center" // Aligns children vertically to the center
      justify="center" // Centers children horizontally
      height={{ sm: "900px", md: "700px" }}
      direction="column"
      px={{ sm: "20px", lg: "100px" }}
      backgroundImage="url('./assets/menu-bg.webp')" // Use url() for backgroundImage
      py="20px"
    >
      <Flex
        width="100%"
        height={{ sm: "800px", md: "650px" }}
        align="center"
        justify="center"
        direction={{ base: "column-reverse", lg: "row" }}
      >
        <ScrollLeftElement
          width={{ base: "95%", md: "60%", lg: "50%" }}
          height={{ sm: "auto", md: "80%" }}
          mt={{ base: "0", md: "-14%", lg: "0" }}
          mr={{ md: "0", lg: "-12%", xl: "-14.4%" }}
          p="12px"
          zIndex="1"
          bg="white"
          boxShadow="lg"
        >
          <Flex
            h="100%"
            borderWidth="1px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            py="10%"
          >
            <Flex
              width={{ base: "100%", md: "65%" }}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Box boxSize="64px">
                <Image
                  width="64"
                  height="64"
                  alt="fresh logo"
                  src="/assets/fresh-icon.webp"
                />
              </Box>
              <BoldText
                fontSize={{ base: "lg", md: "3xl" }}
                whiteSpace="nowrap"
                mt="16px"
                mb="28px"
              >
                Fresh and Authentic
              </BoldText>
              <Box
                mb="28px"
                width="70px"
                borderTop="1px solid #F45734"
                borderBottom="1px solid #F45734"
                height="4px"
                opacity={1}
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                  backgroundAttachment: "scroll!important", // Fixed the property name here
                }}
              />
              <Text fontWeight="bold" mb="24px" textAlign="center">
                Every item on our menu is made with fresh ingredients and
                traditional recipes. We follow the characteristic principles of
                Kyrgyz culture to ensure authenticity.
              </Text>
            </Flex>
            <Button
              h="48px"
              bgColor="#ddc5a2"
              py="12px"
              px="32px"
              color="black"
              borderRadius="24px"
            >
              <Link href="https://slicelife.com/restaurants/il/chicago/60625/arzan-cafe/menu">
                Order Now
              </Link>
            </Button>
          </Flex>
        </ScrollLeftElement>
        <ScrollRightElement
          width={{ base: "95%", lg: "60%" }}
          height={{ base: "280px", lg: "100%" }}
          bgImage="url('./assets/fresh.webp')"
          bgSize="cover"
        />
      </Flex>
    </Flex>
  );
};

export default Fresh;
