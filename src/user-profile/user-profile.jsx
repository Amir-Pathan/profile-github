import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';     

function UserProfile({name}){


    const [user,setUser] = useState({})
    
    const [isReady,setReady] = useState(false)

    const [date,setDate] = useState('')

    const [notFound,setNotFound] = useState(false)


    useEffect(()=>{
        
        axios.get('https://api.github.com/users/'+name).then((res)=>{

           setUser(res.data)
    
           setReady(true)

           var sp = res.data.created_at.split('T')

           setDate(sp[0])


        }).catch((err)=>{
            setNotFound(true)
        })
        
    },[])

    return(
        <>
        {
            isReady?
        <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
       
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        
        <Flex justify={'center'} mt={12}>
          <Avatar
            size={'xl'}
            src={user.avatar_url}
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {user.login}
            </Heading>
            <Text color={'gray.500'}>{user.name}</Text>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user.public_repos}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                  Public Repos
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{user.public_gists}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Public Gists
              </Text>
            </Stack>
          </Stack>
          <Stack  direction={'row'} justify={'center'}>
          <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>{date}</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Account Create Dates
              </Text>
            </Stack>
          </Stack>

        </Box>
      </Box>
    </Center>:
    notFound?
    <h1 style={{textAlign:'center',marginTop:'20px',color:'red'}}>Not Found</h1>:
    null
}
        </>
    )

}

export default UserProfile