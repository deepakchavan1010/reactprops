import React from "react";
import { G } from "./G";

export const F = () => {
  return (
    <>
      <div style={{ fontSize: "20px" }}>
        I am <span style={{ color: "yellow" }}>F</span> and my parent is E.js{" "}
      </div>
      <G />
    </>
  );
};
