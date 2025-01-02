import { Burger, Drawer, Group, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet, ToOptions } from "@tanstack/react-router";
import "./_public.css";
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Public() {
  /**********  HOOKS  **********/
  const [opened, { toggle, close }] = useDisclosure(false);

  /**********  CONSTS  **********/
  const links: Array<{ to: ToOptions["to"]; label: string }> = [
    {
      to: "/login",
      label: "Login",
    },
  ];

  /*********  RENDER  *********/
  return (
    <div className="Public">
      <Group justify="flex-end">
        <Burger opened={opened} onClick={toggle} className="Menu" />
      </Group>
      <Drawer
        offset={8}
        radius="md"
        opened={opened}
        onClose={close}
        position="right"
      >
        <Stack>
          {links.map((link) => (
            <Link to={link.to} key={link.label} onClick={close}>
              <Text>{link.label}</Text>
            </Link>
          ))}
        </Stack>
      </Drawer>
      <Outlet />
    </div>
  );
}
