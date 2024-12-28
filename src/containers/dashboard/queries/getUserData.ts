import { useQuery } from "@tanstack/react-query"
import { user } from "../../../api/user"

const _useQuery = () => {
  return useQuery({
    queryKey: ["getUserData"],
    queryFn: () => user.GET.userProfile(),
  })
}

export const getUserData = Object.freeze({
  useQuery: _useQuery,
})
