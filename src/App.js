import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Theme";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./sections/Home";
import { AnimatePresence } from "framer-motion";
import About from "./sections/About";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Shop from "./sections/Shop";
import Contact from "./sections/Contact"
import Footer from "./sections/Footer";
import Loader from "./components/Loader";
import { useEffect } from "react";

function App() {
      //Taken from Locomotive -> line 17 ref
  const containerRef = useRef(null);

  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);


  return (
    <>
      <GlobalStyles/>
      
      <ThemeProvider    theme={dark} >  
          {/*  Taken from npmjs react Locomotive */}
        <LocomotiveScrollProvider
  options={
    {
      smooth: true,
      // ... all available Locomotive Scroll instance options 
      smartphone:{
        smooth: true,
      },
      tablet:{
        smooth: true,
      }
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
    ]
  }
  containerRef={containerRef}
>
 <AnimatePresence>
 {Loaded ? null : <Loader/>}
 </AnimatePresence>
  <ScrollTriggerProxy/>
 <AnimatePresence>
 <main className="App"  data-scroll-container ref={containerRef}>
    <Home/>
    <About/>
    <Shop/>
   <Contact/>
   <Footer/>
  </main>
 </AnimatePresence>
</LocomotiveScrollProvider>

      </ThemeProvider>
    </>
  );
}

export default App;
