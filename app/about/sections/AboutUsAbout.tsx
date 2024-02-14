import CurlyText from "@/app/components/CurlyText";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const AboutUsAbout = () => {
  return (
    <Flex justify="center" py="30px">
      <Flex
        width={{ base: "90%", md: "80%" }}
        direction="column"
        align="center"
        justify="center"
      >
        <CurlyText mb="16px" fontSize="35px">
          Out Story
        </CurlyText>
        <Text
          textAlign="center"
          mb="25px"
          textTransform="uppercase"
          fontSize="25px"
          fontWeight="700"
        >
          Kyrgyz Delights at Arzan Cafe
        </Text>
        <Text fontSize="17px" lineHeight="33px" width="100%" textAlign="start">
        Arzan - in many languages, it means cheap and easy to get. When we picked this 
        name for our place, we just wanted it to be clear for everyone, so people know 
        they can enjoy tasty food without spending too much.<br />
          <br /> We are proud to be the first Central Asian halal restaurant in our area, 
          offering the best quality and flavors. Every guest is important to us, and 
          we make our dishes fresh every day. That means you always get tasty and fresh 
          food when you visit.  <br />
          <br />Our food is special, and we want to share it more in the USA by serving 
          a variety of dishes that suit everyone s taste. We are 
          sure our food is good for everyone, and when you visit Arzan Cafe, 
          you will leave happy and full. <br />
          <br /> On top of that, our restaurant s story began with the owner, Mirlanbek Nurmatov,
           wanting to share the unique tastes and traditions of his home, Kyrgyzstan, with Americans. 
           He wanted to create a place where people could try real Central Asian food and feel the warmth 
           and friendliness of Kyrgyz culture. That is how Arzan started 
          – not just a cafe but a place where every visitor becomes part of a big and friendly family.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutUsAbout;
