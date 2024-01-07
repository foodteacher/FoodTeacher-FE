import { useQuery } from "@tanstack/react-query";

import { getUser } from "../api/AxiosSetting";

export interface LoginUserType {
  id: number;
  kakao_id: number;
  name: string;
  height: number;
  weight: number;
  age: number;
  gender: string;
  target_weight: number;
  kakao_access_token: string;
  kakao_refresh_token: string;
  jwt_refresh_token: string;
}

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    retry: false,
  });

  return { data, isLoading };
};
