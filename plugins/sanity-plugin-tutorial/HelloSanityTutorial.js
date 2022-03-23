import React, { useState } from "react";
import {
  Card,
  Container,
  Button,
  Flex,
  Label,
  Heading,
  Text,
  Stack,
  useElementRect,
  useTheme,
} from "@sanity/ui";
import { CloseIcon } from "@sanity/icons";

export const HelloSanityTutorial = () => {
  const [showTutorial, setShowTutorial] = useState(
    localStorage.getItem("closedTutorial") === null
  );

  const { sanity } = useTheme();
  const rect = useElementRect(document.body);
  const isSmallScreen = rect?.width < sanity.media[1];

  const onClose = () => {
    localStorage.setItem("closedTutorial", "true");
    setShowTutorial(false);
  };

  return (
    showTutorial && (
      <Card
        tone="primary"
        paddingY={isSmallScreen ? 3 : 5}
        paddingX={isSmallScreen ? 3 : 5}
      >
        <Flex
          justify={isSmallScreen ? "space-between" : "flex-end"}
          align="center"
        >
          {isSmallScreen && (
            <Label as="p" muted>
              Get started with sanity
            </Label>
          )}

          <Button
            aria-label="Close dialog"
            icon={CloseIcon}
            mode="bleed"
            onClick={onClose}
            padding={isSmallScreen ? undefined : 3}
          />
        </Flex>
        <Stack space={4}>
          {!isSmallScreen && (
            <>
              <Label as="p" muted align="center">
                Get started with sanity
              </Label>

              <Heading as="h1" size={5} align="center">
                Your Sanity Studio is all set up!
              </Heading>
            </>
          )}

          <Container width={1}>
            <Text
              as="p"
              muted
              size={isSmallScreen ? 1 : undefined}
              align={isSmallScreen ? "start" : "center"}
            >
              Next, our docs will guide you through building schemas, adding
              content, and connecting a frontend. You’ll see updates reflected
              in your Studio below.
            </Text>
          </Container>

          <Flex justify={isSmallScreen ? "start" : "center"}>
            <Button
              as="a"
              href="https://www-sanity-io-ir5wewhq6.sanity.build/docs/create-your-first-schema"
              target="_blank"
              padding={isSmallScreen ? undefined : 4}
              tone="primary"
              text="Go to docs"
            />
          </Flex>
        </Stack>
      </Card>
    )
  );
};

export default HelloSanityTutorial;
