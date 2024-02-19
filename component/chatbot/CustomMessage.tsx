import { Box, Text, VStack } from "@chakra-ui/react";
import SaladIcon from "../icon/SaladIcon";
import Lottie from "lottie-react";
import LoadingLotte from "../../utils/json/loading.json";

const CustomMessage = (props: any) => {
  const isLoading = props.payload.loading;

  console.log(isLoading);

  return (
    <>
      {!isLoading ? (
        <>로딩 끝</>
      ) : (
        <VStack>
          <SaladIcon />
          <Box w={"30%"}>
            <Lottie animationData={LoadingLotte} />
          </Box>
          <Text color={"#2F2F2F"} fontSize={"18px"} textAlign={"center"}>
            식선생이 오늘의
            <br />
            식사를 분석하고 있어요
          </Text>
        </VStack>
      )}
    </>
  );
};

export default CustomMessage;
