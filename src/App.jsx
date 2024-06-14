import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomeSection1 from './components/HomeSection1'
import HomeSection2 from './components/HomeSection2'
import AnchorsWomen from './components/AnchorsWomen'
import AnchorsMen from './components/AnchorsMen'
import AnchorsKids from './components/AnchorsKids'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import WomenProducts from './components/products/WomenProducts'

function App() {
  // useEffect(() => {
  //   const adjustPadding = () => {
  //     const fixedElement = document.querySelector(".fixed");
  //     const scrollElement = document.querySelector(".scroll");
  //     const adjustment = fixedElement.offsetHeight;
  //     scrollElement.style.paddingTop = adjustment + 'px';
  //   };

  //   adjustPadding();

  //   window.addEventListener('resize', adjustPadding);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     window.removeEventListener('resize', adjustPadding);
  //   };
  // }, []);

  return (
    <>
    
      <WomenProducts></WomenProducts>
      {/*<div className='app'>
       
         <div className="fixed">
          <Header></Header>
          <NavigationBar></NavigationBar>
          <Routes>
            <Route path='login' element={<Login></Login>}></Route>
            <Route path='register' element={<Register></Register>}></Route>
          </Routes>
        </div>
        <div className='scroll'>
            <Routes>
              <Route path='womenSection' element={<AnchorsWomen></AnchorsWomen>}></Route>
              <Route path='menSection' element={<AnchorsMen></AnchorsMen>}></Route>
              <Route path='kidsSection' element={<AnchorsKids></AnchorsKids>}></Route>
            </Routes>

          <HomeSection1></HomeSection1>
          <HomeSection2></HomeSection2>
          <Footer></Footer>
        </div>
      </div> */}
      </>
  )
}

export default App
