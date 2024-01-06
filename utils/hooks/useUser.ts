import { useQuery } from "@tanstack/react-query";

import { getUser } from "../api/AxiosSetting";

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(),
    retry: false,
  });

  return { data, isLoading };
};
