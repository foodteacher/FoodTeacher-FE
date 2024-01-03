import React from "react";
import { redirect } from "next/navigation";
import SignupTemplate from "../../../component/template/SignupTemplate";
import { instacne, postKakaoCode } from "../../../utils/api/AxiosSetting";

export interface JwtToken {
  jwt: string;
  token_type: string;
}

const Page = async ({
  searchParams,
}: {
  searchParams: { code: string; error: string };
}) => {
  const kakaoCode = searchParams.code;

  const errorCode = searchParams.error;

  if (kakaoCode) {
    const jwtToken: JwtToken = await postKakaoCode(kakaoCode);
    // const token = await instacne.post("/login", { code: kakaoCode });

    console.log(jwtToken);
  } else {
    null;
  }

  return <SignupTemplate />;
};

export default Page;
