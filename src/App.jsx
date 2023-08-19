import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Cardskill from './components/cardskill';
// import Portfolio from './components/Portfolio';
// import Footer from './components/footer';
import Gamestore from './page/Gamestore';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './page/Home';
import Kawula from './page/Kawula';
import Sonokeling from './page/Sonokeling';
import Rh from './page/Rh';
import Palmbeach from './page/Palmbeach';
import Herb from './page/Herb';
// import Portfolio from './components/Portfolio';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <div className='app'>
    <HashRouter>
      <motion.div>
        {/* <Navbar /> */}
        {/* <Hero />
        <Cardskill />
        <Portfolio/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/kawula" element={<Kawula />} />
          <Route path="/gamestore" element={<Gamestore />} />
          <Route path="/sonokeling" element={<Sonokeling />} />
          <Route path="/rh" element={<Rh />} />
          <Route path="/palmbeach" element={<Palmbeach />} />
          <Route path="/herb" element={<Herb />} />
        </Routes>
        {/* <Footer /> */}
      </motion.div>
    </HashRouter>
    </div>
  );
}

export default App;
