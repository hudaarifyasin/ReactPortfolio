import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Images/logo.png'

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;
  }

`;


const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  padding-top: 0.5rem;


  img{
      width:10vw;
         height: 20vh;
       overflow: visible;


       @media (max-width: 60em){
        width:30vw;
       }
      }

  @media (max-width: 40em) {
    
    img{
      width:18vw;
         height: 10vh;
       overflow: visible;
      }
  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* <img src={star} alt="Wibe Fashion" /> */}
      
      <Text variants={textVariants} initial="hidden" animate="visible">
      <img src={logo} alt='Huda A Bakht'/>
      </Text>
    </Container>
  );
};

export default Loader;
