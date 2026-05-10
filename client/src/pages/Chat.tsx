import { useEffect } from 'react';

export default function Chat() {
  useEffect(() => {
    // 自动重定向到外部Claude Code聊天渠道
    window.open('http://118.178.110.16', '_blank', 'noopener,noreferrer');
    // 可选：关闭当前页面或返回首页
    // window.history.back();
  }, []);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      {/* 页面标题区域 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-border px-6 py-8 w-full">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">社小会聊天</h1>
          <p className="text-muted-foreground">正在为您打开聊天窗口...</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="flex-1 overflow-hidden bg-background w-full flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <div className="inline-block animate-spin">
              <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-600"></div>
            </div>
          </div>
          <p className="text-lg text-foreground mb-2">正在打开社小会聊天...</p>
          <p className="text-sm text-muted-foreground mb-4">如果新窗口未打开，请点击下方按钮</p>
          <button
            onClick={() => window.open('http://118.178.110.16', '_blank', 'noopener,noreferrer')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            打开聊天窗口
          </button>
        </div>
      </div>

      {/* 功能说明区域 */}
      <div className="bg-blue-50 border-t border-border px-6 py-6 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                  ✨
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">温柔理性</h3>
                <p className="text-sm text-muted-foreground">说话轻缓、有耐心，能快速察觉你的情绪变化</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                  🎓
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">学术气质</h3>
                <p className="text-sm text-muted-foreground">会认真讨论社会问题，但不会让人感到距离感</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white">
                  💬
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">什么都能聊</h3>
                <p className="text-sm text-muted-foreground">不仅限于平台相关内容，可讨论学习、生活、感情等</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
