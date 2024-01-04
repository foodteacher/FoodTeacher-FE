"use client";
import {
  Box,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Text,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import MainInput from "../input/MainInput";
import MainButton from "../button/MainButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserInfoType } from "../template/SignupTemplate";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w={"100%"} textAlign={"center"}>
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius={"12px"}
        border={"1px solid #BCBCBC"}
        fontSize={"15px"}
        fontWeight={"semibold"}
        color={"#C6C6C6"}
        _hover={{
          bgColor: "#00CE8440",
          color: "#FFFFFF",
          borderColor: "transparent",
        }}
        _checked={{
          bg: "#00CE84",
          color: "white",
          borderColor: "transparent",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

interface UserInfoFormPropsType {
  setFunnel: React.Dispatch<React.SetStateAction<string>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>;
}

const UserInfoForm = ({
  setFunnel,
  setProgress,
  setUserInfo,
}: UserInfoFormPropsType) => {
  const options = ["남성", "여성"];

  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "gender",
  });

  interface SignUpFormType {
    name: string;
  }

  const { handleSubmit, register } = useForm<SignUpFormType>();

  const onSubmit: SubmitHandler<SignUpFormType> = (data) => {
    const newUserInfo: UserInfoType = {
      name: data.name,
      gender: value as string,
      age: 0,
      height: 0,
      weight: 0,
      target_weight: 0,
    };

    setUserInfo(newUserInfo);
    setFunnel("userPhysics");
    setProgress((oldState) => oldState + 33.3);
  };

  const group = getRootProps();

  return (
    <>
      <Box as="section" alignSelf={"flex-start"}>
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
        >
          기본정보를 입력해주세요
        </Heading>
        <Text as={"h2"} color={"#787878"} fontSize={"17px"} lineHeight={2}>
          성별에 맞는 대사량기준으로 알려드려요
        </Text>
      </Box>
      <HStack
        as={"form"}
        onSubmit={handleSubmit(onSubmit)}
        flexDir={"column"}
        w={"100%"}
        spacing={5}
        padding={"30px 0"}
      >
        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            이름
          </FormLabel>
          <MainInput
            register={{ ...register("name", { required: true }) }}
            placeholder="이름을 입력해주세요."
            w={"100%"}
            h={"48px"}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            성별
          </FormLabel>
          <HStack {...group}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
        </FormControl>
        <ButtonGroup
          width={"100%"}
          pos={"absolute"}
          bottom={"30px"}
          padding={"0 22px"}
          margin={"0 auto"}
          justifyContent={"center"}
        >
          <MainButton
            w={"100%"}
            h={"52px"}
            _disabled={{
              bgColor: "#D2D2D2",
              color: "#FFFFFF",
            }}
            _hover={{
              bgColor: "#2B2C2C30",
              color: "#FFFFFF",
            }}
            bgColor={"#2B2C2C"}
            type="submit"
            isDisabled={value === ""}
          >
            다음으로
          </MainButton>
        </ButtonGroup>
      </HStack>
    </>
  );
};
export default UserInfoForm;
