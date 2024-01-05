"use client";
import { JwtTokenType } from "@/app/signup/page";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useEffect } from "react";

const OauthTemplate = ({ jwtToken }: { jwtToken: string }) => {
  const router = useRouter();
  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem("accessToken", jwtToken);

      router.replace("/signup");
    } else {
      return;
    }
  }, [jwtToken, router]);
  return (
    <div>
      loading....
      {/* <p>{jwtToken}</p> */}
    </div>
  );
};

export default OauthTemplate;
