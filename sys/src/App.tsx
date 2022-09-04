import { useState } from 'react'
import { AuthContext, AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route,    } from "react-router-dom";
import { ProtectedLayout } from './components/ProtectedLayout';
import { Login } from './components/Login';

  
function App() {
 
  return (
     <AuthProvider>
       <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login/>}>
        <Route path='/profile' element={<ProtectedLayout/>}>
         
        </Route>
        <Route path='/login' element={<Login/>}>

        </Route>
       </Route>
      </Routes>
    </BrowserRouter>
     </AuthProvider> 
  )
}

export default App
