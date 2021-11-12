import styled from "styled-components";

const TargetContainer = styled.div`
  width: 100%;
  min-height: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const TargetTitle = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-weight: 600;
`;
const TargetTitleRegex = styled.p`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
const TartgetTitleSub = styled.p`
  margin: 0 5px;
  color: #772ce8;
`;
const TargetGeneres = styled.div`
  width: 100%;
  height: 100%;
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
    & > div:nth-child(5) {
      display: none;
    }
  }
  @media screen and (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
    & > div:nth-child(4),
    & > div:nth-child(5) {
      display: none;
    }
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5) {
      display: none;
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    & > div:nth-child(2),
    & > div:nth-child(3),
    & > div:nth-child(4),
    & > div:nth-child(5) {
      display: none;
    }
  }
`;
const GenresContainer = styled.div``;
// GenresChild:nth-child(1)
const PreviewContainer = styled.div`
  padding-top: 70%;
  width: 100%;
  height: 0;
  max-height: 200px;
  position: relative;

  display: flex;
  justify-content: center;
`;
const Prview = styled.div`
  top: 0;
  width: 90%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  background-image: url("https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80");
  background-position: center;
  background-size: 100%;
`;
// GenresChild:nth-child(2)
const MetaContainer = styled.div`
  padding: 0 10px;
  display: flex;
`;
const MetaImageDiv = styled.div`
  padding-top: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
`;
const MetaImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
  background-image: url("https://images.unsplash.com/photo-1561948955-570b270e7c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=301&q=80");
  background-position: center;
  background-size: 100%;
`;
const MetaDataDiv = styled.div`
  padding-top: 10px;
`;
const MetaCastName = styled.div`
  font-weight: 600;
`;
const MetaUsername = styled.div`
  color: grey;
`;
const MetaTarget = styled.div`
  color: grey;
`;

export default ({ title = "error", titleSort = "error", result = null }) => {
  return (
    <TargetContainer>
      <TargetTitle>
        <TargetTitleRegex>{title}</TargetTitleRegex>
        <TartgetTitleSub>{titleSort}</TartgetTitleSub>
        <TargetTitleRegex>채널</TargetTitleRegex>
      </TargetTitle>
      <TargetGeneres>
        {result.map((genres) => (
          <GenresContainer id={`genres${genres.id}`} key={genres.id}>
            {/* 방송 미리보기 */}
            <PreviewContainer>
              <Prview />
            </PreviewContainer>
            {/* 메타정보 */}
            <MetaContainer>
              <MetaImageDiv>
                <MetaImage />
              </MetaImageDiv>
              <MetaDataDiv>
                <MetaCastName>{genres.castName}</MetaCastName>
                <MetaUsername>{genres.name}</MetaUsername>
                <MetaTarget>{genres.target}</MetaTarget>
              </MetaDataDiv>
            </MetaContainer>
          </GenresContainer>
        ))}
      </TargetGeneres>
    </TargetContainer>
  );
};
