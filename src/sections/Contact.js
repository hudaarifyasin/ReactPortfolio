import React from 'react'
import styled from 'styled-components'
import './Contact.css';


const Section = styled.section`
position: relative;
min-height: 100vh;
width: 80vw;
display:flex;
justify-content:center;
align-items: center;




margin: 0 auto;


@media (max-width: 60em){
  width: 100vw; 
    margin-bottom: -20rem;
}
@media (max-width: 40em){
  width: 100vw; 
    margin-bottom: 5rem;
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
left: 28%;
z-index:5;

@media (max-width: 60em){
  display:block;
  left: 18%;
}

@media (max-width:40em){
  display:block;
  font-size: 2rem;
  left: 11%;
}

`

const Form = styled.div`
width: 50vw;
font-size: 1rem;
font-weight: 100;
font-family: "Montserrat", sans-serif;
position:relative;
z-index:5;
color:#ccc;



form{
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

    @media (max-width:60em){
      margin-top: -14rem;
    }
    @media (max-width:40em){
      width: 100%;
    }
}
p{
  @media (max-width:40em){
    font-size: 0.7rem;
    margin-top: 15rem;
  }
}
button{
    border: none;
    background-color: transparent;
    border-bottom: 0.5px solid #ccc;
    padding: 0 2rem;
    padding-bottom: 3px;
    font-family: 'Montserrat', sans-serif;
    color: #ccc;
    text-decoration: underline 0.5px #ccc;
    text-underline-offset: 0.5em;
    transition: text-decoration-color 300ms, text-underline-offset 300ms;

    @media (max-width: 60em){
      display:block;
}
    @media (max-width:40em){
      display:block;
    }

}

button:hover{
        text-decoration-color: transparent;
        text-underline-offset: 0.4em;
        border-bottom: 0.5px solid transparent;
}
`


const contact = () => {
    
  return (
    <Section id='contact'>
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal' >Contact</Title>
        <Form data-scroll className='form-container'>
             <form >

             <p>Let's collaborate and turn your ideas into reality! </p>
                
                <input type='text' name='user_name' placeholder='Name' id=''/>
                <input type='email' name='user_email' placeholder='Email' id=''/> <br/>
                <textarea name='message' placeholder='Message' cols={30} rows={10} id=''/> <br/>
                <button type='submit' value='send'>Send</button>
            </form>
            
             </Form>

       
       
    </Section>
  )
}

export default contact