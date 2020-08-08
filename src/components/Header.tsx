import React from "react";
import styled from "styled-components";
import { ParentElement } from "../Types";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blanchedalmond;
`;
function Header({ children }: ParentElement) {
  return <HeaderContainer>{children}</HeaderContainer>;
}
export default Header;
