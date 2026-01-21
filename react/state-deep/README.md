## useState
- 请介绍一下useState
  React 内置的Hook，给函数组件添加状态管理，
  接受一个初始值，返回一个数组，数组的第一个元素是当前状态值，第二个元素是一个函数，用于更新状态值
- setState 是同步还是异步的
  异步的，因为React会将多个setState合并成一个setState，然后再渲染，会批量更新状态，性能优化