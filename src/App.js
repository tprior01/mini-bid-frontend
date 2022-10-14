import React from 'react';
import './App.css';
import NavbarLoggedOut from './components/NavbarLoggedOut.js';
import AppRouter from './components/AppRouter.js';

export default function App() {
  return (
    <div className='App'>
        <NavbarLoggedOut />
        <AppRouter />
    </div>
  )
}