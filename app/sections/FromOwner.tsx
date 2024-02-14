"use client";
import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CurlyText from "../components/CurlyText";
import BoldText from "../components/BoldText";
import ScrollLeftElement from "../animations/ScrollLeftElement";
import ScrollRightElement from "../animations/ScrollRightElement";

const FromOwner = () => {
  return (
    <Flex
      overflow="clip"
      backgroundImage="url('./assets/menu-bg.webp')"
      gridTemplateColumns={{ base: "1", md: "2" }}
      p={{ base: 0, md: 8 }}
      align="center"
      justify="center"
    >
      <Flex direction={{ base: "column", md: "row" }} gap={4} align="center">
        {/* Image Container */}
        <Flex w="100%" p="20px">
          <ScrollRightElement
            bgImage="url('./assets/owner-pick.webp')" // Make sure this URL points to the correct image in your project
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            w={["100%", "468px"]} // 100% width on small screens, 468px on larger screens
            h={["550px", "637px"]} // auto height for small screens to maintain aspect ratio, 637px for larger screens
            borderRadius="lg"
            boxShadow="xl" // Optional: Adds shadow to the element for a lifted card effect
          />
        </Flex>
        {/* Text Content Container */}
        <Flex
          direction="column"
          align={{ base: "center", md: "start" }}
          p={5}
          maxWidth="400px"
        >
          <ScrollLeftElement>
            <CurlyText fontSize="35px" size="bold">
              From our Owner
            </CurlyText>
          </ScrollLeftElement>
          <ScrollLeftElement>
            <BoldText fontSize="25px" mb={4}>
              MADE WITH LOVE
            </BoldText>
          </ScrollLeftElement>
          <ScrollLeftElement>
            <Box
              mb="28px"
              width="70px"
              borderTopWidth="1px"
              borderBottomWidth="1px"
              borderColor="#F45734"
              height="4px"
            />
          </ScrollLeftElement>
          <Flex textAlign="center" direction="column">
            <ScrollLeftElement>
              <Text mb={4}>
                I immigrated to the United States from Kyrgyzstan, and created
                this restaurant to share my culture through delicious,
                traditional meals. Arzan is all about serving traditional meals
                “for those you love the most”. When you, my guests, are happy,
                so am I.
              </Text>
              <Text mb={4}>
                At Arzan, we are committed to preserving a wide variety of
                dishes that capture the unique flavor and culture of the Central
                Asian people. We invite you to enjoy a taste of our culture,
                savor a meal with your loved ones, and experience the culinary
                tradition of Central Asia.
              </Text>
              <Text fontStyle="italic">- Mirlan</Text>
            </ScrollLeftElement>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FromOwner;
