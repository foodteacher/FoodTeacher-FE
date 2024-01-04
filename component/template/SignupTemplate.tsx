"use client";

import { Flex, Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useFunnel } from "../../utils/hooks/useFunnel";
import UserAgreementForm from "../form/UserAgreementForm";
import UserInfoForm from "../form/UserInfoForm";
import UserPhysicForm from "../form/UserPhysicForm";
import { JwtTokenType } from "@/app/signup/page";

export interface UserInfoType {
  name: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
  target_weight: number;
}

const SignupTemplate = ({ jwtToken }: { jwtToken?: JwtTokenType }) => {
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

  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem("jwt", jwtToken.access_token);
    } else {
      return;
    }
  }, [jwtToken]);

  return (
    <>
      <Progress
        bgColor={"#D9D9D9"}
        // colorScheme="black"
        size="xs"
        isAnimated={true}
        value={progress}
      />

      <Flex
        flexDir={"column"}
        w={"100%"}
        h={"100vh"}
        pos={"relative"}
        maxW={"390px"}
        padding={"60px 22px"}
        margin={"0 auto"}
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
