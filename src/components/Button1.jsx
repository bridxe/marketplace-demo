import React from "react";
import styled from "styled-components";

const HomeButton = styled.button`
  color: white;
  height: 30px;
  width: 180px;
  border: 1px white solid;
  border-radius: 5px;
  font-size: 15px;

  position: absolute;
  top: 530px;
  left: 55px;
`;

export default function Button1({ children }) {
  return <HomeButton>{children}</HomeButton>;
}
