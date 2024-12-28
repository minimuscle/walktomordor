import { useQuery } from "@tanstack/react-query"
import { distance } from "../../../api/distance"

interface TQueryData {
  distanceData?: number
  distance_type?: "Kilometres" | "Miles"
}

const _useQuery = ({ distanceData = 0, distance_type = "Kilometres" }: TQueryData) => {
  return useQuery({
    queryKey: ["getUserData", distanceData, distance_type],
    queryFn: () => distance.GET.latest(distanceData, distance_type),
    enabled: Boolean(distanceData),
  })
}

export const getFellowship = Object.freeze({
  useQuery: _useQuery,
})
