import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />

      <Contact />

    </div>
  );
}

export default App;
