import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUserDiet } from "../api/AxiosSetting";

const useGetUserDietInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userDiet"],
    queryFn: () => getUserDiet(),
  });

  return { userDietInfo: data, isLoading };
};

export default useGetUserDietInfo;
