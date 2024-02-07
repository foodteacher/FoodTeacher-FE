"use client";

import React from "react";
import { Button, ButtonGroup, Card, CardBody, VStack } from "@chakra-ui/react";

const MenuWidget = () => {
  return (
    <Card>
      <CardBody>
        <VStack>
          <Button w={"100%"}>123</Button>
          <Button w={"100%"}>123214</Button>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default MenuWidget;
