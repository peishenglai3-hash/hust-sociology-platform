import ChatWindow from '@/components/ChatWindow';

export default function Chat() {
  return (
    <div className="flex flex-col h-full">
      {/* 页面标题区域 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-border px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">社小会聊天</h1>
          <p className="text-muted-foreground">与社会学院的虚拟助手进行实时对话交互</p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="flex-1 overflow-hidden bg-background">
        <div className="h-full max-w-4xl mx-auto px-6 py-8">
          {/* 聊天窗口 - 全屏显示 */}
          <div className="h-full bg-white rounded-lg border border-border shadow-sm overflow-hidden">
            <ChatWindow />
          </div>
        </div>
      </div>

      {/* 功能说明区域 */}
      <div className="bg-blue-50 border-t border-border px-6 py-6">
        <div className="max-w-4xl mx-auto">
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
