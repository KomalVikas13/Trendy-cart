import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import HomeSection1 from './components/HomeSection1'
import HomeSection2 from './components/HomeSection2'
import Login from './components/Login'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import Filter from './components/Filter'
import ProductsComp from './components/ProductsComp'

function App() {
  useEffect(() => {
    const adjustPadding = () => {
      const fixedElement = document.querySelector(".fixed");
      const scrollElement = document.querySelector(".scroll");
      const adjustment = fixedElement.offsetHeight;
      scrollElement.style.paddingTop = adjustment + 'px';
    };

    adjustPadding();

    window.addEventListener('resize', adjustPadding);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('resize', adjustPadding);
    };
  }, []);

  return (
      <div className='app'>
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
              <Route path='/' element={
                <>
                  <HomeSection1></HomeSection1>
                  <HomeSection2></HomeSection2>
                </>
              }></Route>
            </Routes>
            <Routes>
              <Route path='womenSection' element={
                  <div className='filter-products bg-light'>
                    <Filter></Filter>
                    <ProductsComp></ProductsComp>
                  </div>
                }></Route>
              <Route path='menSection' element={
                  <div className='filter-products bg-light'>
                    <Filter></Filter>
                    <ProductsComp></ProductsComp>
                  </div>
                }></Route>
              <Route path='allSection' element={
                  <div className='filter-products bg-light'>
                    <Filter></Filter>
                    <ProductsComp></ProductsComp>
                  </div>
                }></Route>
            </Routes>
          <Footer></Footer>
        </div>
      </div>
  )
}

export default App
