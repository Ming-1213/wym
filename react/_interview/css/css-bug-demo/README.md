# css 模块化
- Button AnotherButton 按钮组件
    以后去公司工作了，会接触到自己写的组件、别人写的组件以及第三方组件吧
    这样会遇到一些冲突，例如命名重复等，但就算解决了这个问题依然还有别的问题
- 搞个唯一的类名
- 命名空间
    命名空间是一种约定，用于避免不同模块之间的命名冲突。在CSS中，命名空间通常通过使用特定的前缀或后缀来实现。
    - css模块化的能力
    不会影响外界
    不受外界影响
- style.module.css 模块化
    - react vite
        唯一hash 值，加到原类名上
    - vue scoped
    - 可读性受影响不？
        - 读的是源码 .button
        - 被模块化保护起来了
        - npm run build
- dev/build/test/product
    开发的时候在dev 代码的可读性
    vite,react .jsx babel preset-react,
    style.module.css
    import styles from './style.module.css'
    styles js 对象 css 的每一个类名都可以面向对象
    访问绑定

    npm run build
    npm run test 测试一下
    aliyun ngnix 跑起来 dist/