import React from "react";
import styled from "styled-components";
import { ParentElement } from "../../Types";
import backgroundImage from "../../imgs/home_background.jpg";
import HomeSearch from "../atomic components/HomeSearch";
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 60px;
  font-weight: bold;
  color: white;
`;
const HomeJumbo = styled.div`
  padding: 15px 0;
  background-image: url(${backgroundImage});
  background-size: cover;
  text-align: center;
  min-height: 500px;
`;
const HomeJumboContentContainer = styled.div`
  margin-top: 80px;
`;
const HomeTitles = styled.div`
  font-family: RingsideWideSSm-Medium_Web, sans-serif;
  padding-left: 10px;
  padding-right: 10px;
  letter-spacing: 2px;
  margin: auto auto 20px;
`;
const SecondDiv = styled(HomeTitles)`
  background-color: black;
  width: fit-content;
  margin: auto;
`;
function Body({ children }: ParentElement) {
  return (
    <BodyContainer>
      <HomeJumbo>
        <HomeJumboContentContainer>
          <HomeTitles>Buy & Sell</HomeTitles>
          <SecondDiv>Authenticate Sneakers</SecondDiv>
          <HomeSearch />
        </HomeJumboContentContainer>
      </HomeJumbo>
    </BodyContainer>
  );
}
export default Body;
