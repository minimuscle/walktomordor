import { createFileRoute } from "@tanstack/react-router";
import { Public } from "../containers/public";

export const Route = createFileRoute("/_public")({
  component: Public,
});
