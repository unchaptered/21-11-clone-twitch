import styled from "styled-components";

const SVG = styled.svg`
  margin: 0 5px;
  padding: 5.5px;
  width: 30px;
`;

export default ({
  xmlns,
  className,
  viewBox,
  fill,
  fillRule,
  clipRule,
  d: dArr = ["d"],
}) => {
  return (
    <SVG xmlns={xmlns} className={className} viewBox={viewBox} fill={fill}>
      {dArr.length === 1 ? (
        <path d={dArr[0]} fillRule={fillRule} clipRule={clipRule} />
      ) : (
        <>
          <path d={dArr[0]} />
          <path d={dArr[1]} />
        </>
      )}
    </SVG>
  );
};
