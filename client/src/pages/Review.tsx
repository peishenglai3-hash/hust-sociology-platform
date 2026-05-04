import { GraduationCap, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ReviewResource {
  id: string;
  title: string;
  description: string;
  category: string;
  author?: string;
  link?: string;
  icon: React.ReactNode;
}

const resources: ReviewResource[] = [
  {
    id: 'social-survey-review',
    title: '社会调查方法复习资料',
    description: '包含考试复习指南、重点知识总结、历年真题等，帮助你系统复习社会调查方法课程',
    category: '复习指南',
    author: '教学团队整理',
    link: 'https://pan.quark.cn/s/ad7059ece05a',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 'sociology-intro-review',
    title: '大一上学期概论课复习资料',
    description: '社会学概论、社会学理论基础等课程的复习资料，包含课程笔记、重点总结、考试指南',
    category: '复习指南',
    author: '教学团队整理',
    link: 'https://pan.quark.cn/s/88199f523174',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  // 后续可添加更多复习资料
];

export default function Review() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 页面头部 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <GraduationCap className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">复习资料</h1>
          </div>
          <p className="text-lg text-gray-600">
            考试复习指南、历年真题、学习笔记 - 助力你的考试准备
          </p>
        </div>

        {/* 资料卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Card
              key={resource.id}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-white"
            >
              <div className="p-6">
                {/* 资源类型标签 */}
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                    {resource.icon}
                    {resource.category}
                  </span>
                </div>

                {/* 资源标题 */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>

                {/* 资源描述 */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                {/* 作者信息 */}
                {resource.author && (
                  <p className="text-xs text-gray-500 mb-4">
                    📌 {resource.author}
                  </p>
                )}

                {/* 下载按钮 */}
                {resource.link && resource.link !== '#' ? (
                  <Button
                    onClick={() => window.open(resource.link, '_blank')}
                    className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    访问资料库
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full bg-gray-300 text-gray-600 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed"
                  >
                    <Download className="w-4 h-4" />
                    敬请期待
                  </Button>
                )}
              </div>

              {/* 卡片底部装饰 */}
              <div className="h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
          ))}
        </div>

        {/* 空状态提示 */}
        {resources.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">暂无复习资料，敬请期待</p>
          </div>
        )}

        {/* 底部说明 */}
        <div className="mt-12 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">📚 资料说明</h3>
          <p className="text-gray-700 text-sm">
            点击"访问资料库"按钮即可进入网盘，选择需要的资料进行下载。所有资料均为永久有效链接，可随时访问。
          </p>
        </div>
      </div>
    </div>
  );
}
