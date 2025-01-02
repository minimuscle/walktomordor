import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Outlet />
      </MantineProvider>
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
