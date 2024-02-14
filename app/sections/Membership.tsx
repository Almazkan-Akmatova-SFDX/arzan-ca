"use client";
import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ScrollUpElement from "../animations/ScrollUpElement";
import CurlyText from "../components/CurlyText";
import BoldText from "../components/BoldText";

const MembershipPlans = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      pt="100px"
      pb="50px"
    >
      <Flex width="70%" direction="column" align="center" justify="center">
        <Flex direction="column" align="center" justify="center">
          <ScrollUpElement>
            <CurlyText
              fontSize={{ base: "35px", md: "40px" }}
              mb="5px"
              color="#F45734"
            >
              Be part of our family
            </CurlyText>
          </ScrollUpElement>
          <ScrollUpElement>
            <BoldText fontSize="4xl" fontWeight="bold" mb="3">
              MEMBERSHIP
            </BoldText>
          </ScrollUpElement>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          width={{ base: "90%", lg: "80%" }}
          gap={{ base: "10", md: "4" }}
        >
          {["Bronze", "Silver", "Gold"].map((plan, index) => (
            <Box
              key={plan}
              borderWidth="1px"
              borderColor="#F45734"
              borderRadius="2xl"
              overflow="hidden"
              py="10"
              bg="white"
              shadow="md"
              textAlign="center"
              width="100%"
            >
              <Text fontSize="xl" fontWeight="bold" color="gray.600">
                {plan}
              </Text>
              <Text fontSize="md" my="4" color="gray.500">
                {plan === "Bronze" && "Low cost"}
                {plan === "Silver" && "Sweeten the deal"}
                {plan === "Gold" && "The gold "}
              </Text>
              <Text fontSize="5xl" fontWeight="bold" my="4">
                {plan === "Bronze" && "10%"}
                {plan === "Silver" && "15%"}
                {plan === "Gold" && "25%"}
              </Text>
              <Text fontSize="md" my="4" color="gray.500">
                OFF EVERY ORDER
              </Text>
              <Text
                whiteSpace="pre-wrap"
                color="#F45734"
                fontSize="lg"
                fontWeight="bold"
                my="4"
              >
                {plan === "Bronze" && "$25 / Year"}
                {plan === "Silver" && "$40 / Year"}
                {plan === "Gold" && "$100 / Year"}
              </Text>
              <Button bgColor="#F45734" color="white" size="lg" mt="4">
                BUY NOW
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default MembershipPlans;
