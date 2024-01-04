"use client";
import { useRouter } from "next/navigation";
import React from "react";

const OauthTemplate = ({ jwtToken }: { jwtToken: string }) => {
  useRouter().replace("/signup");
  return (
    <div>
      loading....
      <p>{jwtToken}</p>
    </div>
  );
};

export default OauthTemplate;
