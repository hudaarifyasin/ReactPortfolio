import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Images/logo.png'
import {motion} from 'framer-motion'



const Container = styled.div`
position: absolute;
top: 0rem;
left: 1rem;


width:100%
z-index:6;
margin-top:1rem;


img{
  @media (max-width: 60em){

      width:100vw;
      height:80vh;
      position: absolute;
      top:4rem;
      left:-1rem;
}
@media(max-width:48em){
    img{
    width:100vw;
    height:80vh;
    position: absolute;
    top:3rem;
    left:-1rem;
    }
  }

`


const Logo = () => {
  return (
    <Container>
        <motion.img
        
        initial={{
            opacity: 0,
            x: -50
            
        }}
        animate={{
            opacity: 1,
            x: -5
        }} 
        transition={{
            duration: 3,
            delay: 3,
            ease: 'easeInOut'
        }}

        src={logo}  />

        </Container>
  )
}

export default Logo