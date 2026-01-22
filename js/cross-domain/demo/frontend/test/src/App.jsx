import { useState, useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // (async () => {
    //   // 前后端联调
    //   const res = await fetch('http://localhost:8080/api/hello');
    //   const data = await res.json();
    //   console.log(data);
    // })()
  }, [])
  return (
    <>
      <img src="https://p1.ssl.qhimgs1.com/sdr/400__/t04d21e1ac061ebf7e7.jpg" alt="" />
    </>
  )
}

export default App
