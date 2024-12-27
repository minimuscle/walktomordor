import { createFileRoute } from "@tanstack/react-router"
import { Signup } from "../../containers/auth/signup/signup"

export const Route = createFileRoute("/_auth/signup")({
  component: Signup,
})
