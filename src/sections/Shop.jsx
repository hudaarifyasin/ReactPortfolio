import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import './Shop.css';


import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";


const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  
`;

const Title = styled.h1`

font-family: "Montserrat", sans-serif;
font-size: 5rem;
font-weight:100;
text-transform: uppercase;
color: #ccc;



position:absolute;
top: 0.5rem;
left: 15%;
z-index:11;

  @media (max-width: 64em) {
    font-size: 5rem;
  }
  @media (max-width: 48em) {
    display:block;
  }
  @media (width <= 30em){
    font-size: 2rem;
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: #121212;
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    width:47%
}


  p {
    font-size: ${(props) => props.theme.fontmd};
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 64em) {
        width: 55%;
        font-size: 0.9rem;
        margin-top: 3rem;
  }
  @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontxs};
      margin-top: 1rem;
  }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: #1f1f1f;
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  .project-des{
    width:60%;

    @media (max-width: 60em){
        font-size: 1.2rem;
  }

  @media (max-width: 40em){
    font-size: 1rem;
}
  }

  @media (max-width: 30em) {
    font-size:0.7rem;
    }
`;

const Item = styled(motion.div)`
  width: 20rem;
  margin-right: 6rem;

  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  img {
    width: 100%;
    height: 50%;
    cursor: pointer;
    box-shadow: 10px 10px 10px #000000;
    margin-bottom: 2rem;
  }

  h1 {
    color:#fff;
    text-align: center;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;

    @media (max-width: 64em) {
      display: block;
}

    @media (max-width: 30em) {
      display: block;
      font-size: 1rem;
      }
  }


  @media (max-width: 48em) {
    width: 15rem;
  }
`;
//data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="projects">
      <Title data-scroll data-scroll-speed="-1">
        Projects
      </Title>
      <Left>
        <p>
        During my journey of learning web development, I have accomplished several impressive projects that showcase your growth and skills.  
          <br /> <br />
         With such accomplishments, I am well-prepared to take on new challenges and continue thriving in the field of web development.
        </p>
      </Left>
      <Right data-scroll ref={Horizontalref}>
       <a href="https://hb-articlesummarizer.netlify.app" target="_blank" rel="noreferrer"> <Product img={img3} title="Article Summarizer"/>
       <p className="project-des" >A React project that uses Ai Summarizer from Rapid API to summarize long articles.</p></a>
        <a href="https://anotherbarber.netlify.app" target="_blank" rel="noreferrer"><Product img={img1} title="Barbershop"/>
        <p className="project-des" >Final project for my Bootcamp. Made with HTML CSS and JavaScript</p></a>
        <a href="https://hb-passwordgenerator.netlify.app" target="_blank" rel="noreferrer"><Product img={img2} title="Password Generator" />
        <p className="project-des" >A simply but very helpful Strong Password Generator. Made with HTML CSS and JavaScript</p></a>
        <a href="https://huda-tech.netlify.app" target="_blank" rel="noreferrer"><Product img={img5} title="Tech." />
        <p className="project-des" >My first take on independent coding. A project made only with HTML and CSS.</p></a>
        <a href="https://hb-noteapp.netlify.app" target="_blank" rel="noreferrer"><Product img={img6} title="Note App" />
        <p className="project-des" >A very useful Note taking App with Bootstrap and JavScript. Notes can be added & deleted.</p></a>
    
      </Right>
    </Section>
  );
};

export default Shop;
