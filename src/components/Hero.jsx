import React from "react";
import styled from "styled-components";
import Image1 from "../assets/Cover3.png";
import Button1 from "./Button1";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="HeroContainer">
      <ImgContainer>
        <span className="Caption1">NEW</span>
        <span className="Caption2">COLLECTION</span>
        <Button1>DISCOVER</Button1>

        <ArrowRightAltIcon fontSize="large"></ArrowRightAltIcon>
      </ImgContainer>
      <div className="Sales"> </div>
    </div>
  );
}

const ImgContainer = styled.div`
  background: url(${Image1}) 0 100% no-repeat;
  width: 90vw;
  height: 80vh;
  margin: 0 auto;
  background-size: 100% 100%;
`;
