import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';
import Words from './pages/Words';
import WordsSet from './pages/WordsSet';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/auth' element={<Auth/>} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/words' element={<Words/>} />
      <Route path='/wordset' element={<WordsSet/>} />
    </Routes>
  )
}

export default App