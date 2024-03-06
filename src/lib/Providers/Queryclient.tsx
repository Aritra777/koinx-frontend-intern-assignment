// Query client provider for react-query
'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const QueryClientProviderWrapper = ({ children }: any) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};