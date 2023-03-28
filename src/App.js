import { ChakraProvider } from '@chakra-ui/react'

import './App.css';
import Cart from './components/Cart';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <p>Welcome Sailor, let's see Flagship in action today.</p> 
        </header>
        <Cart />
      </div>
    </ChakraProvider>
  );
}

export default App;
