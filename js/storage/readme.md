# Storage 存储
  - 前端存储
   - cookie
   存储啥玩意
     - 登录状态
     - 购物车
   - localStorage
   - sessionStorage
   - indexDB
  - 后端存储
  - 缓存

## 首页
- 用户的登录状态
  cookie
  - 服务器
  - 界面有哪些状态
    未登录 已登录 用户身份 时间限制（过了时间限制自动退出登录，称为“过期”）

- 前后端联调
  - 前端表单
    阻止默认行为
    收集表单数据
    fetch 请求 await 等待服务器端响应请求
    POST / login API 地址 前后端接口
    后端
    路由 / login
    用户名和密码的校验
    通过设置cookie 响应头 set-cookie
    服务器端的返回 http 一起回到请求端
    前端存储里 Cookie 有了内容

## Cookie
Cookie 是浏览器存储的小文本数据，用于记录用户会话、偏好等信息，便于网站识别用户。
- 每次http的时候，会自动带上cookie信息
- cookie 小饼干（内容小） 关键的身份信息，存储在浏览器中（位置）
- http 协议还是无状态的，每次请求独立