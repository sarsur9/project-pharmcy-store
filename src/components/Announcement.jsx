import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: royalblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>$ Mega Deal! best deal, for real $</Container>;
};

export default Announcement;
