import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const handleClick = () => {
    // react 性能优化，合并多次更新 统一处理
    // 重绘重排
    // 数据绑定，界面更新
    // JS 引擎 V8，渲染引擎 Blink

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setState 函数式更新语法，保证每一个更新都基于上一个更新
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }
  return (
    <>
      <p>当前记数:{count}</p>
      <button onClick={handleClick}>+3</button>
    </>
  )
}

export default App