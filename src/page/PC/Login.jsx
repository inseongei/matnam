import React from "react";
import { PC, Mobile } from "../../responsive";
import Plogin from "./Plogin";
import Mlogin from "../Mobile/Mlogin";

export default function Login() {
  return (
    <>
      <PC>
        <Plogin />
      </PC>
      <Mobile>
        <Mlogin />
      </Mobile>
    </>
  );
}
