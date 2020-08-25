import React from "react";
import styled from "styled-components";
import backgroundImage from "../../imgs/home_background.jpg";
import Search from "../atomic components/Search";
import CatalogLayout from "../layout components/CatalogLayout";
import PopularBrands from "../sub-organism components/PopularBrands";
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
const HomeSecondDiv = styled(HomeTitles)`
  background-color: black;
  width: fit-content;
  margin: auto;
`;
function HomeBody() {
  return (
    <BodyContainer>
      <HomeJumbo>
        <HomeJumboContentContainer>
          <HomeTitles>Buy & Sell</HomeTitles>
          <HomeSecondDiv>Authenticate Sneakers</HomeSecondDiv>
          <Search placeholder="Search..." />
          <CatalogLayout>
            <PopularBrands />
          </CatalogLayout>
        </HomeJumboContentContainer>
      </HomeJumbo>
    </BodyContainer>
  );
}
export default HomeBody;
