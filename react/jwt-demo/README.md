# jwt 登录鉴权
- isLogin, user 全局状态
- mock 登录模拟
    - apifox api请求模拟
    有了apifox之后，不用写页面就可以发送请求
    curl 命令发送请求

- 会话授权
    - 服务器知道我们是谁
    - http 是无状态的
        - 请求头 cookie
        - server 种下一个cookie 唯一的sid值 sid => user 
        - 每次请求中 从cookie 中读取到sid
        - 服务器多就知道是我们了

    - 登录和用户鉴权方案JWT JSON Web Token
        - {id:112, username:'帅得惊动党中央', level:4...} user JSON格式的数据
        - 一种算法 生成一个hash 串，成为一个token
        - 服务器生成一个token后 下发给客户端（token可以理解为令牌、通关文牒）
        - 带上token 
        - decode 解码
             {id:112, username:'帅得惊动党中央', level:4...} 
        - 客户端每次请求都带上这个token
        - 服务器验证这个token 验证通过就返回数据
- jsonwebtoken
    jwt 鉴权的库 
    sign 颁发一个token user,secret
    decode 验证 token user
    - pnpm i jwt
    - import jwt from 'jsonwebtoken'
    - sign
    - HTTP 请求头 Authorization 带上token
    - Cookie 每次自动带上
    - token需要手动设置的

- 加盐
    加个secret
    传递token 前面会加上Bearer ${token} 持有者
    通过http headers Authorization 传递token
- 前端的用户权限状态 流程
    - zustand
        登录、user useUserStore
    - 登录页面
        受控/非受控组件
    - 路由守卫
    - api/