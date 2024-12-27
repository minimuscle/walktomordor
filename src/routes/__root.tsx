import * as React from "react"
import { Link, Outlet, createRootRoute, redirect } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { auth } from "../api/auth"
import { MantineProvider } from "@mantine/core"

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

function RootComponent() {
  return (
    <>
      <MantineProvider>
        <Outlet />
      </MantineProvider>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
