import { BookOpen, FileText, Users, GraduationCap, Home, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
}

const navItems: NavItem[] = [
  {
    label: '首页',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: '平台概览'
  },
  {
    label: '学术资料',
    href: '/academic',
    icon: <BookOpen className="w-5 h-5" />,
    description: '课程资料、论文、研究资源'
  },
  {
    label: '复习资料',
    href: '/review',
    icon: <GraduationCap className="w-5 h-5" />,
    description: '考试复习、笔记、题库'
  },
  {
    label: '政策文件',
    href: '/policies',
    icon: <FileText className="w-5 h-5" />,
    description: '学院规章、通知公告'
  },
  {
    label: '导师信息',
    href: '/mentors',
    icon: <Users className="w-5 h-5" />,
    description: '导师联系、研究方向'
  },
  {
    label: '学习指南',
    href: '/guide',
    icon: <BookOpen className="w-5 h-5" />,
    description: '学习生活建议'
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location === '/';
    }
    return location.startsWith(href);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border
          transform transition-transform duration-300 ease-in-out z-40
          lg:translate-x-0 lg:static lg:h-auto lg:border-r
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-20 lg:pt-6">
          {/* Logo section */}
          <div className="px-6 pb-8 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-sm font-bold text-sidebar-foreground">社会学院</h1>
                <p className="text-xs text-muted-foreground">信息平台</p>
              </div>
            </div>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive(item.href)
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                    }
                  `}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{item.label}</div>
                    {item.description && (
                      <div className="text-xs opacity-75 truncate">{item.description}</div>
                    )}
                  </div>
                </a>
              </Link>
            ))}
          </nav>

          {/* Footer info */}
          <div className="px-6 py-4 border-t border-sidebar-border text-xs text-muted-foreground">
            <p>华中科技大学</p>
            <p>社会学院 2026</p>
          </div>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className="lg:ml-64" />
    </>
  );
}
