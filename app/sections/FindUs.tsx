"use client";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import ScrollLeftElement from "../animations/ScrollLeftElement";
import ScrollRightElement from "../animations/ScrollRightElement";
import BoldText from "../components/BoldText";
import CurlyText from "../components/CurlyText";
import Image from "next/image";

const FindUs = () => {
  return (
    <Flex
      justify="center"
      py="20px"
      backgroundImage="url('./assets/menu-bg.webp')" // Correct usage of url()
    >
      <Flex
        justify="center"
        align="center"
        height="100%"
        w={{ base: "100%", lg: "80%" }}
        direction={{ base: "column", lg: "row" }}
        overflow="hidden"
      >
        {/* Left Side */}
        <ScrollRightElement
          display="flex"
          bg="white"
          p="12px"
          width={{ base: "100%", md: "100%", lg: "90%" }}
          flexDirection={{ base: "column-reverse", md: "row" }}
          mr={{ md: "0", lg: "30px" }}
        >
          {/* Details Box */}
          <Flex
            w="100%"
            borderWidth="1px"
            borderColor="#e3e3e3"
            pt="40px"
            pb="48px"
            px="20px"
          >
            <Flex
              width="100%"
              direction="column"
              align="center"
              justify="center"
              px={{ md: "0", lg: "50px" }}
            >
              <Box boxSize="64px" overflow="hidden">
                <Image
                  width="64"
                  height="64"
                  src="/assets/where.webp"
                  alt="find us Icon"
                />
              </Box>
              <BoldText
                whiteSpace="nowrap"
                fontSize={{ base: "20", md: "23px" }}
                fontWeight="bold"
                mt="16px"
                mb="12px"
              >
                WHERE TO FIND US
              </BoldText>
              <Box
                width="70px"
                borderTopWidth="1px"
                borderBottomWidth="1px"
                borderColor="#F45734"
                height="4px"
                mb="20px"
              />
              <Link href="https://maps.app.goo.gl/HS9oiuouLmmM3Nd97">
                <Text mb="24px" textAlign="center" lineHeight="33px">
                  <strong>Chicago IL Location:</strong>
                  <br />
                  4702 N Kimball Ave, Chicago
                  <br />
                  IL 60625
                </Text>
              </Link>

              <Link
                href="https://maps.app.goo.gl/TZcmkbEwnehRCMun9"
                mb="24px"
                textAlign="center"
                lineHeight="33px"
              >
                <Text>
                  <strong> Rolling Meadows Location:</strong>
                  <br />
                  2997 Kirchoff Rd, Rolling Meadows
                  <br />
                  IL 60008
                </Text>
              </Link>
              <Link mb="12px" href="/">
                abc@example.com
              </Link>
              <Text>
                <Link href="tel:312-898-2432">
                  <Text>(312) ARZAN-CAFE</Text>
                </Link>
              </Text>
            </Flex>
          </Flex>
          {/* Map Box */}
          <Flex w="100%" mb={{ base: "12px", lg: "0" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.5600264951972!2d-87.71634882379762!3d41.966784459856775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcd7187c08aaf%3A0xb253fc3da95afe4b!2sArzan%20Cafe!5e0!3m2!1sen!2sus!4v1700400568564!5m2!1sen!2sus"
              aria-hidden="true"
              width="100%"
              height="100%"
            ></iframe>
          </Flex>
        </ScrollRightElement>
        {/* Right Side */}
        <ScrollLeftElement
          display="flex"
          mt={{ base: "50px", lg: "0" }}
          width="350px"
          backgroundImage="url('./assets/catering-bg.webp')"
          flexDirection="column"
          p="12px"
        >
          <Flex
            py="20px"
            justify="center"
            align="center"
            width="100%"
            direction="column"
            borderWidth="1px"
            borderColor="white"
          >
            <CurlyText color="white" fontSize="30px" mt="16px">
              Welcome
            </CurlyText>
            <BoldText
              whiteSpace="nowrap"
              color="white"
              fontSize="22px"
              mt="20px"
              mb="16px"
            >
              HOURS OF OPERATION
            </BoldText>
            {/* Operation Hours */}
            <Flex direction="column" pt="8px" pb="24px" align="center">
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <Flex key={day} align="baseline" width="100%">
                  <Text color="white" fontSize="15px" my="2">
                    {day}:
                  </Text>
                  <Box
                    borderStyle="dotted"
                    borderBottomWidth="1.5px"
                    width="100%"
                  />
                  <Text
                    color="white"
                    fontSize="15px"
                    my="2"
                    whiteSpace="nowrap"
                  >
                    8:00 am - 10:00 pm
                  </Text>
                </Flex>
              ))}
            </Flex>
            <Link href="https://slicelife.com/restaurants/il/chicago/60625/arzan-cafe/menu">
              <Button
                h="40px"
                bgColor="#ddc5a2"
                py="12px"
                px="32px"
                color="black"
                borderRadius="24px"
              >
                Make a Reservation
              </Button>
            </Link>
          </Flex>
        </ScrollLeftElement>
      </Flex>
    </Flex>
  );
};

export default FindUs;
