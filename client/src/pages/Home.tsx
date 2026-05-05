import { BookOpen, GraduationCap, FileText, Users, Lightbulb, Calendar, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  const { user } = useAuth();

  const features = [
    {
      title: '学术资料',
      description: '课程讲义、研究论文、学术资源库',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/academic',
      count: 128,
      gradient: 'from-blue-100/40 to-blue-50/40'
    },
    {
      title: '复习资料',
      description: '考试复习指南、历年真题、学习笔记',
      icon: <GraduationCap className="w-6 h-6" />,
      href: '/review',
      count: 64,
      gradient: 'from-indigo-100/40 to-indigo-50/40'
    },
    {
      title: '政策文件',
      description: '学院规章制度、通知公告、重要文件',
      icon: <FileText className="w-6 h-6" />,
      href: '/policies',
      count: 32,
      gradient: 'from-slate-100/40 to-slate-50/40'
    },
    {
      title: '导师信息',
      description: '导师联系方式、研究方向、办公地点',
      icon: <Users className="w-6 h-6" />,
      href: '/mentors',
      count: 24,
      gradient: 'from-amber-100/40 to-amber-50/40'
    },
    {
      title: '学习指南',
      description: '学习建议、生活指南、校园资源',
      icon: <Lightbulb className="w-6 h-6" />,
      href: '/guide',
      count: 48,
      gradient: 'from-emerald-100/40 to-emerald-50/40'
    },
    {
      title: '活动日历',
      description: '学院活动、讲座、重要日期提醒',
      icon: <Calendar className="w-6 h-6" />,
      href: '/calendar',
      count: 16,
      gradient: 'from-rose-100/40 to-rose-50/40'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  欢迎来到社会学院
                  <span className="block text-primary">数字化管理平台</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  一站式获取学术资料、复习资源、政策文件、导师信息和学习指南
                </p>
              </div>

              <p className="text-base text-foreground/80 leading-relaxed">
                我们致力于为华中科技大学社会学院的同学们提供便捷、高效的信息整合与管理服务。无论你是在寻找课程资料、准备考试，还是了解学院政策，这个平台都能帮助你快速找到所需资源。
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  开始浏览
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-secondary"
                >
                  了解更多
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">7</div>
                  <p className="text-sm text-muted-foreground">资源总数</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">45</div>
                  <p className="text-sm text-muted-foreground">导师信息</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <p className="text-sm text-muted-foreground">功能模块</p>
                </div>
              </div>
            </div>

            {/* Right: Image/Visual */}
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">学院Logo</h3>
                  <p className="text-sm text-muted-foreground">华中科技大学社会学院</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Statistics Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {/* 复习资料统计 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">复习资料</p>
                  <div className="text-3xl font-bold text-blue-600">3</div>
                </div>
                <GraduationCap className="w-8 h-8 text-blue-500 opacity-20" />
              </div>
              <p className="text-xs text-gray-500">社会调查方法、概论课、微积分讲义</p>
            </div>

            {/* 学术资料统计 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">学术资料</p>
                  <div className="text-3xl font-bold text-indigo-600">4</div>
                </div>
                <BookOpen className="w-8 h-8 text-indigo-500 opacity-20" />
              </div>
              <p className="text-xs text-gray-500">科技社会学、社会学概论、Python、计算社会科学</p>
            </div>

            {/* 最新更新时间 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-1">最新更新</p>
                  <div className="text-lg font-bold text-green-600">2026年5月5日</div>
                </div>
                <Clock className="w-8 h-8 text-green-500 opacity-20" />
              </div>
              <p className="text-xs text-gray-500">添加了Python课程PPT和微积分讲义</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              核心功能模块
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              为你精心整合的六大功能模块，满足学习和生活的各种需求
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.href}
                {...feature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary to-primary/80 p-8 lg:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                准备好了吗？
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                立即开始探索社会学院的各项资源，提升你的学习效率
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
              >
                立即开始
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">关于平台</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">平台介绍</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">功能说明</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">资源</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">学术资料</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">复习资料</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">政策文件</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">帮助</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">使用指南</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">常见问题</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">反馈建议</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">关注我们</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">微信公众号</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">官方微博</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">QQ群</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 华中科技大学社会学院. 保留所有权利。</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">隐私政策</a>
              <a href="#" className="hover:text-primary transition-colors">使用条款</a>
              <a href="#" className="hover:text-primary transition-colors">联系方式</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
