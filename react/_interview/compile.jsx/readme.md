- JSX ?
    - JSX 不能独立运行
    - vite 工程化
        jsx -> React.createElement
    - 必须在 React 环境中运行

- babel
    Make JavaScript Great Again!
    大胆使用JS 最新语法，不用等待 
    es6 promise -> es8 async await
    let -> var
    箭头函数 -> 普通函数
    解构赋值 -> 普通赋值
    模板字符串 -> 字符串拼接
    类 -> 函数
    模块 -> 函数
    等等
    编译成浏览器能识别的代码
    编译过程：
        1. 解析：词法分析、语法分析、作用域分析
        2. 转换：
        () => {} -> function () {}
- 编译的流程：
    - pnpm i @babel/cli @babel/core -D
        @babel/cli babel的命令行工具
        @babel/core babel 的核心工程
        babel 负责JS 转码
        -D 开发阶段的依赖 dev
        上线后是不用的
    - ./node_modules/.bin/babel
        转换的规则
        react -> IOS 代码
        es6+ -> es5
        JSX -> React.createElement