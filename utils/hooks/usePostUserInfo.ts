import { useMutation } from "@tanstack/react-query";
import { UserInfoType } from "../../component/template/SignupTemplate";
import { registerUser } from "../api/AxiosSetting";

export const usePostUserInfo = () => {
  const {
    data,
    mutateAsync: postUserInfoMutation,
    isLoading,
  } = useMutation({
    mutationFn: (userInfo: UserInfoType) => registerUser(userInfo),
    onError: () => {},
    onSuccess: () => {},
  });

  return { data, postUserInfoMutation, isLoading };
};
