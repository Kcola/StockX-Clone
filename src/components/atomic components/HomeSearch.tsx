import React from "react";
import styled from "styled-components";
const HomeSearchInput = styled.input`
  border: none;
`;
function HomeSearch() {
  return (
    <div>
      <HomeSearchInput placeholder="Search..." type="text" />
    </div>
  );
}
export default HomeSearch;
