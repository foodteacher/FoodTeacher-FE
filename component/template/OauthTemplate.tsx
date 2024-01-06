"use client";
import { useRouter } from "next/navigation";
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
  return <div>loading....</div>;
};

export default OauthTemplate;
