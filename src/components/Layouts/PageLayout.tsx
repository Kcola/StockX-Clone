import React from "react";
import styled from "styled-components";
import { ParentElement } from "../../Types";
const PageContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto auto;
`;
function PageLayout({ children }: ParentElement) {
  return <PageContainer>{children}</PageContainer>;
}
export default PageLayout;
