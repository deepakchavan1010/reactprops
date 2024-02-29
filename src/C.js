import React from "react";
import { D } from "./D";

export const C = () => {
  return (
    <>
      <div style={{fontSize:"20px"}}>
        I am <span style={{color:"green"}}>C</span> and my parent is B.js{" "}
      </div>
      <D />
    </>
  );
};
