import React from 'react';
import Head from './components/Head';
import List from './components/List';
const App:React.FC = () => {
  return (
    <div className='app'>
    <Head />
    <List />
    </div>
  );
}

export default App;
