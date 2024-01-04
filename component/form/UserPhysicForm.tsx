import React from "react";
import MainButton from "../button/MainButton";
import {
  Box,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { UserInfoType } from "../template/SignupTemplate";
import { usePostUserInfo } from "../../utils/hooks/usePostUserInfo";

interface UserPhysicsFormPropsType {
  userInfo: UserInfoType;
}
interface PhysicsFormType {
  age: string;
  height: string;
  weight: string;
  targetWeight: string;
}

const UserPhysicForm = ({ userInfo }: UserPhysicsFormPropsType) => {
  const router = useRouter();

  const path = usePathname();

  const { postUserInfoMutation, isLoading, data: userId } = usePostUserInfo();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PhysicsFormType>();

  const onSubmit: SubmitHandler<PhysicsFormType> = async (data) => {
    const newUserInfo: UserInfoType = {
      name: userInfo.name,
      gender: userInfo.gender,
      age: parseInt(data.age),
      height: parseInt(data.height),
      weight: parseInt(data.weight),
      target_weight: parseInt(data.targetWeight),
    };

    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      await postUserInfoMutation(newUserInfo);
    } else {
      localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
    }

    router.push("/main");
  };

  const formErr = Object.keys(errors).length ? true : false;

  return (
    <>
      <Box as="section" alignSelf={"flex-start"}>
        <Heading
          as={"h1"}
          color={"#000000"}
          fontSize={"24px"}
          fontWeight={"semibold"}
        >
          신체정보를 입력해주세요
        </Heading>
        <Text as={"h2"} color={"#787878"} fontSize={"17px"} lineHeight={2}>
          개인 맞춤으로 알려드려요
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
            나이
          </FormLabel>
          <InputGroup>
            <InputLeftElement color={"#C6C6C6"} h={"48px"}>
              만
            </InputLeftElement>
            <Input
              {...register("age", { required: true })}
              focusBorderColor={"#00C27C"}
              color={"#00C27C"}
              type="number"
              h={"48px"}
            />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              세
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            키
          </FormLabel>
          <InputGroup>
            <Input
              {...register("height", { required: true })}
              type="number"
              h={"48px"}
              focusBorderColor={"#00C27C"}
              color={"#00C27C"}
            />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              cm
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            체중
          </FormLabel>
          <InputGroup>
            <Input
              {...register("weight", { required: true })}
              type="number"
              h={"48px"}
              focusBorderColor={"#00C27C"}
              color={"#00C27C"}
            />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              kg
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel fontSize={"15px"} color={"#5C5C5C"}>
            목표 체중
          </FormLabel>
          <InputGroup>
            <Input
              {...register("targetWeight", { required: true })}
              type="number"
              h={"48px"}
              focusBorderColor={"#00C27C"}
              color={"#00C27C"}
            />
            <InputRightElement color={"#C6C6C6"} h={"48px"}>
              kg
            </InputRightElement>
          </InputGroup>
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
            isLoading={isLoading}
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
            isDisabled={formErr}
          >
            다음으로
          </MainButton>
        </ButtonGroup>
      </HStack>
    </>
  );
};

export default UserPhysicForm;
