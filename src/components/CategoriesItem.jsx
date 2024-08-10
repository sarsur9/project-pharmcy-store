import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 60vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
  ${mobile({ height: "32vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 10px;
  font-weight: 700;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;
const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};
export default CategoriesItem;