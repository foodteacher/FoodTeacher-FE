"use client";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const ResponsiveLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      as={"main"}
      flexDir={"column"}
      w={"100%"}
      margin={"0 auto"}
      maxW={"420px"}
      height={"100vh"}
      alignItems={"center"}
      bgColor={"transparent"}
      marginTop={"56px"}
    >
      {children}
    </Flex>
  );
};

export default ResponsiveLayout;
