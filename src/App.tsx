import React, { FC } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import 'antd/dist/antd.css';

const App: FC = ({ ...props }) => {
  return (
    <BrowserRouter>
      <GlobalStyles></GlobalStyles>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
