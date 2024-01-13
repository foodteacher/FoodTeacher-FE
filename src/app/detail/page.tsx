"use client";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TodayReportCard from "../../../component/card/TodayReportCard";
import TheHeader from "../../../component/header/TheHeader";
import GoBackArrowIcon from "../../../component/icon/GoBackArrowIcon";
import CharacterImgCard from "../../../component/card/CharacterImgCard";
import { useLayoutEffect, useState } from "react";
import { UserInfoType } from "../../../component/template/SignupTemplate";
import { DietResponse } from "../../../utils/api/AxiosSetting";
import useGetUserDietInfo from "../../../utils/hooks/useGetUserDietInfo";

const Page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserInfoType>();
  const [userDiet, setUserDiet] = useState<DietResponse>();
  const { userDietInfo: loginUserInfo } = useGetUserDietInfo();

  useLayoutEffect(() => {
    let userInfo: any = localStorage.getItem("userInfo");
    const userInfoData: UserInfoType = JSON.parse(userInfo);
    setUserData(userInfoData);
    let userDiet: any = localStorage.getItem("userDiet");
    const userDietData: DietResponse = JSON.parse(userDiet);
    setUserDiet(userDietData);
  }, []);

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
        bgColor={"#181818"}
      >
        <TheHeader>
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
        </TheHeader>

        <VStack w={"100%"} spacing={"16px"}>
          <CharacterImgCard userDiet={userDiet} />
          <TodayReportCard bgColor={"#000000"}>
            <VStack alignItems={"flex-start"} spacing={"5px"}>
              <Text color={"#838383"}>{userData?.name}님의 하루 칼로리</Text>
              <Text fontWeight={"semibold"}>
                아침 :{" "}
                {`${loginUserInfo?.breakfast.menu}
                ${loginUserInfo?.breakfast.calories} ` ||
                  `${userDiet?.breakfast.menu} ${userDiet?.breakfast.calories}`}
                kcal
              </Text>
              <Text fontWeight={"semibold"}>
                점심 :{" "}
                {`${loginUserInfo?.lunch.menu} ${loginUserInfo?.lunch.calories}` ||
                  `${userDiet?.lunch.menu} ${userDiet?.lunch.calories}`}{" "}
                kcal
              </Text>
              <Text fontWeight={"semibold"}>
                저녁 :{" "}
                {`${loginUserInfo?.dinner.menu} ${loginUserInfo?.dinner.calories}` ||
                  `${userDiet?.dinner.menu} ${userDiet?.dinner.calories}`}{" "}
                kcal
              </Text>
            </VStack>
          </TodayReportCard>
          <TodayReportCard bgColor={"#000000"}>
            <VStack alignItems={"flex-start"} spacing={"5px"}>
              <Text color={"#838383"}>{userData?.name}님께 드리는 팩폭</Text>
              <Text fontWeight={"semibold"}>
                {loginUserInfo?.잔소리}
                {/* 기초대사량에서
                {(userDiet?.초과칼로리 as number) > 0
                  ? `${userDiet?.초과칼로리} Kcal 초과`
                  : `${userDiet?.초과칼로리 as number} Kcal`} */}
              </Text>
              <Text>권장 운동</Text>
              <Text fontWeight={"semibold"}>
                {loginUserInfo?.운동필요시간 || userDiet?.운동필요시간}
              </Text>
            </VStack>
          </TodayReportCard>
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
