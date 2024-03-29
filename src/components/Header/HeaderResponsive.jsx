import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Burger,
  createStyles,
  Container,
  Group,
  Header,
  Modal,
  Paper,
  Text,
  Title,
  Transition,
  ThemeIcon,
} from "@mantine/core";
import { signOut } from "firebase/auth";

import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { auth } from "../../utils/firebase";

import { useDisclosure } from "@mantine/hooks";
import { IconBrandStackshare } from "@tabler/icons";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 10,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderResponsive({ links, user }) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();
  const [signUpModalOpened, setSignUpModalOpened] = useState(false);
  const [loginModalOpened, setLoginModalOpened] = useState(false);

  const handleSignUpModalState = (state) => {
    setSignUpModalOpened(state);
  };

  const handleLoginModalState = (state) => {
    setLoginModalOpened(state);
  };

  const handleLogOut = async () => {
    await signOut(auth);
  };

  let filteredLinks = [];

  if (user) {
    filteredLinks = links.filter(
      (link) => link.label !== "Sign up" && link.label !== "Log in"
    );
  }

  if (!user) {
    filteredLinks = links.filter(
      (link) => link.label !== "Log out" && link.label !== "Account"
    );
  }

  const items = filteredLinks.map((link) => {
    return (
      <Text
        key={link.label}
        component={Link}
        className={cx(classes.link)}
        to={link.link}
        onClick={(event) => {
          link.label === "Sign up" && setSignUpModalOpened(true);
          link.label === "Log in" && setLoginModalOpened(true);
          link.label === "Log out" && handleLogOut();
          close();
        }}
      >
        {link.label}
      </Text>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} mb={16} className={classes.root}>
      <Container className={classes.header} px={0}>
        <Group spacing="xs">
          <ThemeIcon color="indigo" component={Link} to="/">
            <IconBrandStackshare />
          </ThemeIcon>
          <Title
            order={2}
            component={Link}
            to="/"
            c="indigo"
            sx={{ fontFamily: "Greycliff CF, sans-serif" }}
          >
            bikrr
          </Title>
        </Group>

        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
      <Modal
        opened={signUpModalOpened}
        onClose={() => setSignUpModalOpened(false)}
      >
        <SignUp signUpModalState={handleSignUpModalState} />
      </Modal>
      <Modal
        opened={loginModalOpened}
        onClose={() => setLoginModalOpened(false)}
      >
        <Login
          loginModalState={handleLoginModalState}
          signUpModalState={handleSignUpModalState}
        />
      </Modal>
    </Header>
  );
}
