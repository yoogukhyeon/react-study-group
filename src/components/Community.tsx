import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import styled from 'styled-components';
import Layout from './layout/Layout';


function Community() {
    const [value, setValue] = useState<string>('');
  
  
    return (
      <div className="App">
          <Layout>
            <h1>COMUUNITY</h1>
          </Layout>
  
      </div>
    );
  }
  
  export default Community;
  