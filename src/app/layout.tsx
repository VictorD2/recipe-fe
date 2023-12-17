"use client";

import "react-toastify/dist/ReactToastify.css";
import "remixicon/fonts/remixicon.css";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/shared/contexts/GlobalProvider";
import Container from "@/ui/Container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <html lang="es">
      <QueryClientProvider client={queryClient}>
        <GlobalProvider>
          <Container as="body">
            <ToastContainer />
            {children}
          </Container>
        </GlobalProvider>
      </QueryClientProvider>
    </html>
  );
}
