"use client";
import { FaInstagram, FaYelp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { ReactNode } from "react";
import ArzanLogo from "@/public/Arzan-logo.svg";
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import BoldText from "../BoldText";
import Image from "next/image";

const NavLink = ({
  href,
  name,
  currentPage,
}: {
  href: string;
  name: string;
  currentPage: string;
}) => {
  return (
    <Box
      width="100%"
      color={currentPage === name ? "#dfa25f" : "white"}
      fontWeight={currentPage === name ? "bold" : "none"}
    >
      <Link href={href} className="navLink">
        {name}
      </Link>
    </Box>
  );
};
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial({ cP }: { cP: string }) {
  const currentPage = cP.toUpperCase();

  return (
    <Box backgroundImage="url('./assets/catering-bg.webp')" color="white">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"} color="#dfa25f">
            <ListHeader>
              <BoldText color="white">CONTACT</BoldText>
            </ListHeader>
            <Box>
              <Link
                className="navLink"
                href="https://maps.app.goo.gl/HS9oiuouLmmM3Nd97"
              >
                <Text>
                  <strong>Chicago IL Location:</strong>
                  <br />
                  4702 N Kimball Ave, Chicago
                  <br />
                  IL 60625
                </Text>
              </Link>
            </Box>
            <Box as="a">
              <Link
                className="navLink"
                href="https://maps.app.goo.gl/TZcmkbEwnehRCMun9"
              >
                <Text>
                  <strong> Rolling Meadows Location:</strong>
                  <br />
                  2997 Kirchoff Rd, Rolling Meadows
                  <br />
                  IL 60008
                </Text>
              </Link>
            </Box>
            <Flex justify="center" as="a">
              <Link className="navLink" href="mailto:info@mirnur.com">
                <Text> info@mirnur.com</Text>
              </Link>
            </Flex>

            <Flex className="navLink" justify="center" as="a">
              <Link href="tel:312-898-2432">
                <Text>(312) 898-2432</Text>
              </Link>
            </Flex>
          </Stack>

          <Stack align={"flex-start"} textTransform="uppercase">
            <ListHeader>
              <BoldText>Navigation</BoldText>
            </ListHeader>
            <NavLink href="/" name="HOME" currentPage={currentPage} />
            <NavLink href="/menu" name="MENU" currentPage={currentPage} />
            <NavLink href="/blog" name="BLOG" currentPage={currentPage} />
            <NavLink href="/about" name="ABOUT" currentPage={currentPage} />
            <NavLink href="/contact" name="CONTACT" currentPage={currentPage} />
          </Stack>
          <Stack>
            <Flex>
              <Link href="/">
                <Image
                  width="200"
                  height="200"
                  alt="ARZAN CAFE LOGO"
                  src={ArzanLogo}
                />
              </Link>
              {/* <FaCircle size="50px" color="white" /> */}
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text>Copyright © 2023 ARZAN Restaurant. - All Rights Reserved.</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Yelp"}
              href={"/https://www.yelp.com/biz/arzan-cafe-chicago"}
            >
              <FaYelp />
            </SocialButton>
            <SocialButton
              label={"FaFacebookF"}
              href={"/https://www.facebook.com/arzancafe/"}
            >
              <FaFacebookF />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"/https://www.instagram.com/arzancafe_chicago/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
