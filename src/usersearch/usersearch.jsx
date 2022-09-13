import React,{useState} from 'react'
import {Input,Flex,Button, Stack} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const style={
    box:{
        marginTop:'25px'
    },
    buttons:{
        width:'90%',
        marginLeft:'5%',
        marginTop:'10px'
    },
    btn:{
        height:'25px'
    }
}

function SearchUser(){

    const [userName,setUserName]= useState('')

    const userNameHandler=(e)=>setUserName(e.target.value)

    const navigate = useNavigate()

    const user = ()=>{

        if(userName.length>0){

            navigate('/user/'+userName)

        }

    }

    const clearName =()=>setUserName('')

    return(
        <div style={style.box}>
         <Input size='lg'
         placeholder='Enter User Name'
         value={userName}
         onChange={userNameHandler}
         style={{
            width:'90%',
            height:'40px',
            marginLeft:'5%'
         }}/>
         <Stack align={'center'} justify='center' spacing={2} direction='row' 
         style={{
            marginTop:'10px'
         }}>
            <Button colorScheme='teal' size='md' 
            onClick={clearName}
            >Cancell</Button>
            <Button colorScheme='teal' size={'md'}
            onClick={user}
            >Find User</Button>
         </Stack>
        </div>
    )

}

export default SearchUser