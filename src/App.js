import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import routes from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import React,{useState} from 'react'
import SearchUser from './usersearch';
import UserProfile from './user-profile';

function App() {

  const [userName,setUserName] =useState('')

  const [checkUser,setCheckUser] = useState(false)

  const handleChange=(name)=>{

    setUserName(name)

  }

  const handleCheckUser=(cntrl)=>setCheckUser(cntrl)

  return (
    <ChakraProvider>
        <SearchUser handleChange={(name)=>handleChange(name)} name={userName}
        handleCheckUser={(cntrl)=>handleCheckUser(cntrl)}
        />
        {

          checkUser?
          <UserProfile name={userName}/>
          :null

        }
    </ChakraProvider>
  );
}

export default App;
