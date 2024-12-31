import { Burger, Divider, Drawer, Group, Stack, Text } from "@mantine/core"
import "./_app.css"
import { Link, Outlet } from "@tanstack/react-router"
import { useDisclosure } from "@mantine/hooks"
import { getUserData } from "./queries/getUserData"
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function App() {
  /**********  HOOKS  **********/
  const [opened, { toggle, close }] = useDisclosure(false)
  const { data: user_profile } = getUserData.useQuery()

  /**********  CONSTS  **********/
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/history",
      label: "Your History",
    },
    {
      to: "/user/$userId",
      label: "Account",
      params: user_profile?.username,
    },
    {
      to: "/logout",
      label: "Logout",
    },
  ]

  /*********  RENDER  *********/
  return (
    <div className="App">
      <Group justify="flex-end">
        <Burger opened={opened} onClick={toggle} className="Menu" />
      </Group>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} position="right">
        <Stack>
          {links.map((link) => (
            <Link to={link.to} key={link.label} params={{ userId: link.params }} onClick={close}>
              <Text>{link.label}</Text>
            </Link>
          ))}
        </Stack>
      </Drawer>
      <Outlet />
    </div>
  )
}
