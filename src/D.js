import React from "react";
import { E } from "./E";

export const D = () => {
  return (
    <>
      <div style={{ fontSize: "20px" }}>
        I am <span style={{ color: "GrayText" }}>D</span> and my parent is C.js
      </div>
      <E />
    </>
  );
};
