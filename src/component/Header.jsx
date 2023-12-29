import React from "react";
import { Mobile, PC } from "../responsive";
import Pheader from "./PC/Pheader";
import Mheader from "./Mobile/Mheader";

export default function Header() {
  return (
    <>
      <Mobile>
        <Mheader />
      </Mobile>
      <PC>
        <Pheader />
      </PC>
    </>
  );
}
