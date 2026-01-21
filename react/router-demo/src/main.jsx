import {
  BrowsertRouter as Router, // 前端路由
  Routes, // 路由设置容器
  Route // 单条路由
} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
