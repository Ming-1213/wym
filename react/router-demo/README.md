# react-router-dom

- 路由？
  - 后端路由
    暴露资源
  - 前端路由
    - 首页
    - 列表页
    - 登录页
    前端路由负责前端页面导航
- react 开头
  react 生态系统的一部分
  - react 负责响应式、状态管理、组件、hooks等核心功能
    - 体积大、笨重
## react 开发全家桶
- react 19 
- react-router-dom 7.6.3
- react-dom 19 
- redux 4
- react-redux 7
- axios 0.27

## react 特色
react 函数化编程

- 动态路由
  https://juejin.cn/users/123?a=1&b=2#hash
  path/users/:id params

  # restful 国际规范
  url 定义是核心部分
  请求方法：HEAD、PUT、DELETE、POST、GET、PATCH、OPTIONS
  Method 资源的描述
  GET  /user/:id
  GET /post/:id 显示某篇文章
  POST /post 新增文章
  PATCH /post/:id 修改文章
  上传头像等“替换”操作（就是那些不能只修改局部的操作）用PUT
  例如PUT/avatar/:id
  DELETE /post/:id 删除文章
  HEAD /post/:id 查看资源的元信息
  OPTIONS /post/:id 查看支持的方法
  - 后端部分 暴露资源

- 前端路由
  负责不同URL路径到不同组件的映射
- 后端路由
  早期只有后端路由，处理URL路径到处理函数、处理逻辑的映射
  server->http->路由->响应html网页 传统的后端驱动的web开发方式
  展示下一个页面 再来一个请求
  /
  /about
  - 优点是足够简单
  - 前后端耦合 后端要写前端的页面
  - 逻辑、数据库，套页面 MVC 开发方式 Model（数据）View（视图）
  Controller（控制器）
  - 不再以返回页面为目的
  - /api/user/123 接口 返回 JSON 数据 
- 前后端分离 MVVM 开发方式（Model(fetch api) View(就是JSX) ViewModel(视图模型层 useState,数据绑定JSX)）
  - 前后端联调 api开发文档，约定
  - 前后端分离开发， 以API开发文档为约定
  - 后端只负责提供数据
  - 前端只负责页面展示
  - 前后端解耦
  - 前端当家作主
  - 前端也有了路由
    /user/:id path 页面级别组件
  - html/css/js react 框架
    useState
    useEffect
      fetch 后端 api 接口， 拿到数据
      完成web 应用 
      PC/Mobile/App/小程序/桌面端 大前端