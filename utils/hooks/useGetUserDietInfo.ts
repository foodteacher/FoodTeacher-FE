import { useQuery } from "@tanstack/react-query";
import { DietResponse, getUserDiet } from "../api/AxiosSetting";

interface UseGetUserDietInfoType {
  userDietInfo: DietResponse | undefined;
  isLoading: boolean;
}

const useGetUserDietInfo = (): UseGetUserDietInfoType => {
  const { data, isLoading } = useQuery<DietResponse>({
    queryKey: ["userDiet"],
    queryFn: () => getUserDiet(),
  });

  return { userDietInfo: data, isLoading };
};

export default useGetUserDietInfo;
