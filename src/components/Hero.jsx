import React from "react";
import styled from "styled-components";
import Image1 from "../assets/Cover3.png";
import Button1 from "./Button1";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Hero() {
  return (
    <HeroContainer>
      <ImgContainer>
        <Caption1>NEW</Caption1>
        <Caption2>COLLECTION</Caption2>
        <Button1>DISCOVER</Button1>
        <Button variant="outlined" startIcon={<ArrowRightAltIcon />}>
          Delete
        </Button>
      </ImgContainer>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  margin-top: 60px;
`;

const ImgContainer = styled.div`
  background: url(${Image1}) 0 100% no-repeat;
  width: 90vw;
  height: 80vh;
  margin: 0 auto;

  background-size: 100% 100%;
`;
const Caption1 = styled.span`
  position: relative;
  left: 600px;
  color: white;
  font-size: 30px;
  font-weight: 3;
`;
const Caption2 = styled.span`
  position: relative;
  left: 530px;
  top: 40px;
  color: white;
  font-size: 30px;
  font-weight: 3;
`;
