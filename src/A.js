import React from "react";
import { B } from "./B";

export const A = () => {
  return (
    <>
      <div style={{fontSize:"20px"}}>
        I am <span style={{color:"red"}}>A</span> and my parent is App.js{" "}
      </div>
      <B/>
    </>
  );
};
