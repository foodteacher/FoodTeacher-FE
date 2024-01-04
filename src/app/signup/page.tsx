import React from "react";
import SignupTemplate from "../../../component/template/SignupTemplate";
import { postKakaoCode } from "../../../utils/api/AxiosSetting";

export interface JwtTokenType {
  access_token: string;
  token_type: string;
}

const Page = async ({
  searchParams,
}: {
  searchParams: { code: string; error: string };
}) => {
  // const kakaoCode = searchParams.code;

  // let jwtToken;

  // if (kakaoCode) {
  //   jwtToken = await postKakaoCode(kakaoCode);
  // }

  return <SignupTemplate />;
};

export default Page;
