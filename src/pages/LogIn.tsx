import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';

function LogIn() {
  const [value, setValue] = useState<string>('');

  return (
    <div className="App">
      <Layout>
        <h1>Log in</h1>
      </Layout>
    </div>
  );
}

export default LogIn;
