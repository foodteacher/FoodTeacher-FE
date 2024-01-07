"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useUser } from "../../utils/hooks/useUser";

const OauthTemplate = ({ jwtToken }: { jwtToken: string }) => {
  const { userData, isLoading, isLoggedIn, refetch } = useUser();

  const router = useRouter();
  useEffect(() => {
    const routingHandler = async () => {
      if (jwtToken) {
        localStorage.setItem("accessToken", jwtToken);
        if (!isLoading) {
          if (isLoggedIn) {
            await refetch();
            console.log(userData);
          }
        }
      } else {
        return;
      }
    };
    routingHandler();
  }, [jwtToken, router, userData, isLoading, isLoggedIn, refetch]);

  return <div>loading....</div>;
};

export default OauthTemplate;
