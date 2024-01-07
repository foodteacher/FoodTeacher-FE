import { useMutation } from "@tanstack/react-query";
import { postLogout } from "../api/AxiosSetting";

export const useLogout = () => {
  const { mutateAsync: logoutMutation, isLoading } = useMutation({
    mutationFn: () => postLogout(),
    onError: () => {},
    onSuccess: () => {},
  });

  return { logoutMutation, isLoading };
};
