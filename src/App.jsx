import { useState } from 'react'
import {BrowserRouter ,Routes, Route} from "react-router-dom"
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Error from './components/error/Error'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="*" element={<Error />} />        
        </Routes>   
      </BrowserRouter>
    </>
  )
}

export default App
