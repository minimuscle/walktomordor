import { createFileRoute } from "@tanstack/react-router"
import { Dashboard } from "../../containers/dashboard"

export const Route = createFileRoute("/_app/")({
  component: Dashboard,
})
