import React from "react";
import styled from "styled-components";
import { InitStlyes } from "./InitStlyes";
import NavTop from "./Components/NavTop";
import NavLeft from "./Components/NavLeft";
import NavBottom from "./Components/NavBottom";

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 16px;
  background-color: #f7f7f7;
`;
export default class extends React.Component {
  render() {
    return (
      <>
        <InitStlyes />
        <NavTop />
        <NavLeft />
        <NavBottom />
        <Body> hi </Body>
      </>
    );
  }
}
