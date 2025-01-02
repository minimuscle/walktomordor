import { createFileRoute } from "@tanstack/react-router";
import { User } from "../../containers/user";

export const Route = createFileRoute("/_public/user/$userId")({
  component: User,
});
