import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import { useEffect } from 'react';

function App() {
  useEffect( () => {
    const data = fetch("/data.txt").then(()=>{
      console.log(data);

    });
  },[])

  return (
    <ChakraProvider>
      <div className="App">
        
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'0px 1fr 0px'}
          gridTemplateColumns={'20rem 1fr'}
          h='100vh'
          gap='1'
          color='blackAlpha.700'
          fontWeight='bold'
        >
          <GridItem pl='2' bg='#F5F5F5' area={'nav'}>
            <Nav />
          </GridItem>

          <GridItem pl='2' bg='#F5F5F5' area={'main'}>
            <Main />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
}

export default App;
