import React from "react";
import { PC, Mobile } from "../responsive";
import P_Login from "./PC/P_Login";

export default function Login() {
  return (
    <>
      <PC>
        <P_Login />
      </PC>
      <Mobile></Mobile>
    </>
  );
}
