import { useState } from 'react'
import Button from './components/Button'
import AnotherButton from './components/AnotherButton'
// import 不只会加载模块，还会运行 路由懒加载
import './App.css'

function App() {

  return (
    <>
      <AnotherButton />
      <Button />
    </>
  )
}

export default App
