# js（原生）->vue+react

## 语义化标签
    - 实习生一开始去工作的时候经常做的有图标，表格，给老板看
    table
        thead
            tr
                th
        tbody
            tr
                td

## DOM 编程
    操作DOM节点，将界面动态更新

## 样式 用户体验
    - 有了框架之后，不用去写细节和重复代码， 让我们专注于当前的开发业务（熟）
    - 引入第三方库 bootstrap，是个PC端的样式库
    - .container 容器，它会有个固定宽度
    - table

## 如何将JS代码交给框架去做，专注于**业务**
所以，jQuery退出了历史舞台，vue和react来了，这是两个框架，框架是用来解决业务的
- vue
    聚焦于业务
    friends 数据
    tbody挂载点上
    远离API 循环输出 tr
- react

## 现代前端开发框架
- 离开原生JS的刀耕火种
- 聚焦于业务
    - App 的概念
    切图崽 html + css + 简单的js(DOM + event)
    App 应用开发工程师
    vue.createApp(App).mount('#app')
    #app 是 这里面支持Vue app 接管
    不用低级的DOM API
    - 循环输出数据
        - vue App 中提供了data() {
            friends
        }
        - tr v-for 配合循环输出的业务

## react 来自于Facebook 适合大型应用
- 创建react 应用
    - npm init vite 初始化一个项目