import { useQuery } from "@tanstack/react-query";

import { getUser } from "../api/AxiosSetting";

export interface BaseUserType {
  name: string;
  height: number;
  weight: number;
  target_weight: number;
  age: number;
  gender: string;
}
export interface LoginUserType extends BaseUserType {
  id: number;
  kakao_id: number;

  kakao_access_token: string;
  kakao_refresh_token: string;
  jwt_refresh_token: string;
}

export interface UserDietInfoType extends BaseUserType {
  breakfast: {
    additionalProp1: 0;
    additionalProp2: 0;
    additionalProp3: 0;
  };
  lunch: {
    additionalProp1: 0;
    additionalProp2: 0;
    additionalProp3: 0;
  };
  dinner: {
    additionalProp1: 0;
    additionalProp2: 0;
    additionalProp3: 0;
  };
  advice: "string";
  recommended_exercise: "string";
}

export const useUser = () => {
  const {
    data: userData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    retry: false,
  });

  return { userData, isLoading, isLoggedIn: !isError, refetch };
};
