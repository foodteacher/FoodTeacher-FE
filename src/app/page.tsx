"use client";
import { Flex, useColorMode } from "@chakra-ui/react";
import { useFunnel } from "../../utils/hooks/useFunnel";
import MainFunnel from "../../component/Funnel/MainFunnel";
import LoginFunnel from "../../component/Funnel/LoginFunnel";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../utils/hooks/useUser";

export default function Home() {
  const router = useRouter();
  const { colorMode, setColorMode } = useColorMode();
  const { funnel, setFunnel } = useFunnel("main");
  const { userData } = useUser();

  useEffect(() => {
    if (colorMode === "dark") {
      setColorMode("light");
    }
    const userId = localStorage.getItem("userInfo");
    if (userId) return router.push("/main");
  }, [colorMode, setColorMode, router]);

  useEffect(() => {
    if (userData) {
      router.push("/main");
    }
  }, [userData, router]);

  return (
    <Flex
      as={"main"}
      flexDir={"column"}
      w={"100%"}
      pos={"relative"}
      margin={"0 auto"}
      maxW={"420px"}
      height={"100vh"}
      padding={"60px 22px"}
      alignItems={"center"}
      bgColor={"#2B2C2C"}
    >
      {funnel === "main" && <MainFunnel setFunnel={setFunnel} />}
      {funnel === "login" && <LoginFunnel />}
    </Flex>
  );
}
