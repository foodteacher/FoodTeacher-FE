"use client";
import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MyPageCharacter from "../../utils/img/MypageCharacter.png";
import { useLayoutEffect, useState } from "react";
import TheHeader from "../header/TheHeader";
import CloseIcon from "../icon/CloseIcon";
import TodayReportCard from "../card/TodayReportCard";
import { UserInfoType } from "./SignupTemplate";
import { DietResponse } from "../../utils/api/AxiosSetting";
import { useLogout } from "../../utils/hooks/useLogout";
import useGetUserDietInfo from "../../utils/hooks/useGetUserDietInfo";
import { useQueryClient } from "@tanstack/react-query";

const MyPageTemplate = () => {
  const router = useRouter();
  const { userDietInfo: loginUserInfo } = useGetUserDietInfo();
  const { logoutMutation } = useLogout();
  const [userData, setUserData] = useState<UserInfoType>();
  const [userDiet, setUserDiet] = useState<DietResponse>();
  const queryClient = useQueryClient();

  useLayoutEffect(() => {
    let userInfo: any = localStorage.getItem("userInfo");
    const userInfoData: UserInfoType = JSON.parse(userInfo);
    setUserData(userInfoData);
    let userDiet: any = localStorage.getItem("userDiet");
    const userDietData: DietResponse = JSON.parse(userDiet);
    setUserDiet(userDietData);
  }, []);

  const logoutHandler = async () => {
    if (loginUserInfo) {
      // await logoutMutation();
      console.log(1);
      localStorage.removeItem("accessToken");
      queryClient.removeQueries({ queryKey: ["user"] });
    } else {
      localStorage.removeItem(`userInfo`);
      localStorage.removeItem(`userDiet`);
    }
    // return router.push("/");
  };

  return (
    <>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        pos={"relative"}
        margin={"0 auto"}
        maxW={"420px"}
        minH={"844px"}
        padding={"60px 22px 0px 22px"}
        alignItems={"center"}
        bgColor={"#F4F4F4"}
      >
        <TheHeader>
          <Text margin={"0 auto"} fontSize={"20px"} fontWeight={"medium"}>
            마이페이지
          </Text>
          <Box
            pos={"absolute"}
            right={"22px"}
            cursor={"pointer"}
            onClick={() => router.push("/main")}
          >
            <CloseIcon />
          </Box>
        </TheHeader>
        <VStack w={"100%"} spacing={"15px"}>
          <VStack spacing={"16px"}>
            <Box bgColor={"white"} borderRadius={"40px"}>
              <Image
                src={MyPageCharacter}
                alt="식선생"
                placeholder="blur"
                style={{ width: "104px", height: "auto" }}
                quality={100}
              />
            </Box>
            <Text
              textAlign={"center"}
              color={"#2F2F2F"}
              fontWeight={"semibold"}
              fontSize={"18px"}
            >
              {loginUserInfo?.name || userData?.name || ""}
            </Text>
          </VStack>
          <TodayReportCard bgColor={"#FFFFFF"}>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#00CE84"}>기본 정보</Text>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  성별
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {loginUserInfo?.gender || userData?.gender || ""}
                </Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  나이
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {loginUserInfo?.age || userData?.age || ""}
                </Text>
              </HStack>
            </VStack>
          </TodayReportCard>

          <TodayReportCard>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#00CE84"}>신체 정보</Text>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  키
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {loginUserInfo?.height || userData?.height || ""}
                </Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  체중
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {loginUserInfo?.weight || userData?.weight || ""}
                </Text>
              </HStack>
              <HStack spacing={"32px"}>
                <Text color={"#959595"} w={"67px"}>
                  목표 체중
                </Text>
                <Text fontWeight={"semibold"} color={"#2F2F2F"}>
                  {loginUserInfo?.target_weight ||
                    userData?.target_weight ||
                    ""}
                </Text>
              </HStack>
            </VStack>
          </TodayReportCard>

          <TodayReportCard>
            <VStack spacing={"12px"} alignItems={"flex-start"}>
              <Text color={"#00CE84"}>오늘 하루 칼로리</Text>
              <Text color={"#2F2F2F"}>
                아침 : {userDiet?.breakfast.menu} {userDiet?.breakfast.calories}{" "}
                Kcal
              </Text>
              <Text color={"#2F2F2F"}>
                점심 : {userDiet?.lunch.menu} {userDiet?.lunch.calories} Kcal
              </Text>
              <Text color={"#2F2F2F"}>
                저녁 : {userDiet?.dinner.menu} {userDiet?.dinner.calories} Kcal
              </Text>
            </VStack>
          </TodayReportCard>

          <Text
            fontSize={"18px"}
            alignSelf={"flex-start"}
            marginLeft={"15px"}
            cursor={"pointer"}
            onClick={() => logoutHandler()}
          >
            로그아웃
          </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default MyPageTemplate;
