import { Burger, Divider, Drawer, Flex, Group, Menu, NavLink, Stack, Text } from "@mantine/core"
import "./_dashboard.css"
import { Link } from "@tanstack/react-router"
import { useDisclosure } from "@mantine/hooks"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Dashboard() {
  /**********  HOOKS  **********/
  const [opened, { toggle, close }] = useDisclosure()

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
          <Link to="/">
            <Text size="lg">Logout</Text>
          </Link>
        </Stack>
      </Drawer>
    </div>
  )
}
