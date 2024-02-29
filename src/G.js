import React from "react";
import { H } from "./H";

export const G = () => {
  return (
    <>
      <div style={{fontSize:"20px"}}>
        I am <span style={{color:"grey"}}>G </span>and my parent is F.js
      </div>
      <H/>
    </>
  );
};
