import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import AppAppBar from './js/AppBar.js';
import Home from './js/pages/home/HomeMain.js';
import About from './js/pages/about/AboutMain.js';
import AppFooter from './js/AppFooter.js';
import BlockChain from './js/pages/services/blockchain.js';
import Software from './js/pages/services/software.js';
import Careers from './js/pages/careers/careers.js';
import Contact from './js/pages/contact/contact.js';
import Blog from './js/pages/blog/Blog.js';
import Portfolio from './js/pages/portfolio/Portfolio.js';
import ScrollToTop from './js/pages/ScrollTop.js';
// import AppAppBar from './js/pages/components/AppBar.js';

function App() {
  

  const [mode, setMode] = useState('light')

  const toggleColorMode = () => {
    let next 
    setMode(prev => {
      next = prev === 'dark' ? 'light' : 'dark'
      return next
    })

    document.documentElement.setAttribute('data-theme', next)
  }


  return (
    <ThemeProvider theme={createTheme({palette: {mode}})}>
      <Router>
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        {/* <AppAppBar/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blockchain' element={<BlockChain />} />
          <Route path='/software' element={<Software />} />
          <Route path='/career' element={<Careers />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
        <AppFooter/>
        <ScrollToTop/>
      </Router>
      
    </ThemeProvider>
  );

 
}

export default App;
