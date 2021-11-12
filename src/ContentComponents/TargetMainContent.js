import { element } from "prop-types";
import styled from "styled-components";
import SVGIcon from "../Components/SVGIcon";

const castArr = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
];
const TargetConatiner = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: space-between;
`;
const TargetGenresContainer = styled.div`
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TargetGenres = styled.div`
  position: relative;
`;
const TargetMainImage = styled.div`
  position: relative;
  z-index: 3;
  width: 500px;
  height: 280px;
  border-radius: 15px;
  object-fit: cover;
  background-image: url("https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80");
  background-position: center;
  background-size: 100%;
  transition: width 0.2s ease-in;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
const TargetSubImage = styled.div`
  position: absolute;
  top: 0;
  left: ${({ isLeft, sequence }) =>
    isLeft ? `${sequence * -200}` + "px" : `${sequence * 200}` + "px"};
  z-index: ${({ sequence }) => -1 * sequence + 2};

  width: 500px;
  height: 280px;
  border-radius: 15px;
  object-fit: cover;
  background-image: url("https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80");
  background-position: center;
  background-size: 100%;
  transform: ${({ sequence }) => `scale(${(100 + sequence * -20) / 100})`};

  transition: all 0.2s ease-in;
  opacity: 0.8;
  @media screen and (max-width: 1600px) {
    opacity: 0.7;
    left: ${({ isLeft, sequence }) =>
      isLeft ? `${sequence * -160}` + "px" : `${sequence * 160}` + "px"};
  }
  @media screen and (max-width: 1400px) {
    opacity: 0.6;
    left: ${({ isLeft, sequence }) =>
      isLeft ? `${sequence * -120}` + "px" : `${sequence * 120}` + "px"};
  }
  @media screen and (max-width: 1200px) {
    opacity: 0.5;
    left: ${({ isLeft, sequence }) =>
      isLeft ? `${sequence * -100}` + "px" : `${sequence * 100}` + "px"};
  }
  @media screen and (max-width: 900px) {
    opacity: 0.4;
    left: ${({ isLeft, sequence }) =>
      isLeft ? `${sequence * -70}` + "px" : `${sequence * 70}` + "px"};
  }
  @media screen and (max-width: 800px) {
    opacity: 0.3;
    left: ${({ isLeft, sequence }) =>
      isLeft ? `${sequence * -50}` + "px" : `${sequence * 50}` + "px"};
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export default () => {
  return (
    <TargetConatiner>
      <SVGIcon
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        fillRule="evenodd"
        d={[
          "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
        ]}
        clipRule="evenodd"
        isBig={true}
      />
      <TargetGenresContainer>
        <TargetGenres>
          <TargetMainImage />
          {castArr.map((element) => {
            return element.id % 2 === 1 ? (
              <TargetSubImage
                key={element.id}
                isLeft={true}
                sequence={(element.id + 1) / 2}
              />
            ) : (
              <TargetSubImage
                key={element.id}
                isLeft={false}
                sequence={element.id / 2}
              />
            );
          })}
        </TargetGenres>
      </TargetGenresContainer>
      <SVGIcon
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        fillRule="evenodd"
        d={[
          "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
        ]}
        clipRule="evenodd"
        isBig={true}
      />
    </TargetConatiner>
  );
};
