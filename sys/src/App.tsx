import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedLayout } from './components/ProtectedLayout';

  
function App() {
 
  return (
     <AuthProvider>
       <BrowserRouter>
      <Routes>
       <Route path='/' element={<ProtectedLayout/>}>
        
       </Route>
      </Routes>
    </BrowserRouter>
     </AuthProvider> 
  )
}

export default App
