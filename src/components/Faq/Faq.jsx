import {
  Container,
  Image,
  Title,
  Accordion,
  createStyles,
} from "@mantine/core";

import faqImg from "../../assets/images/faq.jpg";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    minHeight: 650,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const Faq = () => {
  const { classes } = useStyles();
  return (
    <Container size="md" className={classes.wrapper}>
      <Image
        radius="md"
        src={faqImg}
        alt="Girl riding bike"
        withPlaceholder
        pb={36}
      />

      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>What do I need to book a bike?</Accordion.Control>
          <Accordion.Panel>
            To book a bike in Canada, you must create a user account, be 23
            years old or older. When booking for the first time, you will go
            through a approval process. In most cases, you will be approved
            without delay and ready for a bike ride!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Cancelling your reservation</Accordion.Control>
          <Accordion.Panel>
            You can cancel and get a full refund up to 24 hours before your bike
            ride starts. If you book a trip with less than 24 hours notice, you
            have one hour after booking to cancel free of charge. If you cancel
            after the free cancellation period ends, you will be charged a small
            cancellation fee.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            What happend if I have an accident?
          </Accordion.Control>
          <Accordion.Panel>
            If there is an emergency or an issue with the bike, call our
            customer assistance available 24/7.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
            Change the date or time of your bike reservation
          </Accordion.Control>
          <Accordion.Panel>
            The date or time no longer works for you? You may be able to change
            your reservation, depending on your Host's availability and their
            cancellation policy.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
            What payment systems to you work with?
          </Accordion.Control>
          <Accordion.Panel>
            We support different payment methods. We will show you which payment
            methods are available on the checkout page.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
