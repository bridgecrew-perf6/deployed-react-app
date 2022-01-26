import React, { useEffect, useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import {
  Grommet,
  Main,
  Header,
  Text,
  WorldMap,
  Grid,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from 'grommet';
import axios from 'axios';

function generateRandomLatLng() {
  var num = Math.random() * 180;
  var posorneg = Math.floor(Math.random());
  if (posorneg == 0) {
    num = num * -1;
  }
  return num;
}
const MINUTE_MS = 3000;

const theme = {
  global: {},
};
interface Place {
  location: [number, number];
  // name: string;
  // color: string;
  // content: any;
}
const App = () => {
  const [places, setplaces] = useState<any>([]);
  const [loading, setloading] = useState<boolean>(false);
  const [data, setdata] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      pullInOut();
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  const pullInOut = () => {
    // let cp = [...places];
    // if (cp.length > 3) cp.pop();
    // cp.push({
    //   color: 'accent-2',
    //   location: [-33.8830555556, 151.216666667],
    // });
    // setplaces(cp);
  };
  const onSelectPlace = (p: [number, number]) => {
    axios
      .get(
        `/api/get_places?location=${-33.8830555556},${151.2166666667}&radius=500`,
      )
      .then(res => setdata(res.data));
    setloading(true);
  };
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
          <Box gridArea='nav' background='light-5'>
            {data.map(item => (
              <Card height='small' width='small' background='light-1'>
                <CardHeader pad='medium'>{item.name}</CardHeader>
                <CardBody pad='medium'>Body</CardBody>
                <CardFooter
                  pad={{ horizontal: 'small' }}
                  background='light-2'
                ></CardFooter>
              </Card>
            ))}
          </Box>
          <Box gridArea='main' background='light-2'>
            <WorldMap
              color='neutral-1'
              onSelectPlace={() => onSelectPlace([1, 1])}
              places={places}
            />
          </Box>
        </Grid>
      </Main>
    </Grommet>
  );
};

export default App;
