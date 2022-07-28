import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dishes from './components/Dishes/Dishes';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Review from './components/Review/Review';
import Order from './components/Order/Order';
import Footer from './components/Footer/Footer';
import Loaders from './components/Loader/Loaders';

function App() {
  const [navActive, setNavActive] = React.useState()
  const [loader, setLoader] = React.useState(false)
  useEffect(()=> {
    setLoader(true)
    setTimeout(()=> {
      setLoader(false)
    }, 5000)
  }, [])
  return (
    <div className="App">
      {/* {loader ? <div className='ovalay'><img src='/ring.gif' alt='preloader' className='loading'/></div> : <Navbar/>} */}
        <Navbar />
         <Home/>
         <Dishes/>
         <About/>
         <Menu/>
         <Review/>
         <Order/>
         <Footer/>
    </div>
  );
}

export default App;
