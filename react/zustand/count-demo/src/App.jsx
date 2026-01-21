import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import { useCounterStore } from './store/count'
import TodoList from './components/TodoList'

function App() {
  const {count} = useCounterStore()
  return (
    <>
      App 中的{count}
      <Counter />
    </>
  )
}

export default App
