import React from 'react'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import { AccountProvider } from './context/accountContext'


const App = () => {
  return (
    <AccountProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </AccountProvider>
   
    
  )
}

export default App