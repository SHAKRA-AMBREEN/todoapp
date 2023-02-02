"use client";
import React from "react";

import { useState } from "react";


export default function StrPrac() {
  //const val = 'hello';

  const [val, setVal] = useState("hi")
  const [val2, setVal2] = useState("hello")
  const onChangeHandler = (e: any) => {
    console.log("e is", e.target.value);
    setVal(e.target.value);
  };
  const onChangeHandler2 = (e: any) => {
    console.log("e is", e.target.value);
    setVal2(e.target.value);
  };
  return (
    <>
    
    <input type="text" value={val} onChange={onChangeHandler} />
    <br />
    <input type="text" value={val2} onChange={onChangeHandler2} />
    <br />
    length of string 1: {val.length}
    <br />
    length of string 2: {val2.length}
    

    </>
  )
}
