import React, { useState } from "react";
import {
  Card,
  Box,
  Button,
  Flex,
  Label,
  Heading,
  Text,
  Stack,
} from "@sanity/ui";
import { CloseIcon } from "@sanity/icons";

export const HelloSanityTutorial = () => {
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("closedTutorial") === null
  );

  const onClose = () => {
    localStorage.setItem("closedTutorial", "true");
    setShowTutorial(false);
  };

  return (
    showTutorial && (
      <Card
        tone="primary"
        style={{
          order: -1,
        }}
      >
        <Flex justify={"flex-end"} paddingTop={5} paddingRight={5}>
          <Button
            aria-label="Close dialog"
            icon={
              <Text muted size={1}>
                <CloseIcon />
              </Text>
            }
            mode="bleed"
            onClick={onClose}
            padding={3}
          />
        </Flex>

        <Stack space={4} paddingTop={6} paddingBottom={7}>
          <Text align="center">
            <Label as="p" muted>
              Get started with sanity
            </Label>

            <Heading as="h1">
              <h1>Your Sanity Studio is all set up!</h1>
            </Heading>

            <Text as="p" muted size={2}>
              It’s time to learn how to build schemas, create content and
              connect it with other applications.
            </Text>

            <Box paddingTop={5}>
              <Button
                as="a"
                href="https://www-sanity-io-ir5wewhq6.sanity.build/docs/create-your-first-schema"
                target="_blank"
                padding={4}
                tone="primary"
                text="Go to docs"
              />
            </Box>
          </Text>
        </Stack>
      </Card>
    )
  );
};

export default HelloSanityTutorial;
