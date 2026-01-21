import { 
  useState,
  Fragment // 文档碎片组件 
} from 'react'
import './App.css'

/*function Demo() {
  return (
    // DOM 树多了一层不需要的节点，DOM 解析性能下降
    <Fragment>
      <h1>Hello</h1>
      <p>你好</p>
    </Fragment>
  )
}*/

function Demo({items}) {
  return items.map(item => (
        <Fragment key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
        </Fragment>
      ))
}
function App() {
  const items = [
    {

    }
  ]
  return (
    <>
      
    </>
  )
}

export default App
