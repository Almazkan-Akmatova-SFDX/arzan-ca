"use client";
import React, { FormEvent, useState } from "react";
import { Box, Button, Flex, SimpleGrid, useToast } from "@chakra-ui/react";
import CurlyText from "../components/CurlyText";
import BoldText from "../components/BoldText";
import FormInput from "../components/FormInput";
import ScrollUpElement from "../animations/ScrollUpElement";

const ContactUsForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Thank you for submitting",
      description: "Azan will answer soon.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    // Clear form
    setFormData({ name: "", email: "", message: "" });

    // Additional form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Flex py="50px" w="100%" align="center" justify="center">
      <Flex
        width={{ base: "90%", lg: "60%" }}
        align="center"
        justify="center"
        direction="column"
      >
        <CurlyText mb="20px" fontSize="40px">
          Contact Us
        </CurlyText>
        <BoldText mb="40px" fontSize="30px">
          Let{"'"}s Get in Touch
        </BoldText>
        <Box
          mb="28px"
          width="70px"
          borderTop="1px solid #F45734"
          borderBottom="1px solid #F45734"
          height="4px"
        />
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <Flex w="100%" align="center" direction="column">
            <SimpleGrid
              mb="30px"
              columns={{ base: 1, md: 2 }}
              w="100%"
              gap="40px"
            >
              <FormInput
                name="name"
                placeholder="Enter your name"
                type="SHORT"
                value={formData.name}
                onChange={handleChange}
              />
              <FormInput
                name="email"
                placeholder="Enter your email"
                type="SHORT"
                value={formData.email}
                onChange={handleChange}
              />
            </SimpleGrid>
            <FormInput
              name="message"
              placeholder="Drop us a line or two..."
              type="LONG"
              value={formData.message}
              onChange={handleChange}
            />
            <ScrollUpElement>
              <Button
                type="submit"
                mt="30px"
                h="48px"
                bgColor="#ddc5a2"
                py="12px"
                px="32px"
                color="#111"
                borderRadius="24px"
                fontWeight="400"
              >
                Submit Message
              </Button>
            </ScrollUpElement>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default ContactUsForm;
