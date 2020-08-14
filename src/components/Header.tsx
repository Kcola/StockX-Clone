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
const Nav = styled.ul`
  list-style-type: none;
  display: flex;
`;
const NavItem = styled.li`
  margin: 5px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;
const NavLink = styled.a`
  color: black;
  text-decoration: none;
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
      <Nav>
        {navList.map((x) => (
          <NavItem>
            <NavLink href={x.href}>{x.text}</NavLink>
          </NavItem>
        ))}
      </Nav>
    </HeaderContainer>
  );
}
export default Header;
