"use client";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import CurlyText from "../CurlyText";
import BoldText from "../BoldText";
import FormInput from "../FormInput";

const Subscribe = () => {
  return (
    <Flex
      backgroundImage="url('./assets/menu-bg.webp')"
      px={{ base: "10px", lg: "55px" }}
      justify="center"
      py="20px"
    >
      <Flex
        justify="center"
        h="100%"
        w={{ base: "100%", lg: "60%" }}
        backgroundImage="./assets/catering-bg.webp"
      >
        <Flex
          align="center"
          direction="column"
          py="80px"
          px={{ base: "0", md: "100px" }}
        >
          <CurlyText mb="8px" fontSize="40px">
            Subscribe
          </CurlyText>
          <BoldText
            mb="30px"
            fontSize="19px"
            textTransform="uppercase"
            color="white"
          >
            get $5 Coupon within your next order.
          </BoldText>
          <Flex direction="row">
            <FormInput
              placeholder={"Enter your email"}
              type={"SHORT"}
              borderRightRadius="0"
            />
            <Button
              h="48px"
              bgColor="#ddc5a2"
              py="12px"
              px="32px"
              color="black"
              borderRightRadius="3"
              borderLeftRadius="0"
            >
              Subscribe
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Subscribe;
