import { Button, Card, Container, Flex, Text, TextInput, Title } from "@mantine/core"
import "./_login.css"
import { Link, redirect, useNavigate } from "@tanstack/react-router"
import { FieldValues, useForm } from "react-hook-form"
import { auth } from "../../../api/auth"
import { loginUser } from "./queries/loginUser"
/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Login() {
  /**********  HOOKS  **********/
  const methods = useForm()
  const { mutate: mutateLoginUser } = loginUser.useMutation()

  /********  FUNCTIONS  ********/
  //TODO: Add zod for validation
  function handleSubmit(data: any) {
    mutateLoginUser(data)
  }

  /*********  RENDER  *********/
  return (
    <div className="Login">
      <Flex justify="center" align="center" h="100vh">
        <Card shadow="md" padding="xl" className="Card">
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <Flex direction="column" gap="lg">
              <Title order={1} ta="center">
                Login
              </Title>

              <TextInput label="Email" placeholder="john.smith@example.com" {...methods.register("email")} />
              <TextInput label="Password" type="password" {...methods.register("password")} />

              <Button type="submit">Login</Button>
              <Text size="sm" c="gray">
                Don't have an account?{" "}
                <Link to="/signup">
                  <Text span c="blue">
                    Sign Up Here
                  </Text>
                </Link>
              </Text>
            </Flex>
          </form>
        </Card>
      </Flex>
    </div>
  )
}
