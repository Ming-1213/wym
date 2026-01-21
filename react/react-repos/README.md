# react repos 项目开发
- api.github.io/users/username/repos
- 综合react开发全家桶、项目级别、大型的、性能

## 路由设计
    - react-router-dom
    - /users/:username/repos
    - /repos/:username
    - /repos/:id
    懒加载 
    （路由守卫）
    useParams:username
## 数据管理
    App 数据管理
    repos 
    useContext + useReducer + hooks
    createContext + reducer + useRepos 
## react
    组件的粒度
## API
    fetch
    - axios http请求库
    - Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js 中进行 AJAX 请求，支持拦截请求和响应、取消请求、转换数据等特性。
    - 独立的模块，所有请求会从组件中分离到API目录下

## 项目目录结构，项目架构
    - API 
        应用中的所有接口
    - main.jsx
        入口文件
        添加路由，SPA
        添加全局应用状态管理
        
- RepoList 功能模块
    - params 解析
        - useParams 动态参数对象
        - 不要放到useEffect里面
        - 校验id
            不要相信用户的任何提交
        - navigate('/') -> 最好放到useEffect中
- 组件开发模式
    - UI 组件（JSX）
    - 自定义Hooks useRepos
    - 状态管理，已经上升到应用级别 context 来管
        - repos loading error => context value
        - useReducer reducer 函数 
    - 