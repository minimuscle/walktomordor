import { createFileRoute } from "@tanstack/react-router"
import { Login } from "../../containers/auth/login/login"

export const Route = createFileRoute("/_auth/login")({
  component: Login,
})
