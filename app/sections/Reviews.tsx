"use client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Reviews = () => {
  return (
    <Flex overflow='clip' justify="center" pt="20px" width="100%">
      <Flex direction="column" align="center" justify="center">
        <Heading fontSize="22px" mb="40px">
          What our customers say
        </Heading>
        <Flex>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <Box
            maxW={{ base: "300px", md: "100%" }}
            className="elfsight-app-8e0eadef-14d1-4251-92d2-5c090be6184a"
            data-elfsight-app-lazy
          ></Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Reviews;
