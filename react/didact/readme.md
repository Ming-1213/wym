# 手写React

- Dideact
    - 命名空间 namespace
    - 对象字面量

- VDOM
    UI 表达 JSX
    JSX -> 转成VDOM ？

- JSX React 优点
    在JS里编写HTML，极其简便地表达UI的构成
    babel React.createElement 把JSX转成JS
    Dideact.createElement 

- App.jsx -> babel -> Dideact.createElement(tag, props,...children)
    返回的结果 VDOM 
-> render 生成真正的DOM

- babel 将JSX 转译为React.createElement方法调用
   给相应的参数，生成VDOM
   @babel/preset-react pragma 编译后的函数名
   pragma JSX 不是react 的专属， vue中也可以用jsx

## createElement

- App.jsx -> babel -> Dideact.createElement(tag, props,...children)
返回的结果 VDOM