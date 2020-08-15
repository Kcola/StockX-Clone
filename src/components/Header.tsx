import React from "react";
import styled from "styled-components";
import { ParentElement } from "../Types";
import logoLight from "../imgs/stockx_homepage_logo_white.png";
import logoDark from "../imgs/stockx_homepage_logo_dark.png";
const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
`;
const NavContainer = styled.div`
  display: flex;
  margin: 0 35px;
`;
const Logo = styled.img`
  padding: 60px;
  zoom: 0.4;
`;
const Nav = styled.ul`
  list-style-type: none;
  display: flex;
`;
const NavItem = styled.li`
  margin: 10px;
  display: flex;
  align-items: center;
`;
const NavLink = styled.a`
  color: black;
  text-decoration: none;
`;
const SellButton = styled.div`
  padding: 5px 15px;
  margin: 5px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-self: center;
`;
class NavInfo {
  text: string;
  href: string;
  constructor(text: string, href: string) {
    this.text = text;
    this.href = href;
  }
}
const navList = [
  new NavInfo("Browse", "#"),
  new NavInfo("News", "#"),
  new NavInfo("App", "#"),
  new NavInfo("About", "#"),
  new NavInfo("Help", "#"),
  new NavInfo("Login", "#"),
  new NavInfo("Sign Up", "#"),
];
function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoDark} />
      <NavContainer>
        <Nav>
          {navList.map((x) => (
            <NavItem>
              <NavLink href={x.href}>{x.text}</NavLink>
            </NavItem>
          ))}
          <SellButton>Sell</SellButton>
        </Nav>
      </NavContainer>
    </HeaderContainer>
  );
}
export default Header;
