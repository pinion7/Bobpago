import styled, { keyframes } from "styled-components";
import { Email } from "@styled-icons/material-rounded/Email";

export const WholeContainer = styled.div`
  width: 14em;
  top: 100%;
  position: fixed;
  height: 20em;
  overflow: hidden;
  border-radius: 10px;
`;
export const EmailIcon = styled(Email)`
  transform: translate(-0.2em, -0.1em);
  width: 1.3em;
`;

export const Container = styled.div`
  position: absolute;
  background-color: #f7f5eb;
  color: #000;
  width: 100%;
  height: 200vh;
  overflow-x: hidden;
  z-index: 0;
`;

export const Background = styled.div`
  position: absolute;
  right: -30em;
  top: -3em;
  z-index: 0;
`;

export const BackgroundImg = styled.img`
  width: 70%;
  display: none;
`;

export const InputContainer = styled.form`
  position: relative;
  width: 84%;
  padding: 8.5%;
  z-index: 1;
  float: left;
`;

export const Logo = styled.img`
  width: 7em;
  margin-left: 2.5em;
  margin-right: 2.5em;
  margin-top: -0.5em;
`;
export const Placeholder = styled.label`
  text-align: left;
  position: absolute;
  transform: translateY(1.15em);
  left: 2.7em;
  z-index: 1;
  color: #7a7a76;
  font-size: 15px;
  transition: all 0.25s;
  border-radius: 10px;
`;

export const Title = styled.div`
  text-align: center;
  height: 2em;
  font-size: 20px;
  font-weight: 700;
  color: #262729;
`;

export const InputTitle = styled.div`
  text-align: left;
  color: #202226;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
`;

export const InputWrapper = styled.input`
  position: relative;
  border-radius: 3em;
  border: 1.5px solid #c2c2c2;
  height: 2.1em;
  width: 86%;
  font-size: 14px;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 0.5em;
  background-color: #fafafa;
  &:focus {
    outline: none;
  }
`;
const shake = keyframes`
  10%, 90% {
    transform: translate3d(-0.3px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(0.6px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-0.8px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(0.8px, 0, 0);
  }
`;
export const ErrMsg = styled(InputTitle)`
  margin-top: -0.5em;
  margin-bottom: 0.3em;
  height: 0.5em;
  color: #dd584a;
  font-size: 10px;
  span {
    padding-left: 1em;
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97);
    display: none;
  }
`;
export const Ask = styled(InputTitle)`
  text-align: center;
  position: relative;
  padding: 0 auto;
  top: 1em;
  padding-bottom: 0.6em;
  font-size: 13px;

  a {
    text-decoration: none;
    color: #094fbd;
  }
`;
export const Ask2 = styled(Ask)``;

export const OAuthContainer = styled.div`
  padding-top: 0.5em;
  border-top: 1px solid #757575;
  margin-top: 1.5em;
  p {
    font-size: 13px;
    color: #757575;
  }
`;
export const OAuthIconContainer = styled.div`
  margin-top: 0.5em;
`;
export const GoogleOAuthContainer = styled.div`
  margin-top: 0.5em;
  height: 2.3em;
  width: 13em;
  background: #4289f8;
  border-radius: 25px;
  img {
    float: left;
    position: relative;
    margin-top: 0.55em;
    margin-bottom: 0.55em;
    left: 7%;
  }
  span {
    color: white;
    font-size: 18px;
    position: relative;
    top: 11px;
    right: 5px;
    &:before {
      content: " ";
      background-color: #fff;
      height: 1.5em;
      width: 1px;
      z-index: 3;
      right: 8em;
      top: -3px;
      position: absolute;
    }
  }
`;

export const KakaoOAuthContainer = styled(GoogleOAuthContainer)`
  background: #ffe812;
  span {
    color: #000;
    right: 1px;
    &:before {
      background-color: #000;
      right: 8.7em;
    }
  }
`;
export const EyeIcon = styled.div`
  position: absolute;
  right: 1.7em;
  transform: translateY(-2.3em);
  margin-top: 0.55em;
  margin-bottom: 0.55em;
`;

export const ButtonWrapper = styled.button`
  display: block;
  margin-top: 1em;
  width: 100%;
  height: 2.5em;
  line-height: 2.3em;
  font-size: 14px;
  font-family: sans-serif;
  text-decoration: none;
  color: #000;
  border: 1.4px solid #c2c2c2;
  border-radius: 20px;
  letter-spacing: 0.5px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
  overflow: hidden;
  z-index: 0;
  background-color: #f5f5f5;
  &:after {
    z-index: 0;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #1a1a1a;
    transition: all 0.4s;
  }
  &:hover:after {
    height: 100%;
    z-index: 0;
    color: #fff;
    width: 100%;
  }
  &:hover {
    color: #fff;
  }
`;
export const ButtonText = styled.span`
  position: relative;
  z-index: 2;
  &:hover {
    position: relative;
    z-index: 3;
    color: #fff;
  }
  &:after {
    position: relative;
    z-index: 3;
    color: #fff;
    width: 100%;
  }
`;
export const IconClose = styled.svg`
  z-index: 3;
  position: absolute;
  top: 0.6em;
  right: 0.6em;
  fill: #302d2c;
  height: 1em;
  path {
    fill: #544f4f;
  }
`;
