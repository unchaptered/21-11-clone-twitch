import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 252px;
  height: 41px;
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const ImageContainer = styled.div`
  width: 48px;
  height: 41px;
  margin-right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  object-fit: cover;
  background-image: url("https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80");
  background-position: center;
  background-size: 100%;
`;
const InfoContainer = styled.div`
  width: 131px;
  height: 41px;
  margin-right: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
`;
const UserInfo = styled.h3`
  font-size: 14px;
  font-weight: 600;
`;
const UserTarget = styled.h5`
  font-size: 13px;
  color: grey;
`;
const LiveCotnainer = styled.div`
  width: 64px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LiveCount = styled.h5`
  font-size: 13px;
  color: grey;
`;

export default ({ name, target, isLive, countViewer }) => {
  return (
    <ProfileContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <InfoContainer>
        <UserInfo>{name}</UserInfo>
        <UserTarget>{target}</UserTarget>
      </InfoContainer>
      <LiveCotnainer>
        <LiveCount>{countViewer}</LiveCount>
      </LiveCotnainer>
    </ProfileContainer>
  );
};
