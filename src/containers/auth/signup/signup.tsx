import { Button, Card, Container, Flex, Group, Stack, Text, TextInput, Title } from "@mantine/core"
import "./_signup.css"
import { Link } from "@tanstack/react-router"
import { useForm } from "react-hook-form"
import { auth } from "../../../api/auth"
import { user } from "../../../api/user"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Signup() {
  /**********  HOOKS  **********/
  const methods = useForm()

  /********  FUNCTIONS  ********/
  async function handleSubmit(data: any) {
    console.log(data)
    //auth.POST.signup(data.email, data.password)
    const response = await user.POST.create({ username: data.username, display_name: data.display_name })
    console.log(response)
  }

  /*********  RENDER  *********/
  return (
    <div className="Signup">
      <Stack justify="center" align="center" h="100vh">
        <Card shadow="md" padding="xl">
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <Flex direction="column" gap="lg">
              <Title order={1} ta="center">
                Sign Up
              </Title>

              <TextInput label="Email" placeholder="john.smith@example.com" {...methods.register("email")} />

              <Group>
                <TextInput
                  label="Username"
                  description="Must be unique. Cannot be changed"
                  placeholder="johnsmith123"
                  {...methods.register("username")}
                />
                <TextInput
                  label="Display Name"
                  description="What you wished to be called. Can be changed anytime"
                  placeholder="John Smith"
                  {...methods.register("display_name")}
                />
              </Group>
              <Group grow>
                <TextInput label="Password" type="password" {...methods.register("password")} />
                <TextInput label="Repeat Password" type="password" />
              </Group>

              <Button type="submit">Sign Up</Button>
              <Text size="sm" c="gray">
                Already have an account?{" "}
                <Link to="/login">
                  <Text span c="blue">
                    Login Here
                  </Text>
                </Link>
              </Text>
            </Flex>
          </form>
        </Card>
        <Text>Google, Facebook, etc. Signup coming soon.</Text>
      </Stack>
    </div>
  )
}
