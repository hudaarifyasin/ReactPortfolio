import React from 'react'
import styled  from 'styled-components'
import CoverPicture from '../components/CoverPicture'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'



const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
`
const Home = () => {
  return (
    <Section id='home'>
        <CoverPicture />
        <Logo/>
        <NavBar/>
    </Section>
  )
}

export default Home