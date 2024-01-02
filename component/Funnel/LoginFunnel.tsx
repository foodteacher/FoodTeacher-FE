"use client";
import { Box, ButtonGroup, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import KaKaoButtonIcon from "../icon/KaKaoButtonIcon";
import VerticalLogoIcon from "../icon/VerticalLogoIcon";
import MainButton from "../button/MainButton";

const LoginFunnel = () => {
  const router = useRouter();

  const signUpKakaoHandler = () => {
    window.location.href = kakaoURL;
  };

  return (
    <VStack w={"100%"} h={"100vh"} justifyContent={"center"}>
      <Box marginBottom={"150px"}>
        <VerticalLogoIcon />
      </Box>

      <Box onClick={() => signUpKakaoHandler()} cursor={"pointer"}>
        <KaKaoButtonIcon />
      </Box>

      <ButtonGroup
        width={"100%"}
        pos={"absolute"}
        bottom={"4vh"}
        padding={"0 22px"}
        justifyContent={"center"}
      >
        <MainButton
          w={"100%"}
          h={"52px"}
          bgColor={"#40E98E"}
          onClick={() => router.push("/signup")}
        >
          <Text color={"#2B2C2C"}>체험하기</Text>
        </MainButton>
      </ButtonGroup>
    </VStack>
  );
};

export default LoginFunnel;
