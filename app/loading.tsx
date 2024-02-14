import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Flex h="100vh" bg="#232d41" pt="300px" justify="center">
      <Spinner boxSize="30px" color="white" />
    </Flex>
  );
};

export default Loading;
