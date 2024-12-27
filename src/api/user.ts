import { API, supabase } from "../utils/supabase"

export const user = {
  GET: {
    user: async () => {
      const { data } = await supabase.auth.getSession()
      return data.session?.user
    },
  },
  POST: {
    create: async ({ username, display_name }: { username: string; display_name: string }) => {
      const session = await user.GET.user()
      if (!session) {
        throw new Error("User session not found")
      }
      const { id } = session

      return API(supabase.from("users").insert([{ id, username, display_name }]))
    },
  },
}
