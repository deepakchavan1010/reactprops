import React from 'react'
import { C } from './C'

export const B = () => {
  return (
    <>
      <div style={{fontSize:"20px"}}>
        I am <span style={{color:"blue"}}>B</span> and my parent is A.js{" "}
      </div>
      <C/>
    </>
  )
}
