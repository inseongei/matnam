import React from "react";
import { Mobile, PC } from "../responsive";
import Pfooter from "./PC/Pfooter";
import Mfooter from "./Mobile/Mfooter";

export default function Footer() {
  return (
    <>
      <Mobile>
        <Mfooter />
      </Mobile>
      <PC>
        <Pfooter />
      </PC>
    </>
  );
}
