"use client";
import { Box, Button, Flex, Heading, Input, useColorMode,} from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
export default function MyForm() {

    const initialFormData = {
   
        email: "",
        password: "",
     
      };

      const [formData, setFormData] = useState(initialFormData);
      const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
          ...prevData,
          [name]: value,
        }));
      };
      useEffect(() => {
        // Log the form data to the console whenever it changes
        console.log("Form Data:", formData);
      }, [formData]);
      const handleSubmit = (e: any) => {
        e.preventDefault();
    console.log("form submitted") ; 
    setFormData(initialFormData);
      };
   return(
    <>
    
    <form onSubmit={handleSubmit}>
        <Flex height={"70vh"} alignItems={'center'} justifyContent={"center"}>
        
        <Flex
        direction={'column'}
        background={'gray.300'}
        p={12}
        rounded={6}
        position={'relative'}
        >
        <p>{formData.email}</p>
            <Heading mb={6}>Log In</Heading>

            <Input 
            placeholder='your email..' 
            variant={'filled'}
            mb={3}
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleInputChange}
            
            />

            <Input 
            placeholder='*************' 
            variant={'filled'}
            mb={6}
            type='password'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleInputChange}
            
            />

            <Button 
            colorScheme={'teal'}
            type='submit'
            >Log in</Button>
        </Flex>
        </Flex>
        </form>
    </>
   ) 
}