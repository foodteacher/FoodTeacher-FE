import axios from "axios";
import { UserInfoType } from "../../component/template/SignupTemplate";
import { redirect } from "next/navigation";
import { UserPostDietData } from "@/app/main/page";
import { LoginUserType } from "../hooks/useUser";

export const instacne = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // "https://api.foodteacher.xyz/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface DietResponse {
  아침: number;
  점심: number;
  저녁: number;
  초과칼로리: number;
  운동필요시간: string;
  잔소리: string;
}

export const getUserInform = async () => {
  const res = await instacne.get("");
  console.log(res);
};

export const getUserInfo = async () => {
  const userId = localStorage.getItem(`userId`);
  const res = await instacne.get(`/users/${userId}`);
  return res;
};

export const getUserBmr = async () => {
  const userId = localStorage.getItem(`userId`);
  const res = await instacne.get(`/users/${userId}/bmr`);
  return res;
};

// export const postUserDiet = async (postDietData: UserPostDietData) => {
//   const res = await instacne.post(`/users/diet-exercise-advice`, postDietData);
//   const data: DietResponse = await res.data;
//   return data;
// };

/**v2 */

export const postKakaoCode = async (code: string) => {
  try {
    const res = await instacne.post(`/login`, { code });
    return res.data;
  } catch (err) {
    console.log(err);
    return redirect("/");
  }
};

export const registerUser = async (userInfo: UserInfoType) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.patch("/users/register", userInfo, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};

export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.get(`/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data: LoginUserType = await res.data;
  return data;
};

export const postUserDiet = async (postDietData: UserPostDietData) => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.post(`/gpt/diet-exercise-advice`, postDietData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data: DietResponse = await res.data;
  return data;
};

export const postLogout = async () => {
  const accessToken = localStorage.getItem("accessToken");
  const res = await instacne.post(`/logout`, "", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
