import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import BoldText from "../BoldText";

const BannerText = ({
  title,
  image,
  catering = false,
}: {
  title: string;
  image: string;
  catering?: boolean;
}) => {
  return (
    <Flex
      backgroundImage={`linear-gradient(rgba(0,0,0,.9),rgba(17,17,17,.33)),url(${image})`}
      backgroundPosition="0 0, 50%"
      backgroundAttachment="scroll, scroll"
      backgroundSize={catering ? "" : "cover"}
      w="100%"
      h={{ base: "430px", md: "380px", lg: "530px" }}
      justify="center"
      align="center"
      color="white"
    >
      <BoldText
        fontSize={{ base: "25px", md: "33px" }}
        fontWeight="bold"
        textTransform="uppercase"
      >
        {title}
      </BoldText>
    </Flex>
  );
};

export default BannerText;
