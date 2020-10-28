import React, {useEffect, useState} from 'react';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useWindowScroll } from 'react-use';
import ArrowUp from './images/arrow-up.svg';
import './App.scss';

function App() {
  const { y: pageYOffset } = useWindowScroll();
  const [scrollBtnVisible, setVisibility] = useState(false);

  useEffect(() => {
    if(pageYOffset > 200) {
      setVisibility(true)
    } else {
      setVisibility(false);
    }
  }, [pageYOffset])

  function onScrollTop() {
    window.scrollTo({ top: 0, behaviour: 'smooth'})
  }

  return (
    <div className="App">
      <Home/>
      <About/>
      <Skills />
      <Work/>
      <Contact/>
      {
        scrollBtnVisible && (
          <div className="scroll-up" onClick={_ => onScrollTop()}>
            <img src={ArrowUp} alt="scroll-up"/>
          </div>
        )
      }
    </div>
  );
}

export default App;
