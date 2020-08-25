import React from "react";
import styled from "styled-components";
import airJordan from "../../imgs/000-air-jordan.jpeg";
import nike from "../../imgs/001-nike.jpeg";
import yeezy from "../../imgs/002-yeezy.jpeg";
import adidas from "../../imgs/003-adidas.jpeg";
const PopularBrandImg = styled.img`
  height: 200px;
  width: 200px;
  content: url(${(props) => props.src});
`;
const popularBrandImgSrcs = [airJordan, nike, yeezy, adidas];
function PopularBrands() {
  return (
    <div>
      {popularBrandImgSrcs.map((x) => (
        <PopularBrandImg src={x} />
      ))}
    </div>
  );
}
export default PopularBrands;
