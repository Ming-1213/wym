// zustand react 状态管理框架
import {
    create // 创建一个store
} from 'zustand'
// count store
// use 开头 hook 
export const useCounterStore = create((set) => ({
    // 对象，里面包含着状态以及修改状态的方法
    count: 0, // 状态
    // reducer 函数 规定状态怎么变
    increment: () => set((state) => ({count: state.count + 1})), // 修改状态的方法
    decrement: () => set((state) => ({count: state.count - 1})),
}))