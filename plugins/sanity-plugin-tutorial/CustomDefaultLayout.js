import React from "react";
import StudioRoot from "part:@sanity/default-layout/root";
import HelloSanityTutorial from "./HelloSanityTutorial";

export default function CustomDefaultLayout() {
  return (
    <>
      <HelloSanityTutorial />
      <StudioRoot />
    </>
  );
}
