import { createFileRoute, redirect } from "@tanstack/react-router";
import { App } from "../containers/app";
import { auth } from "../api/auth";

export const Route = createFileRoute("/_app")({
  //Check if user is authenticated
  beforeLoad: async () => {
    const res = await auth.GET.session();
    if (
      !res &&
      window.location.pathname !== "/login" &&
      window.location.pathname !== "/signup"
    ) {
      throw redirect({ to: "/login" });
      // } else if (res && (window.location.pathname === "/login" || window.location.pathname === "/signup")) {
      //   throw redirect({ to: "/" })
      // }
    }
  },
  component: App,
});
