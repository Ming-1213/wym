import { useState, createElement } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: '标题一'
    },
    {
      id: 2,
      title: '标题二'
    }
  ])
  const element = <h1 className='title'>Hello, world!</h1>;
  const element2 = createElement('h1', {className: 'title', id:'tit'}, 'Hello, world!');
  return (
    <>
      <ul>
        {
          todos.map((todo) => (
            React.createElement('li', {key: todo.id}, todo.title)
          ))
        }
      </ul>
    </>
  )
}

export default App
