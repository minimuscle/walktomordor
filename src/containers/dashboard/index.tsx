import { Burger, Button, Divider, Drawer, Flex, Group, Menu, NavLink, Stack, Text, Title } from "@mantine/core"
import "./_dashboard.css"
import { Link } from "@tanstack/react-router"
import { useDisclosure } from "@mantine/hooks"
import Hobbit from "../../assets/images/Hobbit.png"
import { getUserData } from "./queries/getUserData"
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
    distance_type: getDistanceType(),
  })

  function getDistanceType(): "Kilometres" | "Miles" | undefined {
    if (!user_profile) return
    return (user_profile.distance_type.charAt(0).toUpperCase() + user_profile.distance_type.slice(1) + "s") as
      | "Kilometres"
      | "Miles"
  }

  /*********  RENDER  *********/
  return (
    <div className="Dashboard">
      <Group justify="flex-end">
        <Burger opened={opened} onClick={toggle} className="Menu" />
      </Group>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} position="right">
        <Stack>
          <Link to="/">
            <Text size="lg">Home</Text>
          </Link>
          <Link to="/">
            <Text size="lg">About</Text>
          </Link>
          <Link to="/">
            <Text size="lg">Your History</Text>
          </Link>
          <Link to="/">
            <Text size="lg">Account</Text>
          </Link>
          <Divider />
          <Link to="/logout">
            <Text size="lg">Logout</Text>
          </Link>
        </Stack>
      </Drawer>

      <Stack align="center" ta="center">
        <Title order={1}>Walk to Mount Doom</Title>
        <Text size="xl">Current Location:</Text>
        <Title order={2}>{fellowship?.Location}</Title>
        <img src={Hobbit} alt="Hobbit" className="Image" />
        <Text size="xl">Distance Travelled:</Text>
        {user_profile && (
          <Title order={2}>
            {user_profile.distance} {getDistanceType()}
          </Title>
        )}
        <Text size="xl">{fellowship?.Note}</Text>
        <Button>Update Distance</Button>
      </Stack>
    </div>
  )
}
