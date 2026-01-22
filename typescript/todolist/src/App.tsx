import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react + typescript
// 在大型项目里面，JS可能会有一些问题，主要因为弱类型
// jsx 后缀改成tsx
// 函数进行类型约束
// const HelloComponent = () => {
//   // void 空 ReactNode 
//   return 1
// }

function App() {
  // 编译阶段 
  // 多写了一些类型声明文件
  // 多写一些代码 类型声明 代码质量保驾护航 
  let count:number = 10;
  const title:string = "Hello ts";
  const isDone:boolean = true;
  // const list:number[] = [1, "2", 3] 这里的报错可以用联合类型来解决 const list:(number|string)[] = [1, "2", 3]
  const tuple: [string, number] = ["小明", 18]; // 元组类型
  // 枚举类型
  // 若启用 “erasableSyntaxOnly” 则移除枚举语法，这里保留原枚举定义以适配需求
  enum Status {
    Pending,
    Fullfilled,
    Rejected
  }
  const pStatus: Status = Status.Pending;
  // 对象的约束？
  // 接口类
  interface User {
    name:string;
    age: number;
    isSingle?: boolean;
  }
  // 使用接口来约定类型
  const user:User = {
    name:"小芳",
    age: 18,
    isSingle: true

  }
  return (
    <>
      {count}
      {title}
      {user.name} {user.age}
      {/* typescript 很严格 */}
      <HelloComponent name="小明" />
    </>
  )
}

export default App
