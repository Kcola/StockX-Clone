import React from "react";
import styled from "styled-components";
import { ParentElement } from "../Types";
import logoLight from "../imgs/stockx_homepage_logo_white.png";
import logoDark from "../imgs/stockx_homepage_logo_dark.png";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`;
const Logo = styled.img`
  padding: 60px;
  zoom: 0.4;
`;
function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoDark} />
    </HeaderContainer>
  );
}
export default Header;
