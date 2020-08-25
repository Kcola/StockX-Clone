import React from "react";
import styled from "styled-components";
import { ParentElement } from "../../Types";
const CatalogContainer = styled.div`
  font-family: proxima-nova, sans-serif;
  height: 100%;
  display: grid;
  grid-template-rows: 300px 1fr 300px;
`;
function CatalogLayout({ children }: ParentElement) {
  return <CatalogLayout>{children}</CatalogLayout>;
}
export default CatalogLayout;
