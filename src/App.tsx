import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Grommet, Main, Header, Text, WorldMap, Grid, Box } from 'grommet';

const theme = {
  global: {},
};
interface Place {
  name: string;
  location: [number, number];
  color: string;
  content: any;
}
let GALEATA: Place = {
  name: 'Casa',
  location: [43.9964, 11.9101],
  color: 'tomato',
  content: (
    <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
      <Text>Casa</Text>
    </Box>
  ),
};
const App = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setplaces([
        {
          name: 'user-position',
          location: [position.coords.latitude, position.coords.longitude],
          color: 'accent-2',
          content: (
            <Box pad={{ horizontal: 'small', vertical: 'xsmall' }}>
              <Text>Your Position</Text>
            </Box>
          ),
        },
        GALEATA,
      ]);
    });
  }, []);

  const [places, setplaces] = useState<Place[]>([]);
  const [viewPopUp, setviewPopUp] = useState<boolean>(false);

  return (
    <Grommet theme={theme}>
      <GlobalStyles />{' '}
      <Header background='light-4' pad='small'>
        <Text size='small'>Welcome</Text>
      </Header>
      <Main pad='small'>
        <Grid
          rows={['xsmall', 'large']}
          columns={['default', 'large']}
          gap='small'
          areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
          ]}
        >
          <Box gridArea='header' background='brand' />
          <Box gridArea='nav' background='light-5' />
          <Box gridArea='main' background='light-2'>
            <WorldMap color='neutral-1' places={places} />
          </Box>
        </Grid>
      </Main>
    </Grommet>
  );
};

export default App;
