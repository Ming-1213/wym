## hooks todos


- 安排个css 亮点
    - stylus
        css 超集
    - 拥有vite 脚手架
        stylus 预编译 安装stylus vite 直接编译
        vite来自vue社区
    - react 组件设计
        - 开发任务单元
        - 设计组件
            功能 界面 状态 响应式
            -新建Todo表单
            - 修改 列表
            - 删除
        - 按功能划分 粒度
            - form
            - list 列表
                - Item 组件 维护和**性能**
- 字体
    - 设置多个，设备的支持（本地包含）
    - 苹果设备 -apple-system 前端负责用户体验，字体也是体验的一部分
- rem
    - 相对单位
    - 移动端的重要单位 px 不要用了 绝对的
        移动端 宽高不定的 rem(html font-size) vw/vh(viewport), em 相对单位
        使用相对单位，可以在所有设备上适配

- props 组件通信
    - 传递状态
    - 传递自定义事件
    - 直接解构 
        const {
            todos,// 任务
            onAddTodo,// 新增
        } = props 单独结构

- vue和react的区别
