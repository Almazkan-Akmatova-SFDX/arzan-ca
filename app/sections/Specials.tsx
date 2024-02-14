"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import CurlyText from "../components/CurlyText";
import ScrollUpElement from "../animations/ScrollUpElement";
import Image from "next/image";

const Specials = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={{ base: 4, md: 8 }}
    >
      <ScrollUpElement>
        <CurlyText
          fontSize={{ base: "35px", md: "40px" }}
          mb={2}
          fontWeight="bold"
          textAlign="center"
        >
          Specials for you
        </CurlyText>
      </ScrollUpElement>
      <ScrollUpElement>
        <Box
          mb="28px"
          width="70px"
          borderTopWidth="1px"
          borderBottomWidth="1px"
          borderColor="#F45734"
          height="4px"
        />
      </ScrollUpElement>
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        width="100%"
        align="center"
        justify="center"
        mb={4}
      >
        <Box
          w={{ base: "100%", md: "255px" }}
          h={{ base: "auto", md: "390px" }}
          borderRightRadius="lg"
          position="relative"
          overflow="clip"
        >
          <Image
            src="/assets/Specials.webp" // Replace with the correct path to your image
            alt="Specials Image"
            style={{ objectFit: "cover" }}
            fill
          />
        </Box>
        <Flex direction="column" align={{ base: "center", md: "start" }} p={4}>
          <Text
            fontSize={{ base: "xl", md: "35px" }}
            mb={2}
            textAlign={{ base: "center", md: "left" }}
            color="#068b88"
            fontWeight="400"
          >
            Enrich your dinner with your family <br /> and friends!
          </Text>
          <Text fontSize={{ base: "md", md: "20px" }} mb={2}>
            $50 voucher toward Halal Asian-fusion dinner for two
          </Text>
          <Text fontSize={{ base: "md", md: "20px" }} mb={6}>
            $100 voucher toward Halal Asian-fusion dinner for groups <br /> of
            four or more
          </Text>
          <Button
            fontSize="24px"
            bgColor="rgb(6, 139, 136)"
            color="white"
            h="50px"
            w="230px"
            borderRadius="25px"
            _hover={{ bgColor: "#C1352D" }}
            mt={{ base: 4, md: 0 }}
          >
            Buy Now
          </Button>
        </Flex>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 4 }}
          borderRadius="lg"
          overflow="hidden"
        ></Box>
      </Flex>
    </Flex>
  );
};

export default Specials;
