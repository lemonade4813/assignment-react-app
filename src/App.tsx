import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ArrowSvg from "./assets/arrow.svg?react";
import { useEffect } from 'react';


function App() {


  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      window.scrollBy({
        top: event.deltaY * 0.5,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({top : 0, behavior : 'smooth'});
  }

  return (
    <main>
      <Header/>
      <Outlet/>
      <Footer/>
      <ArrowSvg className='move-to-top-button' onClick={moveToTop}/>
    </main>
  )
}

export default App
