// fill 一样的
// Array.of() 是ES6新增的静态方法，用于创建一个包含任意数量参数的新数组。
console.log(Array.of(1, 2, 3)) // 不同值的初始化
// 复杂的计算或转变
console.log(Array.from(new Array(26),
(val, index) => String.fromCharCode(65 + index)))