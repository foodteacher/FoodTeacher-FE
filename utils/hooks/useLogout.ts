import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postLogout } from "../api/AxiosSetting";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutateAsync: logoutMutation, isLoading } = useMutation({
    mutationFn: () => postLogout(),
    onError: () => {},
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      queryClient.removeQueries({ queryKey: ["user"] });
      router.push("/");
    },
  });

  return { logoutMutation, isLoading };
};
