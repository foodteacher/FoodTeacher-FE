"use client";

import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import "./BottomSheetStyle.css";
import { DietMsgType } from "../card/ChattingRoom";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePostUserDiet } from "../../utils/hooks/usePostUserDiet";
import { UserInfoType } from "../template/SignupTemplate";
import ChattingRoomTest from "../card/ChattingRoomTest";
import HealthIcon from "../icon/HealthIcon";

const TheBottomSheet = () => {
  const sheetRef = useRef<BottomSheetRef>(null);
  const [chattingData, setChattingData] = useState<string>("");

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<DietMsgType>();

  const {
    userDietResponseData: dietResponseData,
    postUserDietMutation,
    isLoading,
  } = usePostUserDiet();

  const onSubmit: SubmitHandler<DietMsgType> = async (data) => {
    const dietMsg = data.msg;
    reset();
    const userInfoString: string | null = localStorage.getItem("userInfo");
    setChattingData(dietMsg);
    if (userInfoString !== null) {
      const userInfo: UserInfoType = JSON.parse(userInfoString);
    }
    await postUserDietMutation({ query: dietMsg });
  };

  return (
    <BottomSheet
      open
      ref={sheetRef}
      blocking={false}
      snapPoints={({ maxHeight }) => [
        maxHeight * 0.8,
        maxHeight * 0.5,
        maxHeight * 0.2,
      ]}
      header={
        <VStack
          textAlign={"center"}
          w={"100%"}
          padding={"13px 22px 0px 22px"}
          spacing={"0.5px"}
          zIndex={100}
        >
          <HStack spacing={"2px"}>
            <HealthIcon />
            <Heading
              as={"h1"}
              color={"#000000"}
              fontSize={"20px"}
              fontWeight={"medium"}
            >
              식선생
            </Heading>
          </HStack>

          <Text as={"h2"} color={"#787878"} fontSize={"12px"} lineHeight={2}>
            다이어트는 의지의 차이입니다.
          </Text>
        </VStack>
      }
    >
      <ChattingRoomTest
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        chattingData={chattingData}
        isLoading={isLoading}
        dietResponseData={dietResponseData}
      />
    </BottomSheet>
  );
};

export default TheBottomSheet;
