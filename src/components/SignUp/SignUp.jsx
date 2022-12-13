import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from "@mantine/core";

import { auth } from "../../utils/firebase";

const SignUp = ({ signUpModalState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      signUpModalState(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome to bikrr
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@email.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button fullWidth mt="xl" onClick={handleSignUp}>
          Sign up
        </Button>
      </Paper>
    </Container>
  );
};

export default SignUp;
