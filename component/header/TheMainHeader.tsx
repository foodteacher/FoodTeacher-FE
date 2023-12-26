"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import TextLogoIcon from "../icon/TextLogoIcon";
import UserIcon from "../icon/UserIcon";
import GoBackArrowIcon from "../icon/GoBackArrowIcon";

const TheMainHeader = () => {
  const path = usePathname();
  const router = useRouter();

  return (
    <>
      <Flex
        as={"header"}
        position={"absolute"}
        top={"0"}
        padding={"4px 22px"}
        w={"100%"}
        h={"52px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        zIndex={1000}
      >
        {path === "/main" && (
          <>
            <TextLogoIcon />
            <Text onClick={() => router.push("/mypage")} cursor={"pointer"}>
              <UserIcon />
            </Text>
          </>
        )}

        {path === "/detail" && (
          <>
            <Box
              pos={"absolute"}
              cursor={"pointer"}
              onClick={() => router.push("/main")}
            >
              <GoBackArrowIcon />
            </Box>
            <Text
              margin={"0 auto"}
              color={"#FFFFFF"}
              fontSize={"20px"}
              fontWeight={"medium"}
            >
              레포트 상세보기
            </Text>
          </>
        )}
      </Flex>
    </>
  );
};

export default TheMainHeader;
