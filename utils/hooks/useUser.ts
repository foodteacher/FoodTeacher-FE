import { useQuery } from "@tanstack/react-query";

import { getUser, getUserInfo } from "../api/AxiosSetting";

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
  });

  return { data, isLoading };
};
