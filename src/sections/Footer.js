import React from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import styled from 'styled-components';
import logo from '../assets/Images/logo.png';


const Section = styled.section`
min-height: 10vh;
width: 100vw;
margin 5rem auto;
margin-bottom:1rem;


display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background-color: transparent;
color: #ccc;

position: relative;


.footer-div{
  width: 100vw;
 border-top:0.5px solid #555;
}

.dot{
  width: 5px;
  height: 5px;
  border-radius: 10px;
  background-color: #ccc;
  margin-top: 0.5rem;
}



ul{
  display: flex;
  list-style-type: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  gap: 1rem;
  margin: 1rem;
  margin-top: 2rem;
  cursor:pointer;

  @media (max-width:40em){
   font-size:0.7rem;
   margin:0;

  }
}




.footer-components{
  display:flex;
  gap: 15rem;


@media (max-width: 60em){
  gap: 1rem;
}
  @media (max-width:40em){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin-top:0.3rem;
    gap: 1rem;

   }
}




img{
  width:2vw;
  height: 4vh;

  margin: 1rem;
  margin-top: 1.7rem;
  margin-left: 9rem;

@media (max-width: 60em){
  display:none;
}

  @media (max-width:40em){
    display:none;
  }
}


`

const Footer = () => {

const {scroll} = useLocomotiveScroll();

const handleScroll = (id) => {
  let elem = document.querySelector(id);

  scroll.scrollTo(elem,
    {
      offset:'-100',
      duration: '2000',
      easing: [0.25,0.0,0.35,1.0]
    })
}

  return (
    <Section>
      <div className='footer-div'/>
      <div className='footer-components'>
      <ul>
     <li onClick={() => handleScroll('#home')}> Home</li>
      <div className='dot'/>
      <li onClick={() => handleScroll('.about')}> About</li>
      <div className='dot'/>
      <li onClick={() => handleScroll('#projects')}> Projects</li>
      </ul>
      <img src={logo} alt='logo'/>
      <ul>
      <li><a href='https://github.com/hudaarifyasin' target='_blank' rel='noreferrer' >Github</a> </li>
        <div className='dot'/>
        <li><a href='https://instagram.com/whothecoder' target='_blank' rel='noreferrer'> Instagram</a></li>
        <div className='dot'/>
        <li><a href='https://twitter.com/whothecoder' target='_blank' rel='noreferrer'>Twitter</a></li>
        <div className='dot'/>
        <li><a href='https://www.linkedin.com/in/huda-a-bakht-8119b7213/' target='_blank' rel='noreferrer'> LinkedIn</a></li>
      </ul>
      </div>
    </Section>
  )
}

export default Footer