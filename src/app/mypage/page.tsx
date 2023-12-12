"use client";
import { Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import TodayReportCard from "../../../component/card/TodayReportCard";

const Page = () => {
  const router = useRouter();
  return (
    <>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        pos={"relative"}
        maxW={"390px"}
        padding={"60px 22px 0px 22px"}
        margin={"0 auto"}
        alignItems={"center"}
      >
        <Flex
          as={"header"}
          position={"fixed"}
          top={"0"}
          padding={"4px 22px"}
          w={"100%"}
        >
          <Text
            pos={"fixed"}
            onClick={() => router.push("/main")}
            cursor={"pointer"}
          >
            {"<"}
          </Text>
          <Text margin={"0 auto"} fontSize={"20px"} fontWeight={"medium"}>
            오늘의 칼로리 레포트
          </Text>
        </Flex>

        <VStack w={"100%"} spacing={"17px"}>
          <TodayReportCard>
            00님의 하루 칼로리
            <br />
            <Text fontWeight={"semibold"}>아침 : 계란후라이 200 kcal</Text>
            <Text fontWeight={"semibold"}>점심 : 짜장면 1000 kcal</Text>
            <Text fontWeight={"semibold"}>저녁 : 마라탕 800 kcal</Text>
          </TodayReportCard>
          <TodayReportCard>
            00님께 드리는 팩폭
            <br />
            <Text fontWeight={"semibold"}>기초대사량에서 300 Kcal 초과</Text>
            <Text>권장 운동</Text>
            <Text fontWeight={"semibold"}>걷기 운동 1시간 이상</Text>
          </TodayReportCard>
        </VStack>
      </Flex>
    </>
  );
};

export default Page;
