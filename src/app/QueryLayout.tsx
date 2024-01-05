"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useEffect, useState } from "react";

export default function QueryLayout({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
          },
          mutations: {
            retry: false,
          },
        },
      })
  );

  // const jwt = localStorage.getItem("jwt");

  // const { data } = useUser();

  // useEffect(() => {}, [jwt]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {<ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}
