import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Community from './components/Community';
import LogIn from './components/LogIn';

const Container = styled.div`
  max-width: 850px;
  width: 100%;
  height: 1000px;
  margin: 0 auto;

  ${({ theme }) => theme.media.desktop`
      border: 2px solid blue;
  `}
  ${({ theme }) => theme.media.tablet`
      border: 2px solid yellow;
  `}
  ${({ theme }) => theme.media.mobile`
      border: 2px solid purple;
  `}
`;

function App() {
  const [value, setValue] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const onClick = (): void => {
    alert(`${value} 입력값을 입력받았습니다.`);
  };

  return (
    <BrowserRouter>
    <div className="App">
      <Container>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/community' element = {<Community/>} />
        <Route path = '/login' element = {<LogIn/>} />
      </Routes>
 
      </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
