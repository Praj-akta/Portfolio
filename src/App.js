import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Sidebar from './components/Sidebar';
import { useWindowScroll } from 'react-use';
import ArrowUp from './images/arrow-up.svg';
import Education from './components/Education';
import Experience from './components/Experience';
import './App.scss';

function App() {
  const { y: pageYOffset } = useWindowScroll();
  const [scrollBtnVisible, setVisibility] = useState(false);

  useEffect(() => {
    if (pageYOffset > 200) {
      setVisibility(true)
    } else {
      setVisibility(false);
    }
  }, [pageYOffset])
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const number = Number(entry.intersectionRatio).toFixed(1);
        const id = entry.target.getAttribute('id');
        if (number > 0.2) {
          document.querySelector(`a[href="#${id}"]`).parentElement.classList.add('active-link');
        } else {
          document.querySelector(`a[href="#${id}"]`).parentElement.classList.remove('active-link');
        }
      });
    });
    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
  });

  function onScrollTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="App">
      <div>
        <Sidebar />
        <div className="components-container">
          <Home />
          <About />
          <Work />
          <Skills />
          <Education />
          <Experience />
        </div>
      </div>
      {
        scrollBtnVisible && (
          <div className="scroll-up" onClick={_ => onScrollTop()}>
            <img src={ArrowUp} alt="scroll-up" />
          </div>
        )
      }
    </div>
  );
}

export default App;
