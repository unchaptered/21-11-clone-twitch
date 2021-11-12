import styled from "styled-components";

import SVGIcon from "./SVGIcon";
import Button from "./Button";

const NavBottom = styled.nav`
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 63px;
  background-color: #772ce8;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavContainer = styled.div`
  width: auto;
  height: 63px;
  display: flex;
  align-items: center;
`;
const StrongFont = styled.strong`
  margin-left: 10px;
  font-weight: 600;
  color: #f3f6fe;
`;
const BasicFont = styled.span`
  margin-left: 10px;
  font-weight: initial;
  color: #f3f6fe;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
export default () => {
  return (
    <NavBottom>
      <NavContainer>
        <SVGIcon
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          d={[
            "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z",
          ]}
          isBig={true}
        />
        <StrongFont> Twitch 커뮤니티와 함께하세요! </StrongFont>
        <BasicFont>어디서나 최고의 생방송을 즐겨보세요.</BasicFont>
      </NavContainer>
      <NavContainer>
        <Button text="회원가입" bgColor="#FFFFFF" />
      </NavContainer>
    </NavBottom>
  );
};
