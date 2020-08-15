import React from "react";
import styled from "styled-components";
import { ParentElement } from "../../Types";
const PageContainer = styled.div`
  font-family: proxima-nova, sans-serif;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto auto;
`;
function PageLayout({ children }: ParentElement) {
  return <PageContainer>{children}</PageContainer>;
}
export default PageLayout;
