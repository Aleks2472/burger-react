import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import React from 'react';
import { MyContext } from './MyContext';

function App() {

  const [arrayCart, setArrayCart] = React.useState([])
  const [modalActive, setModalActive] = React.useState(false)
  const [language, setLanguage] = React.useState('en')

  if (modalActive === true) {
    document.body.style.overflowY = 'hidden'
  }

  if (modalActive === false) {
    document.body.style.overflowY = 'auto'
  }

  return (
    <MyContext.Provider value={{
      arrayCart,
      setArrayCart,
      modalActive,
      setModalActive,
      language,
      setLanguage
    }}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </MyContext.Provider>
  );

}

export default App;
