import { Box, Button, Flex, Text, Show, Hide } from "@chakra-ui/react";
import CurlyText from "../components/CurlyText";
import BoldText from "../components/BoldText";
import ScrollUpElement from "../animations/ScrollUpElement";
import Link from "next/link";

const OurStory = () => {
  return (
    <Flex align="center" justify="center" py="50px">
      <Flex gap="5" direction="column" alignItems="center" width="70%">
        <Flex alignItems="center" direction="column" mb="3">
          <ScrollUpElement>
            <CurlyText fontSize="40px">Discover</CurlyText>
          </ScrollUpElement>
          <ScrollUpElement>
            <BoldText mb="3" fontSize={{ base: "30px", md: "45px" }}>
              Our Story
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
        </Flex>
        <Flex direction="column" opacity={1} align="center">
          <Flex
            direction="row"
            gap="5"
            mb="10"
            justify={{ base: "center", md: "none" }}
            textAlign="center"
          >
            <ScrollUpElement>
              <Text color="#777" textAlign="start">
                Welcome to Arzan Cafe, where the cozy scent of home blends with
                the nostalgia for the homeland. From the very first steps, you will
                feel as though you have stepped into your native land, where smiles
                greet you and farewells are filled with joy.
                At Arzan, every guest is not just a visitor but a priceless individual
                whom we deeply respect. Every element of our decor and every dish on
                our menu is a small piece of the warmth of our homeland that we are
                delighted to share with you. We strive to create an atmosphere where every
                visitor feels at home.
              </Text>
            </ScrollUpElement>
            <Box>
              <ScrollUpElement>
                <Text
                  color="#777"
                  display={{ base: "none", md: "inline-block" }}
                  textAlign={{ base: "center", md: "start" }}
                >
                  There are no strangers here, only valuable guests whom we are happy
                  to welcome again and again.
                  Our dishes are a true explosion of flavors, filled with the aromas and tastes of
                  Kyrgyzstan. From traditional dishes like tandoor Samsa to the comforting
                  boso Lagman, each dish brings you a sense of fulfillment and joy. At Arzan,
                  we are building not just a cafe but a true family where every guest feels warmth
                  and care. We invite you for a cozy dinner, a gathering with friends, or just a cup
                  of aromatic coffee to share a piece of our home with you.
                </Text>
              </ScrollUpElement>
            </Box>
          </Flex>
          <ScrollUpElement>
            <Button
              h="48px"
              bgColor="#ddc5a2"
              py="12px"
              px="32px"
              color="black"
              borderRadius="24px"
            >
              <Link href="/about">More About Us</Link>
            </Button>
          </ScrollUpElement>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OurStory;
