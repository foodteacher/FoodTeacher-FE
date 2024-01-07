"use client";

import { Box, Flex, Progress } from "@chakra-ui/react";
import { useState } from "react";
import { useFunnel } from "../../utils/hooks/useFunnel";
import UserAgreementForm from "../form/UserAgreementForm";
import UserInfoForm from "../form/UserInfoForm";
import UserPhysicForm from "../form/UserPhysicForm";

export interface UserInfoType {
  name: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  target_weight: number;
}

const SignupTemplate = () => {
  const [progress, setProgress] = useState<number>(33.3);
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: "",
    gender: "",
    age: 0,
    height: 0,
    weight: 0,
    target_weight: 0,
  });
  const { funnel, setFunnel } = useFunnel("userAgreement");

  return (
    <>
      <Box w={"100%"}>
        <Progress
          bgColor={"#D9D9D9"}
          size="xs"
          isAnimated={true}
          value={progress}
        />
      </Box>
      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        pos={"relative"}
        maxW={"390px"}
        padding={"60px 22px"}
        alignItems={"center"}
      >
        {funnel === "userAgreement" && (
          <UserAgreementForm setFunnel={setFunnel} setProgress={setProgress} />
        )}
        {funnel === "userInfo" && (
          <UserInfoForm
            setFunnel={setFunnel}
            setProgress={setProgress}
            setUserInfo={setUserInfo}
          />
        )}
        {funnel === "userPhysics" && <UserPhysicForm userInfo={userInfo} />}
      </Flex>
    </>
  );
};

export default SignupTemplate;
