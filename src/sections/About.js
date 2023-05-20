import React from 'react'
import styled  from 'styled-components'
import '../components/About.css';
import img from '../assets/Images/mmTjbR2o_400x400.jpeg'
import { useLocomotiveScroll } from 'react-locomotive-scroll';





const Section = styled.section`
position: relative;
min-height: 100vh;
width: 80vw;
display:flex;

margin: 0 auto;
@media(max-width:60em){
  display: flex;
  justify-content: center;
  align-items: center;
}
@media(max-width:40em){
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin-bottom: -2rem;
}
@media(max-width:30em){
  width: 100vw;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
`


const Title = styled.h1`

font-family: "Montserrat", sans-serif;
font-size: 5rem;
font-weight:100;
text-transform: uppercase;
color: #ccc;



position:absolute;
top: 0.5rem;
left: 15%;
z-index:5;

@media(max-width:60em){
  display:block;
  font-size: 3rem;
  left: 0%;
}
@media (max-width:40em){
  display:block;
  font-size: 2rem;
  left: -4%;
}
`

const Left = styled.div`
width: 50%;
font-size: 1rem;
font-weight: 100;
font-family: "Montserrat", sans-serif;
position:relative;
z-index:5;
margin-top: 12rem;
color:#ccc;


line-height: 1.5rem;

@media(max-width:60em){
  width: 50vw;
  margin-top: 2rem;
  font-size: 1.5rem;
}
@media (max-width:40em){
  width: 100vw;
  margin-top: 4rem;
  font-size: 0.9rem;
  padding-left: 1rem;
}
`
const Right =styled.div`
width: 50%;
position: relative;



img{
    width: 70%;
    height: auto;
    position: absolute;
    top: 26%;
    left: 20%;

    

    @media (max-width: 60em){
      width: 100%;
      margin-top: -10rem;
      
    }

    @media (max-width: 40em){
      display:none;
    }
}


`


const About = () => {


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
    <Section id="fixed-target" className='about'>
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>
        huda a bakht
        </Title>
        <Left data-scroll >
        Salam/ Hello! I'm Huda, a passionate web developer specializing in frontend development. I love creating remarkable experiences on the web and bringing ideas to life. <br/><br/>

My journey as a tech enthusiast started during my school days, where I delved into the world of programming by learning C++. Since then, my passion for technology has only grown stronger. <br/><br/>

At present, my main focus lies in building accessible, inclusive products, elegant, responsive, and user-friendly web applications for a diverse range of clients. <br/><br/>

I have been working extensively with JavaScript, React JS, Node JS, and Webflow. I find immense joy in continuously expanding my skill set. <br/><br/>

Feel free to explore my portfolio and <span onClick={() => handleScroll('#contact')} className='get-intouch'>get in touch</span>.

        </Left>
        <Right>
           <img src={img} alt='about me' />
        </Right>
    </Section>
  )
}

export default About