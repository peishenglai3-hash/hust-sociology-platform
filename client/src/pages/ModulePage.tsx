import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface ModulePageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  itemCount: number;
}

export default function ModulePage({
  title,
  description,
  icon,
  itemCount
}: ModulePageProps) {
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
              {icon}
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索资源..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
          <Button variant="outline" className="border-border hover:bg-secondary">
            筛选
          </Button>
        </div>

        {/* Content Grid - Placeholder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {Array.from({ length: itemCount }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-6 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="h-32 bg-secondary/30 rounded-lg mb-4 group-hover:bg-secondary/50 transition-colors flex items-center justify-center">
                <span className="text-muted-foreground">资源 {i + 1}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                资源标题 {i + 1}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                这是一个资源的简短描述，点击查看详情
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>更新时间：2026-04-24</span>
                <span className="text-primary">查看详情 →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        <div className="text-center py-12 bg-secondary/20 rounded-lg border border-border">
          <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            功能模块开发中
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            我们正在为你准备更多的{title}资源。敬请期待！如有建议，欢迎反馈。
          </p>
        </div>
      </div>
    </div>
  );
}
