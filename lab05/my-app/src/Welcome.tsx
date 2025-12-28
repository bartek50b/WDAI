import React from "react";
import logo from "./logo.svg";
import "./App.css";

type WelcomeProps = {
  name: string;
};

function Welcome({ name }: WelcomeProps) {
  return <h1>Hello, {name}</h1>;
}

export default Welcome;
