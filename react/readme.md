# react 业务
friends 数据
工作是开发一个App
挂载点
页面的显示
- 原生JS
  DOM 编程
  用底层API的缺点：底层API不够高效，框架能让人聚焦于业务
  前端切图崽（HTML+CSS+JS）-> 前端开发工程师（微博，美团），此时引入JS框架（vue，react）-> node全栈开发（node + 数据库）->react native，可以做移动端应用-> AIGC时代 做AI应用 -> 全干工程师（牛马）
  前面这些东西可做web应用开发，react native 可以做移动端应用，AIGC 可以做AI应用，全干工程师可以做全栈应用，
  Node(server) AI 统领一切 JS AI全干工程师

## **项目**的创建
- npm 是什么？ 
npm，全称是node package manager，包管理工具，node自带的 安装react package App开发能力
- 安装react package
- npm init vite 
  按vite模板初始化（init）一个项目，选择react，选择js
  vite vue/react 项目模板和**工程**化
  - 选择一些配置
  - react
  - js
  项目模板，基于它开始开发
- 进入项目目录(cd 项目名)
- npm i 安装一下依赖
  node_modules 包所在
- npm run dev 启动项目，打开浏览器， 3000 端口启动应用，输入localhost:5173，看到页面了，说明项目启动成功了

# 5 W
- What Web App
- How npm init vite 初始化一个项目，选择react，选择js
- 安装依赖
- 启动应用 http 5173 react 技术栈 Web App
远离JS API 编程，面向业务
## 响应式业务

## TODOS 任务列表
  - 数据['脱单', '找对象', '相亲']
    数据在页面上渲染 react 提供点啥 支持这个业务

## react 初体验
- react 组件是完成开发任务的最小单元
- 组件是一个函数
- 返回html
- 函数体里面 return 之前可以声明数据和各种业务逻辑
- {} js 表达式 不用写DOM API

## 响应式数据
- 数据是会发生改变的，数据状态 state
- [todos,setTodos] = useState(初始值) 使用一个数据状态，返回一个数组
数组第一项 数据项
数组第二项 修改数据项的方法
