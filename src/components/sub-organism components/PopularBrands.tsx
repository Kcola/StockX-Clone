import React from "react";
import styled from "styled-components";
import airJordan from "../../imgs/000-air-jordan.jpeg";
import nike from "../../imgs/001-nike.jpeg";
import yeezy from "../../imgs/002-yeezy.jpeg";
import adidas from "../../imgs/003-adidas.jpeg";
type PopularBrandImgProps = {
  url :string
}
const Center = styled.div`
margin:0 auto;
`;
const PopularBrandImg = styled.img<PopularBrandImgProps>`
  zoom:0.33;
  content: url(${(props) => props.url});
  margin:30px;
`;
const popularBrandImgSrcs = [airJordan, nike, yeezy, adidas];
function PopularBrands() {
  return (
    <Center>
      {popularBrandImgSrcs.map((x) => (
        <PopularBrandImg url={x} />
      ))}
    </Center>
  );
}
export default PopularBrands;
