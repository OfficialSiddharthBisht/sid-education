import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  Text,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './components/Home';
import Header from './components/Layout/Header/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
