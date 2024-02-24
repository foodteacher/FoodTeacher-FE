"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import TextLogoIcon from "../icon/TextLogoIcon";
import GoBackArrowIcon from "../icon/GoBackArrowIcon";
import { useUser } from "../../utils/hooks/useUser";
import UserDarkIcon from "../icon/UserDarkIcon";
import CloseIcon from "../icon/CloseIcon";

const TheHeader = () => {
  const path = usePathname();
  const router = useRouter();
  const { userData } = useUser();

  interface LinkType {
    [key: string]: string | undefined;
    main?: string;
    mypage: string;
    detail: string;
  }

  const headerTitle = () => {
    const link: LinkType = {
      mypage: "마이페이지",
      detail: "레포트 상세보기",
    };

    const currentPath = path.split("/")[1];

    const title =
      link[`${Object.keys(link).filter((ele) => ele === currentPath)[0]}`];

    return title;
  };

  return (
    <>
      {path !== "/signup" && (
        <Box
          margin={"0 auto"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Flex
            as={"header"}
            position={"absolute"}
            top={"0"}
            padding={"4px 22px"}
            w={"100%"}
            maxW={"420px"}
            margin={"0 auto"}
            h={"52px"}
            alignItems={"center"}
            justifyContent={"space-between"}
            zIndex={1000}
          >
            {path === "/main" && (
              <>
                <TextLogoIcon />
                <Text onClick={() => router.push("/mypage")} cursor={"pointer"}>
                  <UserDarkIcon />
                </Text>
              </>
            )}

            {path === "/mypage" && (
              <>
                <Text margin={"0 auto"} fontSize={"20px"} fontWeight={"medium"}>
                  {headerTitle()}
                </Text>
                <Box
                  pos={"absolute"}
                  right={"22px"}
                  cursor={"pointer"}
                  onClick={() => router.push("/main")}
                >
                  <CloseIcon />
                </Box>
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
                  {headerTitle()}
                </Text>
              </>
            )}
          </Flex>
        </Box>
      )}
    </>
  );
};

export default TheHeader;
