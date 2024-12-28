import * as React from "react"
import { Link, Outlet, createRootRoute, redirect } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { auth } from "../api/auth"
import { MantineProvider } from "@mantine/core"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const Route = createRootRoute({
  //Check if user is authenticated
  beforeLoad: async () => {
    const res = await auth.GET.session()
    if (!res && window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
      throw redirect({ to: "/login" })
      // } else if (res && (window.location.pathname === "/login" || window.location.pathname === "/signup")) {
      //   throw redirect({ to: "/" })
      // }
    }
  },
  component: RootComponent,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Outlet />
      </MantineProvider>
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
