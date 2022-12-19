import React, { useState } from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';


function Home() {
    const [value, setValue] = useState<string>('');
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    };
  
    const onClick = (): void => {
      alert(`${value} 입력값을 입력받았습니다.`);
    };
  
    return (
      <div className="App">
          <Layout>
            <h1>input and button</h1>
            <Input type="text" value={value} onChange={onChange} />
            <Button onClick={onClick} text="click alert" />
          </Layout>
  
      </div>
    );
  }
  
  export default Home;
  