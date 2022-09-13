import logo from './logo.svg';
import './App.css';
import SearchUser from './usersearch';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import routes from './routes';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        {
             routes.map((i,index)=>{

              return <Route path={i.path} element={i.component} key={index}/>

             })
        }
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
