import React from "react";
import { PC, Mobile } from "../responsive";
import PMainOne from "../component/PC/PmainOne";
import PMainTwo from "./../component/PC/PmainTwo";
import PmainThree from "../component/PC/PmainThree";
import PmainFour from "../component/PC/PmainFour";

export default function Main() {
  return (
    <>
      <PC>
        <PMainOne />
        <PMainTwo />
        <PmainThree />
        <PmainFour />
      </PC>
      <Mobile></Mobile>
    </>
  );
}
