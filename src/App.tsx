import React from 'react';
import Head from './components/Head';
import Home from './pages/Home';
import Write from './pages/Write';
import { Route, Routes } from 'react-router-dom';

const App:React.FC = () => {
  return (
    <div className='app'>
    <Head />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
    </Routes>
    </div>
  );
}

export default App;
