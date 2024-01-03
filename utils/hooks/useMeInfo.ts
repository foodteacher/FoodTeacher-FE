import { useQuery } from "@tanstack/react-query";

import { getUserInfo, getUserInform } from "../api/AxiosSetting";

export const useMeInfo = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUserInform(),
  });

  return { data, isLoading };
};
