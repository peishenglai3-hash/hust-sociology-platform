import { useState, useMemo } from 'react';
import { GraduationCap, Download, ExternalLink, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface ReviewResource {
  id: string;
  title: string;
  description: string;
  category: string;
  grade: string; // 年级：大一上、大一下、大二上、大二下等
  courseName: string; // 课程名称
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
    grade: '大一上',
    courseName: '社会调查方法',
    author: '教学团队整理',
    link: 'https://pan.quark.cn/s/ad7059ece05a',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 'sociology-intro-review',
    title: '大一上学期概论课复习资料',
    description: '社会学概论、社会学理论基础等课程的复习资料，包含课程笔记、重点总结、考试指南',
    category: '复习指南',
    grade: '大一上',
    courseName: '社会学概论',
    author: '教学团队整理',
    link: 'https://pan.quark.cn/s/88199f523174',
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

// 提取所有年级和课程名称用于筛选
const allGrades = Array.from(new Set(resources.map(r => r.grade))).sort();
const allCourses = Array.from(new Set(resources.map(r => r.courseName))).sort();

export default function Review() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  // 过滤资源
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGrade = selectedGrade === null || resource.grade === selectedGrade;
      const matchesCourse = selectedCourse === null || resource.courseName === selectedCourse;
      
      return matchesSearch && matchesGrade && matchesCourse;
    });
  }, [searchQuery, selectedGrade, selectedCourse]);

  // 清除所有筛选
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGrade(null);
    setSelectedCourse(null);
  };

  // 检查是否有活跃的筛选
  const hasActiveFilters = searchQuery !== '' || selectedGrade !== null || selectedCourse !== null;

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

        {/* 搜索和筛选区域 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* 搜索框 */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="搜索课程名称或资料标题..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* 筛选选项 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 年级筛选 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                按年级筛选
              </label>
              <div className="flex flex-wrap gap-2">
                {allGrades.map(grade => (
                  <button
                    key={grade}
                    onClick={() => setSelectedGrade(selectedGrade === grade ? null : grade)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedGrade === grade
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </div>

            {/* 课程筛选 */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                按课程筛选
              </label>
              <div className="flex flex-wrap gap-2">
                {allCourses.map(course => (
                  <button
                    key={course}
                    onClick={() => setSelectedCourse(selectedCourse === course ? null : course)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCourse === course
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {course}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 清除筛选按钮 */}
          {hasActiveFilters && (
            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm text-gray-600">
                已应用筛选条件
              </span>
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                <X className="w-4 h-4" />
                清除筛选
              </button>
            </div>
          )}
        </div>

        {/* 结果统计 */}
        <div className="mb-6">
          <p className="text-gray-600">
            找到 <span className="font-semibold text-indigo-600">{filteredResources.length}</span> 项复习资料
          </p>
        </div>

        {/* 资料卡片网格 */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card
                key={resource.id}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-0 bg-white"
              >
                <div className="p-6">
                  {/* 年级和课程标签 */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                      {resource.icon}
                      {resource.category}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {resource.grade}
                    </span>
                  </div>

                  {/* 资源标题 */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {resource.title}
                  </h3>

                  {/* 课程名称 */}
                  <p className="text-sm text-indigo-600 font-semibold mb-2">
                    📚 {resource.courseName}
                  </p>

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
        ) : (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              {hasActiveFilters ? '没有找到匹配的复习资料' : '暂无复习资料，敬请期待'}
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-indigo-600 hover:text-indigo-700 font-semibold underline"
              >
                清除筛选条件
              </button>
            )}
          </div>
        )}

        {/* 底部说明 */}
        <div className="mt-12 p-6 bg-indigo-50 border border-indigo-200 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">📚 资料说明</h3>
          <p className="text-gray-700 text-sm">
            点击"访问资料库"按钮即可进入网盘，选择需要的资料进行下载。所有资料均为永久有效链接，可随时访问。使用搜索框或筛选按钮快速查找你需要的课程资料。
          </p>
        </div>
      </div>
    </div>
  );
}
