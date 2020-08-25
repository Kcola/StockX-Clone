import React from "react";
import styled from "styled-components";
import { ParentElement } from "../../Types";
const CatalogContainer = styled.div`
  font-family: proxima-nova, sans-serif;
  height: 100%;
  display: grid;
  grid-template-columns: 238px 1fr 238px;
`;
function CatalogLayout({ children }: ParentElement) {
  return <CatalogContainer>{children}</CatalogContainer>;
}
export default CatalogLayout;
