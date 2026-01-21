import { 
  useState,
  useEffect,
  lazy,
  Suspense
} from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import {
  getUser
} from './api/user'
import NavBar from './components/NavBar'
const Home = lazy(() => import('./views/Home'))
const Login = lazy(() => import('./views/Login'))
const Pay = lazy(() => import('./views/Pay'))
const RequireAuth = lazy(() => import('./components/RequireAuth'))

function App() {
  useEffect(() => {
    
  }, [])
  return (
    <>
      <NavBar />
      <Routes>
        <Suspense fallback={<div></div>}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pay' element={
          <RequireAuth>
            <Pay />
          </RequireAuth>
        }/>
        </Suspense>
      </Routes>
    </>
  )
}

export default App
