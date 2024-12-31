import { useMutation } from "@tanstack/react-query"
import { auth } from "../../../../api/auth"
import { useNavigate } from "@tanstack/react-router"
import { user } from "../../../../api/user"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
interface TMutationVariables {
  email: string
  password: string
  username: string
  displayName: string
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
function _useMutation() {
  const navigate = useNavigate()

  async function mutationFn({ email, password, username, displayName }: TMutationVariables) {
    const { data: userData } = await auth.POST.signup(email, password)
    if (userData) {
      return await user.POST.create({ username, display_name: displayName })
    } else {
      throw new Error("Failed to create user")
    }
  }

  return useMutation({
    mutationFn,
    onSuccess: () => {
      navigate({ to: "/" })
    },
  })
}

/******************************************************************
 *  COMPONENT END                                                 *
 ******************************************************************/
export const signupUser = Object.freeze({
  useMutation: _useMutation,
})
