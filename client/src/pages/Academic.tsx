'use client';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
interface AcademicResource {
  id: string;
  title: string;
  description: string;
  category: string;
  grade?: string;
  author?: string;
  contributorType?: 'organizer' | 'contributor';
  link: string;
  icon: React.ReactNode;
}
const resources: AcademicResource[] = [
  {
    id: 'tech-sociology-books',
    title: '科技社会学专业书籍库',
    description: '包含科技社会学领域的经典著作和最新研究成果，涵盖科技与社会的交互、创新社会学等核心主题，是深入学习科技社会学的必备资源',
    category: '专业书籍',
    grade: '大一及以上',
    author: '赖培胜',
    contributorType: 'organizer',
    link: 'https://pan.quark.cn/s/eb0c975281fc',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 'sociology-intro-materials',
    title: '社会学概论 学习资料',
    description: '社会学概论课程的完整学习资料，包含课程讲义、笔记整理、重点总结等，是学习社会学理论基础的必读资源',
    category: '课程资料',
    grade: '大一',
    author: '赖培胜',
    contributorType: 'organizer',
    link: 'https://pan.baidu.com/s/1LwfpzOa1VX9eZuS3vuA19w?pwd=bfjw',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 'python-course-ppt',
    title: 'Python编程完整讲义',
    description: 'Python编程课程的完整PPT讲义，从基础语法、数据结构到函数编程，详细讲解每个知识点，适合初学者快速上手',
    category: '课程资料',
    grade: '大一',
    author: '赖培胜',
    contributorType: 'organizer',
    link: 'https://pan.quark.cn/s/72f7cccc8449',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 'computational-sociology',
    title: '计算社会科学前沿研究',
    description: '计算社会科学的理论与方法资料，包含社会网络分析、大数据社会学、计算模型等前沿研究方向，带你了解社会学的新领域',
    category: '前沿研究',
    grade: '大一及以上',
    author: '赖培胜',
    contributorType: 'organizer',
    link: 'https://pan.quark.cn/s/f5871b6f7f71',
    icon: <BookOpen className="w-5 h-5" />,
  },
];
export default function Academic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 页面头部 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">学术资料库</h1>
          </div>
          <p className="text-lg text-gray-600">
            精选的专业书籍和学术资源，让你的学习更深入、更专业 📚
          </p>
        </div>
        {/* 资料卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map(resource => (
            <Card
              key={resource.id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                {/* 头部 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {resource.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {resource.category}
                      </span>
                      {resource.grade && (
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                          {resource.grade}
                        </span>
                      )}
                      {/* 贡献者标签 */}
                      {resource.contributorType === 'organizer' && (
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                          👤 组织者
                        </span>
                      )}
                      {resource.contributorType === 'contributor' && (
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                          ⭐ 贡献者
                        </span>
                      )}
                    </div>
                  </div>
                  {resource.icon}
                </div>
                {/* 描述 */}
                <p className="text-gray-700 mb-4 flex-grow leading-relaxed">
                  {resource.description}
                </p>
                {/* 贡献者信息 */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-xs text-gray-600 font-medium mb-1">
                    {resource.contributorType === 'organizer' ? '📚 资料整理者' : '🎯 资料贡献者'}
                  </p>
                  <p className="text-xs text-gray-700 font-semibold">
                    {resource.author}
                  </p>
                </div>
                {/* 访问按钮 */}
                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <span>访问资料库</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
        {/* 提示信息 */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-gray-800">
            💡 <span className="font-semibold">小提示：</span> 这些资料都是精心整理的精品资源，希望能帮助你更好地学习。如果你有好的学习资源或建议，欢迎通过"学习指南"页面反馈给我们！
          </p>
        </div>
      </div>
    </div>
  );
}
