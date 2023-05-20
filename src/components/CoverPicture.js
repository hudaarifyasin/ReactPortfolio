import React from 'react'
import styled from 'styled-components'
import './CoverPicture.css'
import Ring from '../assets/Images/ring.png'
import {motion} from 'framer-motion'


const PictureContainer = styled.section`
width:100%;
height: 100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;


@media (max-width: 60em){
  img{
    display:none;
  }  
}

@media (max-width: 40em){
  img{
    display:none;
  }  
}

`
const DarkOverlay = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:1;


background-color:  ${props => `rgba(${props.theme.bodyRgba}, 0.9)`};`

const Title = styled.div`
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
z-index:1;
margin-top:1rem;


display: flex;
justify-content: center;
align-items: center;
color: #ccc;


p{
  @media (max-width: 60em){
    margin-bottom: 3rem;
    }
}

h2{
  font-family: "Montserrat", sans-serif;
  font-size: 5rem;
  font-weight:100;
  text-transform: uppercase;

  @media (max-width: 60em){
  font-size: 4rem;
  }

  @media(max-width:48em){
    font-size: 2rem;
  }
}

.Huda{
  display:flex;
  flex-direction: row;
}

`

const container ={
  hidden : {
    opacity: 0,
  },
  show: {
    opacity: 1,
    
     transition:{
      delayChildren:2,
      staggerChildren: 0.3,
     }
  },
}
const item ={
  hidden: {
    opacity: 0,
  },
  show:{
    opacity:1,
  }
}

const CoverPicture = () => {


  return (

    <PictureContainer>
       <DarkOverlay/>
       
      <Title>
        <div>
        <p>Salam/ Hi, I'm </p> 
        <motion.div className='Huda' variants={container} initial="hidden" animate="show">
          <motion.h2 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed='4'>H</motion.h2> 
          <motion.h2 variants={item} data-scroll data-scroll-delay='0.09' data-scroll-speed='4'>u</motion.h2> 
          <motion.h2 variants={item} data-scroll data-scroll-delay='0.06' data-scroll-speed='4'>d</motion.h2> 
          <motion.h2 variants={item} data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>a</motion.h2>
          </motion.div>
          <h2 data-scroll data-scroll-delay='0.04' data-scroll-speed='4'>Web Developer</h2>
          </div>
        </Title>

        {/* Rings */}
        <div>
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
            duration: 2,
            delay: 0.5,
            ease: 'easeInOut'
        }}
 src={Ring} alt="Huda" className='ringOne ring'/>
          
          <motion.img 
           initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }} 
        transition={{
            duration: 2,
            delay: 0.5,
            ease: 'easeInOut'
        }}
src={Ring} alt="Huda" className='ringTwo ring'/>
          
        </div>

    </PictureContainer>
  ) 
}

export default CoverPicture