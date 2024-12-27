import * as React from "react"
import { createFileRoute } from "@tanstack/react-router"
import { Dashboard } from "../containers/dashboard"

export const Route = createFileRoute("/")({
  component: Dashboard,
})
