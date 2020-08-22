import React from "react";
import styled from "styled-components";
import searchIcon from "../../imgs/search.png";
type SearchProps = {
  placeholder: string;
};
const HomeSearchInput = styled.input`
  border: none;
  margin-right: auto;
  height: 45px;
  max-width: 80%;
  font-size: 0.9rem;
  &:focus {
    outline: none;
  }
`;
const SearchContainer = styled.div`
  padding: 0px;
  background-color: white;
  margin: 10px auto;
  max-width: 600px;
  display: flex;
  justify-content: center;
  &::before {
    margin: auto 20px;
    height: 20px;
    width: 20px;
    content: "";
    background-image: url(${searchIcon});
    background-size: contain;
  }
`;
function Search({ placeholder }: SearchProps) {
  return (
    <SearchContainer>
      <HomeSearchInput placeholder={placeholder} type="text" />
    </SearchContainer>
  );
}
export default Search;
