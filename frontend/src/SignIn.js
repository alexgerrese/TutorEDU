import React, { Component } from 'react';
import './styles.css';
import styled from 'styled-components';
import axios from "axios";
import { Link } from "react-router-dom";

const Button = styled.button`
  height: 40px;
  width: 250px;
  border: 2px solid #D9E2FF;
  border-radius: 4px;
  font-family: Avenir-Heavy;
  font-size: 12px;
  color: #1C3A9F;
  letter-spacing: 0;
  text-align: center;
  justifyContent: center;
  alignItems: center;
  margin-top: 12px;

  :hover {
    color: white;
    border: 0px;
    background-color: #1C3A9F;
  }

  :image {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: contain,
  }
`;
