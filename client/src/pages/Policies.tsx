'use client';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface PolicyDocument {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  author?: string;
  link: string;
  icon: React.ReactNode;
}

const documents: PolicyDocument[] = [
  {
    id: 'cultivation-plan-2025',
    title: '2025级培养方案-文科分册',
    description: '华中科技大学社会学院2025级本科生培养方案，详细规定了专业课程设置、学分要求、毕业条件等重要信息，是你规划学业的重要参考',
    category: '培养方案',
    date: '2025年',
    author: '教务处 / 社会学院',
    link: 'https://pan.quark.cn/s/daf136c3d8b7',
    icon: <FileText className="w-5 h-5" />,
  },
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 页面头部 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">政策文件</h1>
          </div>
          <p className="text-lg text-gray-600">
            学院规章制度、培养方案、通知公告等重要文件，帮你了解学院政策 📋
          </p>
        </div>

        {/* 文件卡片列表 */}
        <div className="space-y-6">
          {documents.map(doc => (
            <Card
              key={doc.id}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* 头部 */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {doc.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {doc.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {doc.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {doc.category}
                      </span>
                      {doc.author && (
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                          {doc.author}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {doc.description}
                </p>

                {/* 下载按钮 */}
                {doc.link && (
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    <span>下载文件</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* 提示信息 */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-gray-800 mb-2">
            💡 <span className="font-semibold">温馨提示：</span>
          </p>
          <ul className="text-sm text-gray-700 space-y-1 ml-6">
            <li>• 培养方案是你学业规划的重要参考，建议仔细阅读</li>
            <li>• 如有疑问，可以咨询学院教务办公室或班级辅导员</li>
            <li>• 更多政策文件将持续更新，敬请关注</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
