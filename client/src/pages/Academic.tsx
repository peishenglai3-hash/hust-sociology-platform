import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AcademicResource {
  id: string;
  title: string;
  description: string;
  category: string;
  author?: string;
  link: string;
  icon: React.ReactNode;
}

const resources: AcademicResource[] = [
  {
    id: 'tech-sociology-books',
    title: '科技社会学专业书籍库',
    description: '包含科技社会学领域的经典著作和最新研究成果，涵盖科技与社会的交互、创新社会学等核心主题',
    category: '专业书籍',
    author: '赖培胜整理',
    link: 'https://pan.quark.cn/s/eb0c975281fc',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    id: 'sociology-intro-materials',
    title: '社会学概论 资料',
    description: '社会学概论课程的学习资料，包含课程讲义、笔记整理、重点总结等，是学习社会学理论基础的重要资源',
    category: '课程资料',
    author: '教学团队整理',
    link: 'https://pan.baidu.com/s/1LwfpzOa1VX9eZuS3vuA19w?pwd=bfjw',
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">学术资料</h1>
          </div>
          <p className="text-lg text-gray-600">
            课程讲义、研究论文、学术资源库 - 为你的学术研究提供全面支持
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
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
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
                <Button
                  onClick={() => window.open(resource.link, '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-md"
                >
                  <Download className="w-4 h-4" />
                  访问资料库
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* 卡片底部装饰 */}
              <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Card>
          ))}
        </div>

        {/* 空状态提示 */}
        {resources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">暂无学术资料，敬请期待</p>
          </div>
        )}

        {/* 底部说明 */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">📚 资料说明</h3>
          <p className="text-gray-700 text-sm">
            点击"访问资料库"按钮即可进入网盘，选择需要的资料进行下载。所有资料均为永久有效链接，可随时访问。
          </p>
        </div>
      </div>
    </div>
  );
}
