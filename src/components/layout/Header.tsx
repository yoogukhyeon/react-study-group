import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Heeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f5e2fb;
  display: flex;
  `;
  
const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #05e2fb;
  float: left;
  `
const Spacer = styled.div` 
flex-grow: 1;
`
const MenuBtn = styled.div`
  background-color: #f1f1f1;
  height: 50px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  float: left;
  :hover {
    background-color: bisque;
  }

`
export default function Header() {
  return (
    <Heeader>
      <Logo/>
      <Spacer/>
      <nav>
      <Link to = "/"><MenuBtn>home</MenuBtn></Link>
      <Link to = "/community"><MenuBtn>community</MenuBtn></Link>
      <Link to = "/login"><MenuBtn>log in</MenuBtn></Link>
    
      </nav>




      {/* 
        1. navi 
        2. react-router-dom V6 Router 정리해서 설명 
        3. styled-components UI를 만든 파일에서 css 사용 
        4. home, community /community, login /login
      */}
    </Heeader>
  );
}
