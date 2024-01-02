"use client";

import { useEffect, useState } from "react";
import { UserInfoType } from "../../../component/template/SignupTemplate";
import MyPageTemplate from "../../../component/template/MyPageTemplate";

const Page = () => {
  // const [userData, setUserData] = useState<UserInfoType>();

  // useEffect(() => {
  //   let userInfo = localStorage.getItem("userInfo");
  //   if (userInfo !== null) {
  //     const userParsing: UserInfoType = JSON.parse(userInfo);
  //     setUserData(userParsing);
  //   }
  // }, [setUserData]);

  return <MyPageTemplate />;
};

export default Page;
