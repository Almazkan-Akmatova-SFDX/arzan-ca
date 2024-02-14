"use client";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import BoldText from "../components/BoldText";
import ScrollUpElement from "../animations/ScrollUpElement";

const Catering = () => {
  return ( 
    <Box p="4">
      <Flex 
        backgroundImage="./assets/catering-bg.webp"
        width="100%"
        h="270px"
        align="center"
        justify="center"
      >
        <Flex gap="10" direction="column" align="center" justify="center">
          <ScrollUpElement>
            <Box boxSize="64px" overflow="hidden">
              <Image
                width="64"
                height="64"
                alt="ARZAN CAFE CATERING"
                src="/assets/catering-icon.webp"
              />
            </Box>
          </ScrollUpElement>
          <ScrollUpElement>
            <BoldText fontSize="4xl" color="#30b4a1">
              CATERING
            </BoldText>
          </ScrollUpElement>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Catering;
