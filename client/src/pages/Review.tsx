'use client';

import { useState } from 'react';
import { GraduationCap, Download, ExternalLink, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface ReviewResource {
  id: string;
  title: string;
  description: string;
  category: string; // 分类：考试复习、课程讲义、学习笔记等
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
    description: '包含考试复习指南、重点知识总结、历年真题等，帮你高效备考社会调查方法这门课',
    category: '考试复习',
    grade: '大一上',
    courseName: '社会调查方法',
    author: '赖培胜整理 | 教学团队素材',
    link: 'https://pan.quark.cn/s/ad7059ece05a',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 'sociology-intro-review',
    title: '大一上学期概论课复习资料',
    description: '《社会学概论》《社会工作概论》两门课的完整复习资料，包括课程笔记、重点总结、考试指南，一站式搞定两门概论课',
    category: '考试复习',
    grade: '大一上',
    courseName: '社会学概论 / 社会工作概论',
    author: '赖培胜整理 | 教学团队素材',
    link: 'https://pan.quark.cn/s/88199f523174',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 'calculus-lecture-notes',
    title: '微积分讲义',
    description: '微积分课程的完整讲义资料，从极限、导数到积分，详细的概念讲解和例题详解，让你轻松掌握微积分',
    category: '课程讲义',
    grade: '大一上',
    courseName: '微积分',
    author: '赖培胜整理 | 教学团队素材',
    link: 'https://pan.quark.cn/s/864be63e9db1',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 'party-activist-theory-test',
    title: '入党积极分子理论测试题库',
    description: '为想要入党的同学精心准备的理论测试题库，包含党的基本知识、理论考点、模拟试题等，帮你充分准备入党考试',
    category: '理论测试',
    grade: '大一上',
    courseName: '党建理论',
    author: '党建工作负责同学上传',
    link: 'https://pan.quark.cn/s/1ddea94a9ae2',
    icon: <GraduationCap className="w-5 h-5" />,
  },
];

// 提取所有年级和课程名称用于筛选
const allGrades = Array.from(new Set(resources.map(r => r.grade))).sort();
const allCourses = Array.from(new Set(resources.map(r => r.courseName))).sort();
const allCategories = Array.from(new Set(resources.map(r => r.category))).sort();

// 更新首页统计数据
const totalReviewResources = resources.length;

export default function Review() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGrade = !selectedGrade || resource.grade === selectedGrade;
    const matchesCategory = !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesGrade && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* 页头 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">复习资料库</h1>
          </div>
          <p className="text-lg text-gray-600">
            为你精心整理的各科复习资料，让备考不再焦虑 📚
          </p>
        </div>

        {/* 搜索和筛选区域 */}
        <Card className="mb-8 p-6 bg-white shadow-lg">
          <div className="space-y-4">
            {/* 搜索框 */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input
                placeholder="搜索课程名称或资料类型..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-2 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* 筛选按钮 */}
            <div className="flex flex-wrap gap-3">
              {/* 年级筛选 */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700 self-center">年级:</span>
                <button
                  onClick={() => setSelectedGrade('')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    !selectedGrade
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  全部
                </button>
                {allGrades.map(grade => (
                  <button
                    key={grade}
                    onClick={() => setSelectedGrade(grade)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedGrade === grade
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>

              {/* 分类筛选 */}
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-semibold text-gray-700 self-center">分类:</span>
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    !selectedCategory
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  全部
                </button>
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* 结果统计 */}
            <div className="text-sm text-gray-600 pt-2">
              找到 <span className="font-semibold text-blue-600">{filteredResources.length}</span> 份资料
            </div>
          </div>
        </Card>

        {/* 资料卡片网格 */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <Card
                key={resource.id}
                className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* 头部 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {resource.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded">
                          {resource.grade}
                        </span>
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                          {resource.category}
                        </span>
                      </div>
                    </div>
                    {resource.icon}
                  </div>

                  {/* 课程名称 */}
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    📖 {resource.courseName}
                  </p>

                  {/* 描述 */}
                  <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                    {resource.description}
                  </p>

                {/* 来源信息 */}
                <p className="text-xs text-gray-500 mb-4 pb-4 border-b border-gray-200">
                  {resource.author?.includes('党建工作') ? '上传者: ' : '整理: '}{resource.author}
                </p>

                  {/* 下载按钮 */}
                  {resource.link && (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      点击下载
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-lg text-gray-500">
              没有找到匹配的资料，换个搜索条件试试？
            </p>
          </div>
        )}

        {/* 提示信息 */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-sm text-blue-800">
            💡 <span className="font-semibold">小提示：</span> 这里的资料会不断更新，敬请期待大一下、大二等年级的资料哦！有好的学习资源也欢迎分享给我们。
          </p>
        </div>
      </div>
    </div>
  );
}
