import ChatWindow from '@/components/ChatWindow';

/**
 * ChatDemo Page - 用于演示ChatWindow组件的功能
 * 这个页面展示了社小会AI聊天窗口的完整功能
 */
export default function ChatDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">社小会 AI 聊天演示</h1>
          <p className="text-lg text-muted-foreground mb-8">
            与社会学院的虚拟助手进行实时对话交互
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">✨ 温柔理性</h3>
            <p className="text-muted-foreground">
              社小会说话轻缓、有耐心，很少情绪化，能快速察觉你的情绪变化。
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">🎓 学术气质</h3>
            <p className="text-muted-foreground">
              有学术气质但不高冷，会认真讨论社会问题，但不会让人感到距离感。
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">💭 天然呆</h3>
            <p className="text-muted-foreground">
              经常因为思考问题太投入而忘记时间，随身带着一本蓝色笔记本。
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">💬 什么都能聊</h3>
            <p className="text-muted-foreground">
              不仅限于平台相关内容，可以讨论学习、生活、感情、社会问题等各种话题。
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">💡 如何使用</h2>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-semibold text-primary">1.</span>
              <span>点击右下角的聊天气泡按钮打开聊天窗口</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">2.</span>
              <span>在输入框中输入你的问题或想聊的话题</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">3.</span>
              <span>按 Enter 键或点击发送按钮发送消息</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">4.</span>
              <span>社小会会立即回复你的消息</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-primary">5.</span>
              <span>可以点击最小化或关闭按钮管理聊天窗口</span>
            </li>
          </ol>
        </div>

        {/* Tech Stack */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">🚀 技术栈</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-3">前端技术</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ React 19 - UI框架</li>
                <li>✓ TypeScript - 类型安全</li>
                <li>✓ Tailwind CSS 4 - 样式</li>
                <li>✓ Lucide React - 图标库</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">AI 集成</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ DeepSeek API - AI模型</li>
                <li>✓ 模型: deepseek-v4-flash</li>
                <li>✓ 温度: 0.7 (创意平衡)</li>
                <li>✓ 最大令牌: 1000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ChatWindow Component - 全局可见 */}
      <ChatWindow />
    </div>
  );
}
