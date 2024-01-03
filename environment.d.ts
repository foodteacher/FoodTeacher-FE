declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_DEV_BASE_URL: string;
      NEXT_PUBLIC_DEPLOY_BASE_URL: string;
      NEXT_PUBLIC_KAKAO_REST_KEY: string;

      NODE_ENV: "development" | "production";
    }
  }
}

declare module "*.png";

export {};
