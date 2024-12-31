import { Burger, Button, Divider, Drawer, Flex, Group, Menu, NavLink, Stack, Text, Title } from "@mantine/core"
import "./_dashboard.css"
import { Link } from "@tanstack/react-router"
import { useDisclosure } from "@mantine/hooks"
import Hobbit from "../../assets/images/Hobbit.png"
import { getUserData } from "../app/queries/getUserData"
import { getFellowship } from "./queries/getFellowship"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Dashboard() {
  /**********  HOOKS  **********/
  const [opened, { toggle, close }] = useDisclosure()
  const { data: user_profile } = getUserData.useQuery()
  const { data: fellowship } = getFellowship.useQuery({
    distanceData: user_profile?.distance,
    distance_type: user_profile?.distance_type,
  })

  /*********  RENDER  *********/
  return (
    <Stack align="center" ta="center" className="Dashboard">
      <Title order={1}>Walk to Mount Doom</Title>
      <Text size="xl">Current Location:</Text>
      <Title order={2}>{fellowship?.Location}</Title>
      <img src={Hobbit} alt="Hobbit" className="Image" />
      <Text size="xl">Distance Travelled:</Text>
      {user_profile && (
        <Title order={2}>
          {user_profile.distance} {user_profile.distance_type === "kilometre" ? "km" : "mi"}
        </Title>
      )}
      <Text size="xl">{fellowship?.Note}</Text>
      <Button>Update Distance</Button>
    </Stack>
  )
}
