"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useUser } from "../../utils/hooks/useUser";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

const OauthTemplate = ({ jwtToken }: { jwtToken: string }) => {
  const { userData, isLoading, isLoggedIn } = useUser();
  const toast = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();

  useEffect(() => {
    const routingHandler = async () => {
      if (jwtToken) {
        localStorage.setItem("accessToken", jwtToken);
        if (!isLoading) {
          await queryClient.invalidateQueries(["user"]);
          if (isLoggedIn) {
            if (userData?.name) {
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
  }, [jwtToken, router, userData, isLoading, isLoggedIn, queryClient, toast]);

  return <div>loading....</div>;
};

export default OauthTemplate;
