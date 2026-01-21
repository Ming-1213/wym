import {
  BrowserRouter as Router, // 前端路由
  Routes, // 路由设置容器
  Route // 单条路由
} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import Products from './pages/Products';

function App() {
  return (
    <>
      {/* 前端路由接管一切，配置 */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/user/:id" element={<UserProfile />}/>
          <Route path="/user/:id" element={<Products />}/>
            {/* 二级路由 */}
            <Route path=":productId" element={<ProductDetails />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App