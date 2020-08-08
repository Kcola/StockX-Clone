import React from "react";
import styled from "styled-components";
import { ParentElement } from "../Types";
const FooterContainer = styled.div`
  display: flex;
  background-color: lightblue;
`;
function Footer({ children }: ParentElement) {
  return <FooterContainer>{children}</FooterContainer>;
}
export default Footer;
