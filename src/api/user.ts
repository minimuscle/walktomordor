import { API, supabase } from "../utils/supabase"
import { User } from "./types"

async function getId() {
  const session = await user.GET.user()
  if (!session) {
    throw new Error("User session not found")
  }
  return session.id
}

export const user = {
  GET: {
    user: async () => {
      const { data } = await supabase.auth.getSession()
      return data.session?.user
    },
    userProfile: async (): Promise<User.UserProfile> => {
      const { data } = await supabase.from("users").select().single()
      return data
    },
  },
  POST: {
    create: async ({ username, display_name }: { username: string; display_name: string }) => {
      const id = getId()

      return API(supabase.from("users").insert([{ id, username, display_name }]))
    },
  },
}
