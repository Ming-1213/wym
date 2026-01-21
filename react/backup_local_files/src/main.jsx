import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './router';
import './styles/global.styl'; // stylus 全局样式
import './mock'; // 启动 mock（如果你用 mock 机制的话）
import { initRem } from './utils/rem';
import useAuthStore from './stores/authStore';

// 重新从 localStorage 恢复（持久化）状态
function rehydrateAuth() {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    const userRaw = localStorage.getItem('user');
    if (accessToken && refreshToken) {
      useAuthStore.getState().setTokens({ accessToken, refreshToken });
    }
    if (userRaw) {
      const user = JSON.parse(userRaw);
      useAuthStore.getState().setUser(user);
    }
  } catch (e) {
    console.warn('rehydrate auth failed', e);
  }
}

// 简单的全局错误边界（可选）
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasErr: false, err: null };
  }
  static getDerivedStateFromError(error) {
    return { hasErr: true, err: error };
  }
  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasErr) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>应用出错了</h1>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.err?.toString() || '未知错误'}
          </pre>
          <button onClick={() => window.location.reload()}>刷新重试</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 初始化 rem（移动端适配基于设计稿宽度 375）
initRem(375);
// 恢复登录态
rehydrateAuth();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </React.StrictMode>
);
