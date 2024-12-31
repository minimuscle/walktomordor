import { createFileRoute } from "@tanstack/react-router"
import { auth } from "../../api/auth"

export const Route = createFileRoute("/_auth/logout")({
  loader: async () => {
    await auth.POST.logout()
    return { redirect: "/" }
  },
})
