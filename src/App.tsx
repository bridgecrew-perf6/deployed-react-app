import React from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Grommet, Main, Header, Text } from 'grommet';

const theme = {
  global: {},
};

const App = () => {
  return (
    <Grommet theme={theme}>
      <GlobalStyles />{' '}
      <Header background='light-4' pad='small'>
        <Text size='small'>Welcome</Text>
      </Header>
      <Main pad='small'>
        I am Main! Main is a good place to place your content.
      </Main>
    </Grommet>
  );
};

export default App;
