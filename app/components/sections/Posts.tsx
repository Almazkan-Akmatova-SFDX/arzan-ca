"use client";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import VeryBoldText from "../VeryBoldText";
import ScrollUpElement from "@/app/animations/ScrollUpElement";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

interface Props {
  postName: string;
  postCategory: string;
  postImage: string;
  postDescription: string;
}
const Posts = ({
  postName,
  postCategory,
  postImage,
  postDescription,
}: Props) => {
  return (
    <ScrollUpElement>
      <Flex
        paddingY="20px"
        w="100%"
        justify="center"
        align="center"
        px={{ base: "10px", lg: "55px" }}
        py="20px"
        backgroundImage="url('./assets/menu-bg.webp')"
      >
        <Grid
          h="100%"
          gridTemplateColumns={{ base: `100%`, md: `50% 50%`, lg: "40% 60%" }}
          bg="white"
          width="90%"
          p="12px"
        >
          <GridItem>
            <Flex w="100%" h="100%" direction={{ base: "column", md: "row" }}>
              <Flex
                w="100%"
                borderWidth="1px"
                justify="center"
                align="center"
                py="40px"
              >
                <Flex
                  justify="center"
                  align="center"
                  w="60%"
                  direction="column"
                >
                  <Badge
                    boxShadow="inset 0 0 0 1px #e3e3e3"
                    borderRadius="3px"
                    fontSize="9px"
                    color="white"
                    bg="#dfa25f"
                    px="8px"
                    py="2px"
                    mb="20px"
                    textTransform="uppercase"
                  >
                    {postCategory}
                  </Badge>
                  <VeryBoldText
                    mb="30px"
                    w="100%"
                    lineHeight={{ base: "30px", lg: "48px" }}
                    textAlign="center"
                    fontSize={{ base: "25px", lg: "38px" }}
                    fontWeight="700"
                  >
                    <Link href="/" className="navLink">
                      {postName}
                    </Link>
                  </VeryBoldText>
                  <Box
                    mb="30px"
                    width="70px"
                    borderTop="1px solid #F45734"
                    borderBottom="1px solid #F45734"
                    height="4px"
                  />
                  <Text
                    mb="20px"
                    lineHeight="33px"
                    color="#777"
                    fontSize="17px"
                    w="100%"
                    textAlign="center"
                  >
                    {postDescription}
                  </Text>
                  <Text color="#bbb" w="100%" textAlign="center">
                    July 23, 2022
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem display={{ base: "none", md: "block" }} overflow="hidden">
            <Flex
              position="relative"
              h="100%"
              align="center"
              justify="center"
              className="parentHover"
            >
              <Button
                className="hiddenButton"
                h="48px"
                bgColor="white"
                py="12px"
                px="32px"
                color="black"
                borderRadius="24px"
                rightIcon={<FaArrowRightLong />}
                zIndex="3"
                fontSize="15px"
              >
                <Link href="/about">Read More</Link>
              </Button>

              <Box
                position="absolute"
                objectFit="cover"
                w="100%"
                h="100%"
                right="0"
                top="0"
                overflow="hidden"
              >
                <Image
                  style={{ objectFit: "cover" }}
                  fill
                  src={postImage}
                  alt="Dolan Kyrgyz Restaurant event"
                />
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </ScrollUpElement>
  );
};

export default Posts;
