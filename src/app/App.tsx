import React from 'react';
//routing
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Auth from '../pages/Auth';
import SignUp from '../pages/SignUp';
import Words from '../pages/Words';
import WordsSet from '../pages/WordsSet';
//styles
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/words' element={<Words/>} />
        <Route path='/wordset' element={<WordsSet/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App