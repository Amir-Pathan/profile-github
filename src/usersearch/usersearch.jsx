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

function SearchUser({handleChange,name,handleCheckUser}){


    const clearName =()=>{
        
        handleChange('')

        handleCheckUser(false)

    }

    const [message,setMessage] =useState('')

    const isValid=()=>{

        if(name.length>0){

            handleCheckUser(true)

        }else{
            setMessage('Please Enter User Name')
            handleCheckUser(false)
        }

    }

    const change=(e)=>{

        setMessage('')

        handleCheckUser(false)

        handleChange(e.target.value)
    }

    return(
        <div style={style.box}>
         <Input size='lg'
         placeholder='Enter User Name'
         value={name}
         onChange={change}
         style={{
            width:'90%',
            height:'40px',
            marginLeft:'5%'
         }}/>
         <p style={{textAlign:'center',color:'red'}}>{message}</p>
         <Stack align={'center'} justify='center' spacing={2} direction='row' 
         style={{
            marginTop:'10px'
         }}>
            <Button colorScheme='teal' size='md' 
            onClick={clearName}
            >Clear</Button>
            <Button colorScheme='teal' size={'md'}
            onClick={isValid}
            >Find User</Button>
         </Stack>
        </div>
    )

}

export default SearchUser