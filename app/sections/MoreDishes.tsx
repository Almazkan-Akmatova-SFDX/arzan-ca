"use client";
import { Badge, Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import CurlyText from "../components/CurlyText";
import BoldText from "../components/BoldText";
import ScrollUpElement from "../animations/ScrollUpElement";
import Image from "next/image";

const MoreDishes = () => {
  const menuItems = [
    {
      name: "Plov",
      properties: ["New", "Halal"],
      price: "$15",
      description:
        "Steamed rice prepared with carrots, onions, and beef, and served with a side salad",
      image: "/menuitems/Plov.webp",
    },
    {
      name: "PUMPKIN MANTY",
      properties: ["Special", "Halal"],
      price: "$12",
      description:
        "Oven-baked buns with minced pumkin and onions seasoned with black pepper and sprinkled with sesame sprinkles (One per order)",
      image: "/menuitems/Beef-samsa.webp",
    },
    {
      name: "ACHUU ET",
      properties: ["Season", "Halal"],
      price: "$19",
      description: "Traditional Uyghur meal, spicy beef and vegetables",
      image: "/menuitems/Achuu-et.webp",
    },
    {
      name: "Beshbarmak",
      properties: ["New", "Halal"],
      price: "$18",
      description: "Finely chopped boiled beef with egg noodles",
      image: "/menuitems/Beshbarmak.webp",
    },
    {
      name: "Lulya Kebab",
      properties: ["Halal"],
      price: "$10",
      description: "1 skewer of grilled minced beef served w rice and vegies",
      image: "/menuitems/Lulya-kebab.webp",
    },
    {
      name: "Lamb Kuurdak",
      properties: ["Season", "Halal"],
      price: "$22",
      description: "Stewed lamb with potatoes and onions",
      image: "/menuitems/Lamb-kuurdak.webp",
    },
    {
      name: "Gan-fan",
      properties: ["New", "Halal"],
      price: "$14",
      description: "Sauteed beef, peppers, onions served over rice",
      image: "/menuitems/Gan-fan.webp",
    },
    {
      name: "Tandoor Samsa",
      properties: ["Special", "Halal"],
      price: "$7",
      description: "Stuffed pastry made with beef, onion and cooked in tandoor",
      image: "/menuitems/Tandoor-samsa.webp",
    },
  ];

  return (
    <Flex my="50px" align="center" justify="center">
      <Flex
        direction="column"
        align="center"
        justify="center"
        width={{ base: "100%", md: "80%" }}
      >
        <ScrollUpElement>
          <CurlyText fontSize="40px">More Dishes</CurlyText>
        </ScrollUpElement>
        <ScrollUpElement>
          <BoldText
            mb="30px"
            fontSize="30px"
            lineHeight="40px"
            fontWeight="700"
          >
            From Our Menu
          </BoldText>
        </ScrollUpElement>
        <ScrollUpElement>
          <Box
            mb="28px"
            width="70px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
            borderColor="#F45734"
            height="4px"
          />
        </ScrollUpElement>
        <ScrollUpElement>
          <SimpleGrid columns={{ md: 1, lg: 2 }} mb="50px">
            {menuItems.map((item, index) => (
              <Flex w="100%" key={index} py="20px" px="15px">
                <Flex direction="row" width="100%" mr="20px">
                  <Flex
                    minW="60px"
                    maxW="60px"
                    mr="3"
                    h="60px"
                    borderRadius="30px"
                    overflow="clip"
                    position="relative" // The parent must have a position style
                  >
                    <Image
                      fill
                      src={item.image}
                      alt="Dishes Image"
                      style={{ objectFit: "cover" }} // Optional: Adjusts how the image fits into the container
                    />
                  </Flex>

                  <Flex direction="column" w="100%">
                    <Flex mb="2" align="baseline" width="100%" direction="row">
                      <Text fontWeight="700" whiteSpace="nowrap">
                        {item.name}
                      </Text>
                      <Box
                        borderStyle="dotted"
                        borderBottomWidth="1.5px"
                        width="100%"
                      />
                      <Text>{item.price}</Text>
                    </Flex>
                    <Flex width="100%" direction="column">
                      <Text mb="2">{item.description}</Text>
                      <Flex ml="3" direction="row" gap="2">
                        {item.properties.map((prop, index) => (
                          <Badge
                            key={index}
                            boxShadow="inset 0 0 0 1px #e3e3e3"
                            borderRadius="3px"
                            fontSize="9px"
                            bg={
                              prop === "Season"
                                ? "#8756b5"
                                : prop === "Special"
                                ? "#dfa25f"
                                : "white"
                            }
                            color={
                              prop === "Season" || prop === "Special"
                                ? "white"
                                : "black"
                            }
                            px="8px"
                            py="2px"
                            textTransform="uppercase"
                          >
                            {prop}
                          </Badge>
                        ))}
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </SimpleGrid>
        </ScrollUpElement>

        <ScrollUpElement>
          <Button
            h="48px"
            bgColor="#ddc5a2"
            py="12px"
            px="32px"
            color="black"
            borderRadius="24px"
          >
            View Full Menu
          </Button>
        </ScrollUpElement>
      </Flex>
    </Flex>
  );
};

export default MoreDishes;
