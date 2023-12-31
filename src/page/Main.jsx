import React from "react";
import { PC, Mobile } from "../responsive";
import PMainOne from "../component/PC/PmainOne";
import PMainTwo from "./../component/PC/PmainTwo";
import PmainThree from "../component/PC/PmainThree";
import PmainFour from "../component/PC/PmainFour";
import MmainOne from "../component/Mobile/MmainOne";
import MmainTwo from "../component/Mobile/MmainTwo";
import Pfooter from "../component/PC/Pfooter";
import Mfooter from "../component/Mobile/Mfooter";

export default function Main() {
  return (
    <>
      <PC>
        <PMainOne />
        <PMainTwo />
        <PmainThree />
        <PmainFour />
        <Pfooter />
      </PC>
      <Mobile>
        <MmainOne />
        <MmainTwo />
        <Mfooter />
      </Mobile>
    </>
  );
}
