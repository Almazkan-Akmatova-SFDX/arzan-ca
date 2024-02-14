"use client";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import BoldText from "../components/BoldText";
import CurlyText from "../components/CurlyText";
import ScrollUpElement from "../animations/ScrollUpElement";

const BookTable = () => {
  return (
    <Flex
      width="100%"
      h={{ base: "auto", md: "500px" }} // Adjust height for mobile devices
      color="white"
      backgroundImage={`linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4)), url("./assets/bookTable-bg.webp")`}
      backgroundRepeat="no-repeat"
      backgroundPosition={{ base: "center", md: "top" }} // Adjust background position for mobile
      backgroundAttachment={{ base: "scroll", md: "fixed" }} // Change to scroll on mobile for better performance
      backgroundSize={{ base: "cover", md: "initial" }} // Ensure background covers entire area on mobile
      paddingTop="120px"
      paddingBottom="120px"
      align="center"
      justify="center"
    >
      <Flex
        width="60%"
        height="100%"
        align="center"
        justify="center"
        direction="column"
        zIndex="1" // Ensure this content is above the pseudo-element
      >
        <ScrollUpElement>
          <CurlyText mb="4px" fontSize="40px" color="#ddc5a2">
            Reservation
          </CurlyText>
        </ScrollUpElement>
        <ScrollUpElement>
          <BoldText
            whiteSpace="nowrap"
            mb="10px"
            fontSize={{ base: "2xl", md: "4xl" }}
            color="white"
            fontWeight="bold"
          >
            BOOK YOUR TABLE
          </BoldText>
        </ScrollUpElement>
        <ScrollUpElement>
          <Box
            mb="28px"
            width="70px"
            borderTop="1px solid #F45734"
            borderBottom="1px solid #F45734"
            height="4px"
          />
        </ScrollUpElement>
        <ScrollUpElement>
          <Text mb="20px" color="white">
            Get ready for a unique culinary experience
          </Text>
        </ScrollUpElement>
        <ScrollUpElement>
          <Button
            h="48px"
            bgColor="#ddc5a2"
            py="12px"
            px="32px"
            color="black"
            borderRadius="24px"
          >
            Book a Table
          </Button>
        </ScrollUpElement>
      </Flex>
    </Flex>
  );
};

export default BookTable;
