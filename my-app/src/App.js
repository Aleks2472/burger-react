import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import React from 'react';
import { MyContext } from './MyContext';

function App() {

  const [arrayCart, setArrayCart] = React.useState([])
  const [modalActive, setModalActive] = React.useState(false)
console.log(arrayCart)

  return (
    <MyContext.Provider value={{
      arrayCart,
      setArrayCart,
      modalActive,
      setModalActive
    }}>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </MyContext.Provider>
  );

}

export default App;
