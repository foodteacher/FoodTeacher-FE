"use client";
import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mainStage1 from "../../utils/img/mainStage1.png";
import mainStage2 from "../../utils/img/mainStage2.png";
import mainStage3 from "../../utils/img/mainStage3.png";
import mainStage4 from "../../utils/img/mainStage4.png";
import mainStage5 from "../../utils/img/mainStage5.png";
import { useRouter } from "next/navigation";
import { DietResponse } from "../../utils/api/AxiosSetting";
import useGetUserDietInfo from "../../utils/hooks/useGetUserDietInfo";

const DietStateSection = (isLoading: { isLoading: boolean }) => {
  const [dietResponseData, setDietResponseData] = useState<
    DietResponse | undefined
  >();

  const { userDietInfo } = useGetUserDietInfo();

  useEffect(() => {
    let userInfo: any = localStorage.getItem("userDiet");
    if (userInfo) {
      const userDietInfoData: DietResponse = JSON.parse(userInfo);
      setDietResponseData(userDietInfoData);
    }
  }, [isLoading]);

  const dietNickName = {
    stage1: ["열정가득 다이어터", mainStage1],
    stage2: ["기세등등 유지어터", mainStage2],
    stage3: ["휴식중인 유지어터", mainStage3],
    stage4: ["방심한 다이어터", mainStage4],
    stage5: ["위기의 다이어터", mainStage5],
  };

  function getStageName(step: number | undefined) {
    if ((step as number) >= 800) {
      return dietNickName.stage5;
    } else if ((step as number) >= 400) {
      return dietNickName.stage4;
    } else if ((step as number) >= 200) {
      return dietNickName.stage3;
    } else if ((step as number) >= 100) {
      return dietNickName.stage2;
    } else {
      return dietNickName.stage1;
    }
  }
  const [stageName, stageImg] = getStageName(
    userDietInfo?.excess_calories || dietResponseData?.초과칼로리
  );

  const router = useRouter();
  return (
    <HStack
      display={"flex"}
      margin={"0 auto"}
      w={"100%"}
      alignItems={"flex-end"}
      onClick={() => router.push("/detail")}
      cursor={"pointer"}
    >
      <Box w={"100%"}>
        <Text fontSize={"16px"} color={"#787878"}>
          {(userDietInfo?.excess_calories ||
            (dietResponseData?.초과칼로리 as number)) > 0
            ? `${
                userDietInfo?.excess_calories || dietResponseData?.초과칼로리
              } Kcal 초과`
            : `${
                userDietInfo?.excess_calories ||
                -(dietResponseData?.초과칼로리 as number)
              } Kcal`}
        </Text>
        <Heading fontSize={"22px"}>
          오늘{" "}
          <Text as={"a"} color={"#40E98E"}>
            {dietResponseData?.운동필요시간}
          </Text>
          <br />
          현재 몸무게 안정권 유지
        </Heading>
      </Box>
      <VStack spacing={"-3px"}>
        <Card bgColor={"#434343"} margin={"0 auto"}>
          <CardBody padding={"4px 7px"}>
            <Text color={"#40E98E"} textAlign={"center"} fontSize={"9px"}>
              {stageName as string}
            </Text>
          </CardBody>
        </Card>
        <Image
          src={stageImg}
          alt="메인 캐릭터"
          placeholder="blur"
          style={{ width: "130px", height: "auto" }}
          quality={100}
        />
      </VStack>
    </HStack>
  );
};

export default DietStateSection;
