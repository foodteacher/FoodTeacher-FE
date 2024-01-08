"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useUser } from "../../utils/hooks/useUser";
import { useQueryClient } from "@tanstack/react-query";

const OauthTemplate = ({ jwtToken }: { jwtToken: string }) => {
  const { userData, isLoading, isLoggedIn } = useUser();

  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const routingHandler = async () => {
      if (jwtToken) {
        localStorage.setItem("accessToken", jwtToken);
        console.log(isLoading, isLoggedIn);
        if (!isLoading) {
          await queryClient.invalidateQueries(["user"]);
          if (isLoggedIn) {
            console.log(2);
            console.log(userData);

            if (userData) {
              router.push("/main");
            } else {
              router.push("/signup");
            }
          }
        }
      } else {
        return router.push("/signup");
      }
    };
    routingHandler();
  }, [jwtToken, router, userData, isLoading, isLoggedIn, queryClient]);

  return <div>loading....</div>;
};

export default OauthTemplate;
