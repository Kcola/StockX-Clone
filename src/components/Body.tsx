import React from "react";
import styled from "styled-components";
import { ParentElement } from "../Types";
const BodyContainer = styled.div`
  display: flex;
  background-color: lightcoral;
`;
function Body({ children }: ParentElement) {
  return <BodyContainer>{children}</BodyContainer>;
}
export default Body;
