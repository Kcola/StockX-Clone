import React from "react";
import styled from "styled-components";
import { ParentElement } from "../../Types";
const BaseNavContainer = styled.div`
  display: flex;
  background-color: olivedrab;
`;
function BaseNav({ children }: ParentElement) {
  return <BaseNavContainer>{children}</BaseNavContainer>;
}
export default BaseNav;
