import axios from "axios";
import OauthTemplate from "../../../component/template/OauthTemplate";
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
  const kakaoCode = searchParams.code;

  let jwtToken;

  if (kakaoCode) {
    jwtToken = await postKakaoCode(kakaoCode);
  }

  return <OauthTemplate jwtToken={jwtToken.access_token} />;
};

export default Page;
