import React from "react";
import StudioRoot from "part:@sanity/default-layout/root";
import HelloSanityTutorial from "./HelloSanityTutorial";

import { useCurrentUser } from "@sanity/base/hooks";

export default function CustomDefaultLayout() {
  const currentUser = useCurrentUser();

  return (
    <>
      {currentUser.value && <HelloSanityTutorial />}
      <StudioRoot />
    </>
  );
}
