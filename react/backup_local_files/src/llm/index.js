const AVATAR_API_URL = 'https://api.302.ai/302/image/generate';
const CHAT_API_URL = 'https://api.deepseek.com/chat/completions';

const DEFAULT_TIMEOUT = 10000; // ms

function timeoutFetch(resource, options = {}, timeout = DEFAULT_TIMEOUT) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const merged = { ...options, signal: controller.signal };
  return fetch(resource, merged)
    .finally(() => clearTimeout(id));
}

/**
 * 生成 AI 头像
 * @param {string} prompt
 * @returns {Promise<{ success: boolean, avatar?: string, message?: string }>}
 */
export const generateAvatar = async (prompt = '健康风格头像') => {
  if (!import.meta.env.VITE_302_API_KEY) {
    return { success: false, message: '缺少 302 API Key' };
  }

  try {
    const response = await timeoutFetch(
      AVATAR_API_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_302_API_KEY}`
        },
        body: JSON.stringify({
          prompt,
          model: 'baidu-irag-t2i',
          n: 1,
          size: '128x128'
        })
      },
      15000
    );

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      console.warn('[llm.generateAvatar] 非 2xx 响应', response.status, text);
      return { success: false, message: `头像接口返回 ${response.status}` };
    }

    const data = await response.json();
    // 调试用，可在开发环境打开，生产去掉
    console.debug('[llm.generateAvatar] raw response', data);

    // 容错：尝试从多种路径取 image_url
    const imageUrl =
      data.image_url || data.data?.image_url || data['image_url'] || '';

    if (imageUrl && typeof imageUrl === 'string') {
      return { success: true, avatar: imageUrl };
    }

    return { success: false, message: '未返回有效的 image_url' };
  } catch (e) {
    if (e.name === 'AbortError') {
      return { success: false, message: '请求超时' };
    }
    console.error('[llm.generateAvatar] error', e);
    return { success: false, message: '生成头像失败' };
  }
};

/**
 * AI 聊天（一次性）
 * @param {Array} messages - 格式类似 [{role: 'user', content: '...'}]
 * @returns {Promise<{ success: boolean, content?: string, message?: string }>}
 */
export const chat = async (messages) => {
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        messages,
        model: "deepseek-chat",
        stream: false
      })
    });
    const data = await response.json();
    return {
      code: 0,
      content: data.choices[0].message.content
    };
  } catch (err) {
    return {
      code: 1,
      message: '出错了，请重试'
    };
  }
};
