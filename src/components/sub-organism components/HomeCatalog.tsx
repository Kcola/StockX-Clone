import React from "react";
import styled from "styled-components";
import PopularBrands from "./PopularBrands";
const HomeCatalogContainer = styled.div`
grid-column:2/3;
`;
function HomeCatalog() {
  return <HomeCatalogContainer>
    <PopularBrands/>
  </HomeCatalogContainer>;
}
export default HomeCatalog;
