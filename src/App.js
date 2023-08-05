import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Landing from './components/Landing';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { createContext, useReducer } from 'react';
import { initialState,reducer } from './components/reducer/UseReducer';
import { Main } from './components/Main';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/main" element={<Main/>} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
