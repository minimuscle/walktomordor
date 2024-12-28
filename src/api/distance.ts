import { API, supabase } from "../utils/supabase"
import { Distance } from "./types"

export const distance = {
  GET: {
    latest: async (distance: number, distance_type: "Miles" | "Kilometres"): Promise<Distance.Fellowship> => {
      const { data } = await supabase
        .from("fellowship")
        .select("*")
        .lte(distance_type, distance)
        .order(distance_type, { ascending: false })
        .limit(1)
      return data?.[0]
    },
  },
}
