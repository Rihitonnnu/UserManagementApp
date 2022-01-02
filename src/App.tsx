import './App.css';
import {ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import {Router} from "./router/Router";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
