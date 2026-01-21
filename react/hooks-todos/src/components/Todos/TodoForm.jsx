import {
    useState // 私有状态
} from 'react';

const TodoForm = ({onAddTodo}) => {
    // 数据
    // props 参数数据
    // state 私有的数据
    // 单向数据流
    const [text,setText] = useState('')
    // JSX 一定得有唯一的最外层元素 树来编译JS
    return (
        <>
         <h1></h1>
         <form action="">
            <input 
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
         </form>
        </>
    )
}
export default TodoForm;