import styled from "styled-components";
import ProfileLeft from "./ProfileLeft";

const users = [
  {
    id: 1,
    name: "Faker",
    target: "League of Legends",
    isLive: true,
    countViewer: "2.9만",
  },
  {
    id: 2,
    name: "한동숙",
    target: "LOST ARK",
    isLive: true,
    countViewer: "9,224",
  },
  {
    id: 3,
    name: "풍월량",
    target: "Dead by Daylight",
    isLive: true,
    countViewer: "1.3만",
  },
  {
    id: 4,
    name: "김도",
    target: "Apex Legends",
    isLive: true,
    countViewer: "5,470",
  },
];

const NavLeft = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 254px;
  margin-top: 54px;
  height: calc(100% - 54px);
  background-color: #e2e2e4;
`;

export default () => {
  return (
    <NavLeft>
      <ProfileLeft
        name="페이커"
        target="롤"
        isLive={true}
        countViewer="2.9만"
      />
      {users.map((user) => (
        <ProfileLeft
          id={user.id}
          key={user.id}
          name={user.name}
          target={user.target}
          isLive={user.isLive}
          countViewer={user.countViewer}
        />
      ))}
    </NavLeft>
  );
};
