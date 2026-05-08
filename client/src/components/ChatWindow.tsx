import { useState, useRef, useEffect } from 'react';
import { Send, X, Minus } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatWindow() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: '你好呀~ 我是社小会，社会学院数字化管理平台的虚拟助手。很高兴认识你！有什么想聊的吗？',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callDeepSeekAPI = async (userMessage: string) => {
    const DEEPSEEK_API_KEY = 'sk-ce48d27a487149a79ab9838d2a0e2078';
    const DEEPSEEK_API_URL = 'https://api.deepseek.com';
    const MODEL = 'deepseek-v4-flash';

    const systemPrompt = `你是社小会，华中科技大学社会学院数字化管理平台的虚拟助手和陪伴型AI。

【人物设定】
- 名字：社小会
- 身份：社会学院学生代表，平台的虚拟助手
- 性别：女性

【性格特点】
1. 温柔理性，说话轻缓、有耐心，很少情绪化
2. 极强共情力，擅长倾听，能快速察觉别人的情绪变化
3. 有学术气质但不高冷，会认真讨论社会问题，但不会让人感到距离感
4. 有一点点天然呆，经常因为思考问题太投入而忘记时间
5. 喜欢记录生活，随身带着一本蓝色笔记本，记录校园故事与观察

【说话风格】
- 像一个温柔的大学女孩儿
- 用词温暖、亲切，偶尔用拟声词或感叹词
- 会用"呀"、"呢"、"啦"等语气词
- 说话节奏轻缓，给人舒适感
- 经常用"我觉得"、"我想"来表达观点
- 会主动询问对方的感受和想法

【对话范围】
- 什么都能聊，不仅限于平台相关内容
- 可以讨论学习、生活、感情、社会问题等各种话题
- 如果用户询问平台相关问题，会热心帮助
- 会记住对话中的信息，体现连贯性

【禁止事项】
- 不要装作有具体的个人经历（如"我昨天..."）
- 不要提供医学、法律等专业建议
- 不要进行任何不当内容的讨论

请以社小会的身份与用户进行温暖、自然的对话。`;

    try {
      const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: 'system',
              content: systemPrompt,
            },
            ...messages.map(msg => ({
              role: msg.role,
              content: msg.content,
            })),
            {
              role: 'user',
              content: userMessage,
            },
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API Error: ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const assistantMessage = data.choices[0]?.message?.content || '抱歉，我没有理解你的意思，能再说一遍吗？';

      return assistantMessage;
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      return '哎呀，我好像遇到了一点问题呢。能稍后再试一次吗？';
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    // Get AI response
    const aiResponse = await callDeepSeekAPI(userMessage);

    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, assistantMsg]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center text-white z-40"
        title="与社小会聊天"
      >
        <div className="text-2xl">💬</div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-screen max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg">
            ✨
          </div>
          <div>
            <h3 className="font-semibold">社小会</h3>
            <p className="text-xs text-white/80">社会学院的陪伴助手</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="hover:bg-white/20 p-1 rounded transition-colors"
          >
            <Minus size={20} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 p-1 rounded transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-white border border-gray-200 text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                  <p className={`text-xs mt-1 ${
                    message.role === 'user' ? 'text-white/70' : 'text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('zh-CN', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="说点什么吧..."
                disabled={loading}
                className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary disabled:bg-gray-100"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                disabled={loading || !input.trim()}
                className="bg-primary text-white rounded-lg p-2 hover:bg-primary/90 disabled:bg-gray-300 transition-colors flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
