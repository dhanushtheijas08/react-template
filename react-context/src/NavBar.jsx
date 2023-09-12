import React from "react";
import { useContextProvider } from "./ContextProvider";
export default function NavBar() {
  const { name, age } = useContextProvider();
  return <div> My name is :{name} </div>;
}
