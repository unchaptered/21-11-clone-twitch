import styled from "styled-components";

import Button from "./Button";
import SVGIcon from "./SVGIcon";

import NavTopInput from "./NavTopInput";

const NavTop = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 54px;
  background-color: white;
  display: flex;
  justify-content: space-between;
`;
const NavContainer = styled.div`
  min-width: 50px;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;

export default () => {
  return (
    <NavTop>
      <NavContainer>
        <SVGIcon
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          d={[
            "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z",
          ]}
        />
        <Button text="탐색" />
        <SVGIcon
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          d={[
            "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z",
          ]}
        />
      </NavContainer>
      <NavContainer>
        <NavTopInput />
      </NavContainer>
      <NavContainer>
        <SVGIcon
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          d={[
            "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z",
            "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z",
          ]}
        />
        <Button text="로그인" />
        <Button text="회원가입" />
        <SVGIcon
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d={["M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"]}
        ></SVGIcon>
      </NavContainer>
    </NavTop>
  );
};
