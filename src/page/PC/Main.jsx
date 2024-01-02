import React from "react";
import { PC, Mobile } from "../../responsive";
import PMainOne from "../../component/PC/Pmain/PmainOne";
import PMainTwo from "../../component/PC/Pmain/PmainTwo";
import PmainThree from "../../component/PC/Pmain/PmainThree";
import PmainFour from "../../component/PC/Pmain/PmainFour";

import MmainOne from "../../component/Mobile/Mmain/MmainOne";
import MmainTwo from "../../component/Mobile/Mmain/MmainTwo";
import Pfooter from "../../component/PC/Pfooter";
import Mfooter from "../../component/Mobile/Mfooter";

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
