import { useRef, useEffect, useState } from "react";
import {
  WholeContainer,
  Container,
  Background,
  BackgroundImg,
  InputContainer,
  InputWrapper,
  ButtonWrapper,
  ButtonText,
  IconClose,
  ErrMsg,
  OAuthContainer,
  OAuthIconContainer,
  EmailIcon,
  Placeholder,
  Ask,
  Logo,
} from "./styled";
import gsap from "gsap";
import { useSelector, useDispatch } from "react-redux";
import { showSignUp, showNothing } from "actions/SignUpAndSignIn";

const SignIn = ({ setLoginDisplay, setSignUpDisplay }: any) => {
  const state = useSelector((state) => state.SignUpAndSignInReducer);
  const { loginDisplay } = state;
  const dispatch = useDispatch();
  const LoginRef = useRef<HTMLDivElement>(null);
  const emailError = useRef<any>(null);
  const passwordError = useRef<any>(null);
  const emailPlaceholderRef = useRef<any>(null);
  const passwordlPlaceholderRef = useRef<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect((): any => {
    if (loginDisplay) {
      gsap.to(LoginRef.current, { display: "" });
      gsap.to(LoginRef.current, { top: "10%" });
    } else {
      gsap.to(LoginRef.current, { top: "100%" });
      gsap.to(LoginRef.current, { display: "none" });
    }
  }, [loginDisplay]);

  const handleLogin = (e: any) => {
    e.preventDefault();
    emailError.current.style.display = "inline-block";
    passwordError.current.style.display = "inline-block";
    setTimeout(() => {
      emailError.current.style.display = "none";
      passwordError.current.style.display = "none";
    }, 2000);
  };

  const handleEmailPlaceholderActive = () => {
    emailPlaceholderRef.current.style.fontSize = "15px";
    emailPlaceholderRef.current.style.transform = "translate(0.1em,1.3em)";
    emailPlaceholderRef.current.style.backgroundColor = "transparent";
  };

  const handleEmailPlaceholderNotActive = () => {
    emailPlaceholderRef.current.style.fontSize = "8px";
    emailPlaceholderRef.current.style.transform = "translate(2.3em,0.8em)";
  };

  const handlePasswordPlaceholderActive = () => {
    passwordlPlaceholderRef.current.style.fontSize = "15px";
    passwordlPlaceholderRef.current.style.transform = "translate(0.1em,1.3em)";
    passwordlPlaceholderRef.current.style.backgroundColor = "transparent";
  };

  const handlePasswordPlaceholderNotActive = () => {
    passwordlPlaceholderRef.current.style.fontSize = "8px";
    passwordlPlaceholderRef.current.style.transform = "translate(2.5em,0.8em)";
  };

  useEffect(() => {
    if (email === "") {
      handleEmailPlaceholderActive();
    } else {
      handleEmailPlaceholderNotActive();
    }
  }, [email]);

  useEffect(() => {
    if (password === "") {
      handlePasswordPlaceholderActive();
    } else {
      handlePasswordPlaceholderNotActive();
    }
  }, [password]);

  return (
    <WholeContainer ref={LoginRef}>
      <Container>
        <InputContainer>
          {/* <Title>로그인</Title> */}
          <Logo src="/img/BobpagoRow.png" width="200" />
          <Placeholder ref={emailPlaceholderRef}>이메일</Placeholder>
          <InputWrapper
            onFocus={() => handleEmailPlaceholderNotActive()}
            onBlur={() =>
              email === "" ? handleEmailPlaceholderActive() : null
            }
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <ErrMsg>
            <span ref={emailError}>잘못된 아이디입니다</span>
          </ErrMsg>
          <Placeholder ref={passwordlPlaceholderRef}>비밀번호</Placeholder>
          <InputWrapper
            onFocus={() => handlePasswordPlaceholderNotActive()}
            onBlur={() =>
              password === "" ? handlePasswordPlaceholderActive() : null
            }
            onChange={(e) => setPassword(e.target.value)}
          />
          <ErrMsg>
            <span ref={passwordError}>잘못된 비밀번호입니다</span>
          </ErrMsg>
          <ButtonWrapper onClick={(e) => handleLogin(e)}>
            <ButtonText>
              <EmailIcon />
              이메일로 로그인
            </ButtonText>
          </ButtonWrapper>
          <Ask>
            아직 회원이 아니신가요?{" "}
            <a href="#" onClick={() => dispatch(showSignUp())}>
              회원가입
            </a>
          </Ask>
          <OAuthContainer>
            <p>SNS 계정으로 간편 로그인</p>
            <OAuthIconContainer>
              <img src="/img/google.png" width="37" />
              &nbsp;&nbsp;&nbsp;
              <img src="/img/kakao.png" width="36" />
            </OAuthIconContainer>
          </OAuthContainer>
        </InputContainer>
        <IconClose
          onClick={() => dispatch(showNothing())}
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.7914 3.62571C23.4589 2.95824 23.4589 1.87605 22.7914 1.20857C22.124 0.541096 21.0418 0.541096 20.3743 1.20857L12 9.58286L3.62571 1.20857C2.95824 0.541096 1.87605 0.541096 1.20857 1.20857C0.541096 1.87605 0.541096 2.95824 1.20857 3.62571L9.58286 12L1.20857 20.3743C0.541096 21.0418 0.541096 22.124 1.20857 22.7914C1.87605 23.4589 2.95824 23.4589 3.62571 22.7914L12 14.4171L20.3743 22.7914C21.0418 23.4589 22.124 23.4589 22.7914 22.7914C23.4589 22.124 23.4589 21.0418 22.7914 20.3743L14.4171 12L22.7914 3.62571Z"></path>
        </IconClose>
        <Background>
          <BackgroundImg src="/img/loginWallpaper.png" alt="배경" />
        </Background>
      </Container>
    </WholeContainer>
  );
};

export default SignIn;