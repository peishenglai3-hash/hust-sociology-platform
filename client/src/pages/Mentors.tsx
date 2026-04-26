import { Users, Search } from 'lucide-react';
import { useState, useMemo } from 'react';
import { mentors, getTitleCounts } from '@/data/mentors';
import MentorCard from '@/components/MentorCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function Mentors() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTitle, setSelectedTitle] = useState<string>('全部');

  const titleCounts = getTitleCounts();

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const matchesSearch =
        mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.researchDirections.some((dir) =>
          dir.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTitle =
        selectedTitle === '全部' || mentor.title === selectedTitle;

      return matchesSearch && matchesTitle;
    });
  }, [searchQuery, selectedTitle]);

  const titleOptions = [
    { label: '全部', count: mentors.length },
    { label: '教授', count: titleCounts['教授'] },
    { label: '副教授', count: titleCounts['副教授'] },
    { label: '讲师', count: titleCounts['讲师'] }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              返回首页
            </a>
          </Link>

          <div className="flex items-start gap-4">
            <div className="p-4 rounded-xl bg-primary/10 text-primary">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                导师信息
              </h1>
              <p className="text-lg text-muted-foreground">
                华中科技大学社会学院教师队伍 - 共 {mentors.length} 位导师
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索导师名字或研究方向..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>

          {/* Title Filter */}
          <div className="flex flex-wrap gap-2">
            {titleOptions.map((option) => (
              <button
                key={option.label}
                onClick={() => setSelectedTitle(option.label)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedTitle === option.label
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {option.label}
                <span className="ml-2 text-sm opacity-75">({option.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 text-sm text-muted-foreground">
          找到 <span className="font-semibold text-foreground">{filteredMentors.length}</span> 位导师
        </div>

        {/* Mentors Grid */}
        {filteredMentors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-secondary/20 rounded-lg border border-border">
            <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              未找到匹配的导师
            </h3>
            <p className="text-muted-foreground">
              请尝试修改搜索条件或浏览所有导师
            </p>
          </div>
        )}

        {/* Tips */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">💡 使用提示</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 点击导师卡片上的"查看详情"按钮可以查看完整的个人简介和研究成果</li>
            <li>• 你可以通过导师的邮箱地址直接联系导师咨询相关事宜</li>
            <li>• 使用搜索功能可以快速找到特定研究方向的导师</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
