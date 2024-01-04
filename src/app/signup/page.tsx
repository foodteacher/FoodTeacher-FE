import React from "react";
import { redirect } from "next/navigation";
import SignupTemplate from "../../../component/template/SignupTemplate";
import { instacne, postKakaoCode } from "../../../utils/api/AxiosSetting";

export interface JwtTokenType {
  access_token: string;
  token_type: string;
}

const Page = async ({
  searchParams,
}: {
  searchParams: { code: string; error: string };
}) => {
  const kakaoCode = searchParams.code;

  // const errorCode = searchParams.error;

  let jwtToken;

  if (kakaoCode) {
    jwtToken = await postKakaoCode(kakaoCode);
  } else {
    null;
  }

  console.log(jwtToken);

  return <SignupTemplate jwtToken={jwtToken} />;
};

export default Page;
