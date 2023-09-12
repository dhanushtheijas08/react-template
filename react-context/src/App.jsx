import React from "react";
import ContextProvider from "./ContextProvider";
import NavBar from "./NavBar";

export default function App() {
  return (
    <ContextProvider>
      <NavBar />
    </ContextProvider>
  );
}
