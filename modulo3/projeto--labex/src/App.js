import './App.css';
import { ChakraProvider, Button } from '@chakra-ui/react'

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <ChakraProvider>

               HOME
               <Button colorScheme='green'>Publico</Button>
               <Button colorScheme='red'>Privado</Button>
            </ChakraProvider>

         </header>
      </div>
   );
}

export default App;
