import React from "react";
import styled from "styled-components";
import { InitStlyes } from "./InitStlyes";
import NavTop from "./Components/NavTop";
import NavLeft from "./Components/NavLeft";
import NavBottom from "./Components/NavBottom";

import TargetContent from "./ContentComponents/TargetContent";
import TargetMainContent from "./ContentComponents/TargetMainContent";

const Body = styled.div`
  /* NavTop 53px NavLeft 252px  + 15px(except Bottom*/
  padding: 68px 25px 0 267px;
  width: 100%;
  height: auto;
  font-size: 16px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in;
  @media screen and (max-width: 1200px) {
    padding: 68px 25px 0 65px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const cast = [
  {
    id: 1,
    name: "Faker",
    target: "League of Legends",
    isLive: true,
    castName: "We Back (Day 2) Class Rework",
  },
  {
    id: 2,
    name: "Faker",
    target: "League of Legends",
    isLive: true,
    castName: "We Back (Day 2) Class Rework",
  },
  {
    id: 3,
    name: "Faker",
    target: "League of Legends",
    isLive: true,
    castName: "We Back (Day 2) Class Rework",
  },
  {
    id: 4,
    name: "Faker",
    target: "League of Legends",
    isLive: true,
    castName: "We Back (Day 2) Class Rework",
  },
  {
    id: 5,
    name: "Faker",
    target: "League of Legends",
    isLive: true,
    castName: "We Back (Day 2) Class Rework",
  },
];

export default class extends React.Component {
  render() {
    return (
      <>
        <InitStlyes />
        <NavTop />
        <NavLeft />
        <NavBottom />
        <Body>
          <TargetMainContent>Hello</TargetMainContent>
          <TargetContent title="취향 저격" titleSort="생방송" result={cast} />
          <TargetContent
            title="추천"
            titleSort="Legegue of Legeneds"
            result={cast}
          />
          <TargetContent title="추천" titleSort="Just Chatting" result={cast} />
          <TargetContent title="추천" titleSort="Arcane" result={cast} />
        </Body>
      </>
    );
  }
}
