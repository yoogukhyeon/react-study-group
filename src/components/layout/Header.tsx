import React from 'react';
import styled from 'styled-components';

const Heeader = styled.div`
  width: 100%;
  height: 200px;
  background-color: #222;
`;

export default function Header() {
  return (
    <Heeader>
      <h2>This is Header</h2>

      {/* 
        1. navi 
        2. react-router-dom V6 Router 정리해서 설명 
        3. styled-components UI를 만든 파일에서 css 사용 
        4. home, community /community, login /login
      */}
    </Heeader>
  );
}
