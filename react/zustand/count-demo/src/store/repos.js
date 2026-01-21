// 请求
import {
    getRepoList
} from '../api/repo'
import {
    create
} from 'zustand'

export const useRepoStore = create((set) => ({
    repos: [],
    loading: false, // 加载中
    error: null, // 错误信息
    fetchRepos: async () => {
        // 业务
        set({loading: true, error: null}); // 加载中
        try {
            const res = await getRepoList('_username'); // 调用接口
            set({repos: res.data, loading: false}); // 成功        
        } catch(error) {
            set({error: error.message, loading: false}); // 错误信息
        }
    } 
}));