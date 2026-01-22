# 原型
- OOP 机制 Object Oriented Programming 面向对象编程
- 封装、**继承**、多态、接口

## JS OOP
- 对象字面量 一堆一样的对象创建麻烦
- 类的概念，没有class关键字
- 构造函数不能省的
- 赋予函数新的使命，身兼两职
  类 + 构造函数

## JS 面向对象更强大，它是原型式的
- 任何对象 默认指向Object
- __proto__
  任何对象都有这个私有属性，对象和构造函数和类之间没什么血缘关系（就好像代孕一样）

- JS 本没有类
只不过用函数名大写来表示类
- JS的对象和类、构造函数之间没有关系
  __proto__ 指向构造函数的原型对象 prototype
- __proto__ 指向任何对象
- 不指默认是Object
- 原型对象、原型链
- 类是大写的函数 
- 实例通过new出来的对象
- 任何函数都有prototype属性，值就是构造函数的原型对象
## new的 过程
new -> {} -> constructor 运行 -> this -> {} -> 完成了构造 -> __proto__ -> constructor.prototype -> Object.prototype -> 
