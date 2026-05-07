'use client';
import { Lightbulb, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface GuideItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  status: 'coming-soon' | 'available';
}

const guideItems: GuideItem[] = [
  {
    id: 'food',
    title: '吃什么？',
    description: '学院周边美食推荐、食堂菜单、外卖指南，让你吃得开心',
    emoji: '🍜',
    status: 'coming-soon'
  },
  {
    id: 'play',
    title: '去哪里玩？',
    description: '武汉及周边景点推荐、学校周边娱乐设施、周末活动指南',
    emoji: '🎉',
    status: 'coming-soon'
  },
  {
    id: 'exam-week',
    title: '期末周咋办？',
    description: '期末复习计划、考试技巧、压力管理、放松建议',
    emoji: '📚',
    status: 'coming-soon'
  },
  {
    id: 'internship',
    title: '实习怎么说',
    description: '实习机会分享、简历写作、面试准备、实习经验交流',
    emoji: '💼',
    status: 'coming-soon'
  },
  {
    id: 'job-hunting',
    title: '我要求职！',
    description: '求职资源、校招信息、简历优化、面试指导、薪资谈判',
    emoji: '🚀',
    status: 'coming-soon'
  },
  {
    id: 'love-life',
    title: '想谈恋爱了捏',
    description: '校园恋爱指南、约会地点推荐、关系维护建议',
    emoji: '💕',
    status: 'coming-soon'
  },
  {
    id: 'travel',
    title: '出行',
    description: '交通指南、旅游攻略、出行安全提示、行李打包建议',
    emoji: '✈️',
    status: 'coming-soon'
  },
  {
    id: 'photo-tips',
    title: '打卡与拍照建议',
    description: '学院及周边打卡地点、拍照技巧、最佳拍摄时间推荐',
    emoji: '📸',
    status: 'coming-soon'
  }
];

export default function Guide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 页面头部 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">学习指南</h1>
          </div>
          <p className="text-lg text-gray-600">
            大学生活的方方面面，从学习到生活，我们都为你准备好了 🎓
          </p>
        </div>

        {/* 指南卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideItems.map(item => (
            <Card
              key={item.id}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              <div className="p-6 flex flex-col h-full">
                {/* 头部 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.emoji}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
                  {item.description}
                </p>

                {/* 状态标签和按钮 */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  {item.status === 'coming-soon' && (
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                      🔄 即将上线
                    </span>
                  )}
                  {item.status === 'available' && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      ✅ 已上线
                    </span>
                  )}
                  {item.status === 'coming-soon' && (
                    <button className="text-purple-600 hover:text-purple-700 font-medium text-sm opacity-50 cursor-not-allowed">
                      敬请期待
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 反馈提示 */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
          <p className="text-sm text-gray-800">
            ✨ <span className="font-semibold">有建议或想分享经验？</span> 欢迎在各个板块留言或通过学院官方渠道反馈，你的意见对我们很重要！
          </p>
        </div>
      </div>
    </div>
  );
}
