import React from "react";
import Header from "./../../Header";
import styled from "styled-components";
import LogoBar from "../LogoBar";
import MRecipeSwiper from "./MRecipeSwiper";

export default function MRecipeOne() {
  return (
    <>
      <Container>
        <Header />
        <LogoBar />
        <MRecipeSwiper />
      </Container>
    </>
  );
}

const Container = styled.div``;
