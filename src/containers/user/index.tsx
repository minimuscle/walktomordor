import { Container, Group, Space, Text, Title } from "@mantine/core"
import { getUserData } from "../app/queries/getUserData"
import { getFellowship } from "../dashboard/queries/getFellowship"
import { mordor_distance, mordor_distance_miles } from "../../utils/config"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function User() {
  /**********  HOOKS  **********/
  const { data: user_profile } = getUserData.useQuery()
  const { data: fellowship } = getFellowship.useQuery({
    distanceData: user_profile?.distance,
    distance_type: user_profile?.distance_type,
  })
  /*********  RENDER  *********/
  if (!user_profile) return
  return (
    <Container>
      <Text size="lg">User Profile</Text>
      <Group align="baseline">
        <Title order={1}>{user_profile.display_name}</Title>
        <Text>({user_profile.username})</Text>
      </Group>
      <Space h="lg" />
      <Text>Distance Travelled:</Text>
      <Text fw={700}>
        {user_profile.distance}
        {user_profile.distance_type === "kilometre" ? "km" : "mi"}
      </Text>
      <Space h="lg" />
      <Text>Current Location</Text>
      <Text fw={700}>{fellowship?.Location}</Text>
      <Space h="lg" />
      <Text>Distance Left:</Text>
      <Text fw={700}>
        {user_profile.distance_type === "kilometre"
          ? mordor_distance - user_profile.distance
          : mordor_distance_miles - user_profile.distance}
        {user_profile.distance_type === "kilometre" ? "km" : "mi"}
      </Text>
    </Container>
  )
}
