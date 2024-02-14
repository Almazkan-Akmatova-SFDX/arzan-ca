"use client";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  Badge,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import BoldText from "../BoldText";
import CurlyText from "../CurlyText";
import ScrollUpElement from "../../animations/ScrollUpElement";
import Link from "next/link";
import Image from "next/image";
interface FoodItems {
  name: string;
  categories: string[]; // Updated to be an array of strings
  price: number;
  description: string;
  image: string; //
}

interface MenuItems {
  foodTypeName: string;
  foodItems: FoodItems[];
  href: string;
  btnLabel: string;
  badgeType?: "PICTURE" | "TEXT";
}

// Ensure you have the correct path for your images. They should be in the public folder.
const Menu = ({
  foodTypeName,
  foodItems,
  href,
  btnLabel,
  badgeType = "PICTURE",
}: MenuItems) => {
  // Responsive Flex Direction
  const foodNewItems = foodItems.filter((item) => item.image !== "");
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });

  // Responsive Image Size
  const imageSize = useBreakpointValue({
    base: "100%",
    md: "254px",
    lg: "369px",
  });

  // Responsive Font Size
  const titleFontSize = useBreakpointValue({ base: "35px", md: "40px" });
  const subTitleFontSize = useBreakpointValue({ base: "30px", md: "40px" });

  return (
    <Flex
      align="center"
      justify="center"
      py="50px"
      px="10%"
      minHeight="800px"
      direction="column"
      bg="white"
      backgroundImage="url('./assets/menu-bg.webp')" // Ensure this path is correct
    >
      <VStack spacing={5}>
        <ScrollUpElement>
          <CurlyText fontSize={titleFontSize}>Menu</CurlyText>
        </ScrollUpElement>
        <ScrollUpElement>
          <BoldText
            whiteSpace="nowrap"
            fontSize={subTitleFontSize}
            textTransform="uppercase"
          >
            {foodTypeName}
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
      </VStack>
      <ScrollUpElement>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} mt={10} gap={4}>
          {foodItems
            .filter((item) => item.image !== "") // Filter out items with an empty image field
            .map((item) => (
              <Flex
                key={item.name}
                position="relative"
                width="100%"
                borderRadius="lg"
                direction="column"
                mb="4"
              >
                <Box
                  position="relative"
                  width="100%"
                  paddingBottom="100%"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    style={{
                      objectFit: "cover",
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                    }}
                    fill
                  />
                  {badgeType === "PICTURE" && (
                    <Badge
                      zIndex="4"
                      position="absolute"
                      top="0"
                      right="0"
                      bg="#dfa25f"
                      color="white"
                      m="16px"
                    >
                      <Text fontSize="xs">{item.categories.join(", ")}</Text>
                    </Badge>
                  )}
                </Box>

                <Flex direction="column" p="4">
                  <Flex align="baseline" width="100%" direction="row">
                    <Text fontSize="xl" whiteSpace="nowrap">
                      {item.name}
                    </Text>
                    <Box
                      flex="1"
                      borderStyle="dotted"
                      borderBottomWidth="1.5px"
                      borderColor="#bbb"
                      mx="2"
                    />
                    <Text fontSize="lg" fontWeight="bold">
                      ${item.price}
                    </Text>
                  </Flex>
                  <Text my="2" fontSize="md">
                    {item.description}
                  </Text>
                  {badgeType === "TEXT" && (
                    <Flex direction="row" gap="5px">
                      {item.categories.map((category, index) => (
                        <Badge key={index} bg="#dfa25f" color="white">
                          <Text fontSize="xs">{category}</Text>
                        </Badge>
                      ))}
                    </Flex>
                  )}
                </Flex>
              </Flex>
            ))}
        </SimpleGrid>
      </ScrollUpElement>

      <ScrollUpElement>
        <Link href={href}>
          <Button
            h="48px"
            bgColor="#ddc5a2"
            py="12px"
            px="32px"
            color="black"
            borderRadius="24px"
          >
            {btnLabel}
          </Button>
        </Link>
      </ScrollUpElement>
    </Flex>
  );
};

export default Menu;
