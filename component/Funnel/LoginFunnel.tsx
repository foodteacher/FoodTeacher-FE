"use client";
import { Box, ButtonGroup, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import KaKaoButtonIcon from "../icon/KaKaoButtonIcon";
import VerticalLogoIcon from "../icon/VerticalLogoIcon";
import MainButton from "../button/MainButton";

const LoginFunnel = () => {
  const router = useRouter();

  const redirect_uri = "http://localhost:3000/signup"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${redirect_uri}&response_type=code`;

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
