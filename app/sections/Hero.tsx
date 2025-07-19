import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { FaInstagram, FaPhoneAlt, FaYelp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import CurlyText from "../components/CurlyText";
import BoldText from "../components/BoldText";

const Hero = () => {
  return (
    <Flex>
      <Flex
        width="100%"
        position="relative" // Set position relative for the parent Flex
        direction="column"
        align="center"
        justify="center"
        height={{ base: "700px", md: "779px" }} // Adjust the height as needed
        backgroundPosition="center" // Set background position
        backgroundSize="cover" // Set background size
        backgroundRepeat="no-repeat" // Prevent background repeat
        style={{ backgroundImage: `url('/assets/Boso.jpeg')` }} // Add image to the background
      >
        <Flex
          backgroundColor="rgba(0,0,0,0.5)" // Semi-transparent overlay
          w="100%"
          direction="column"
          px={{ base: "10%", md: "0" }}
          justify="center"
          h="100%"
        >
          <Flex direction="column" align="center">
            <CurlyText
              fontWeight="bold"
              border={{ with: '1px', color: 'white' }}
              fontSize={{ base: "40px", md: "56px" }} // Adjust font size as necessary
              color="orange.300" // Adjust the color to match the branding
              textAlign="center"
              mb="4"
            >
              Welcome to
            </CurlyText>
            <BoldText
              fontSize={{ base: "23px", md: "5xl" }} // Adjust font size as necessary
              color="white" // Adjust the color to match the branding
              textAlign="center"
              mb="4"
            >
              ARZAN CAFE
            </BoldText>
            {/* Subtitle */}
            <Box
              mb="28px"
              width="70px"
              borderTop="1px solid #F45734"
              borderBottom="1px solid #F45734"
              height="4px"
            />
            <Text
              fontSize="16px" // Adjust font size as necessary
              color="gray.400" // Adjust the color to match the branding
              textAlign="center"
              mb="6"
            >
              Authentic, delicious dishes from Central Asia
            </Text>
            {/* Order Now Button - Make sure to style the button as needed */}

            <Link href="https://order.toasttab.com/online/arzan-cafe">
              <Button
                h="48px"
                bgColor="#ddc5a2"
                py="12px"
                px="32px"
                color="black"
                borderRadius="24px"
              >
                Order Now
              </Button>
            </Link>
          </Flex>
        </Flex>
        {/* details box */}
        <Flex
          position="absolute" // Set position absolute for the details box
          bottom="0" // Anchor it to the bottom
          height={{ base: "150", md: "40" }}
          width="100%"
          justify="center"
        >
          <Flex
            top={{ base: "0", md: "auto" }}
            width="80%"
            align="center"
            gap={{ base: "5", md: "0" }}
            justify={{ base: "none", md: "space-between" }}
            direction={{ base: "column", md: "row" }}
          >
            <Flex direction="row" align="center" justify="center" mt="4">
              <FaPhoneAlt color="white" fontSize="25px" />
              <Link href="tel:312-898-2432">
                <BoldText
                  fontSize={{ base: "15px", md: "20px" }}
                  color="white"
                  ml="3"
                >
                  (312) 898 24 32
                </BoldText>
              </Link>
            </Flex>
            <Flex height="10" justify="space-between" width="150px">
              <Link href="https://www.yelp.com/biz/arzan-cafe-chicago">
                <Box
                  boxSize="40px"
                  borderWidth="1px"
                  borderColor="rgba(255,255,255,.6)"
                  borderRadius="3px"
                  p={{ base: "3", md: "2" }}
                >
                  <FaYelp color="white" size="fit" />
                </Box>
              </Link>
              <Link href="https://www.facebook.com/arzancafe/">
                <Box
                  boxSize="40px"
                  borderWidth="1px"
                  borderColor="rgba(255,255,255,.6)"
                  borderRadius="3px"
                  p={{ base: "3", md: "2" }}
                >
                  <FaFacebookF color="white" size="fit" />
                </Box>
              </Link>
              <Link href="https://www.instagram.com/arzancafe_chicago/">
                <Box
                  boxSize="40px"
                  borderWidth="1px"
                  borderColor="rgba(255,255,255,.6)"
                  borderRadius="3px"
                  p={{ base: "3", md: "2" }}
                >
                  <FaInstagram color="white" size="fit" />
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
