import { useState } from 'react'
import './App.css'

function App() {
  // react 借鉴了DOM 0 行内的写法
  // 相似，react event并不是原生事件，叫合成事件
  return (
    <>
      <button onClick="doit();">click</button>
    </>
  )
}

export default App
