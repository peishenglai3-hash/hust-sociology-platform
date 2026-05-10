import { Home, BookOpen, GraduationCap, FileText, Users, Menu, X, ChevronLeft, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'wouter';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  external?: boolean;
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
  },
  {
    label: '社小会聊天',
    href: 'http://118.178.110.16',
    icon: <MessageCircle className="w-5 h-5" />,
    description: '与AI助手对话',
    external: true
  }
];

export default function Sidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
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
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-lg bg-white border border-border hover:bg-secondary transition-colors shadow-md"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border
          transform transition-all duration-300 ease-in-out z-40
          lg:translate-x-0 lg:static lg:h-auto lg:border-r
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          ${isDesktopCollapsed ? 'lg:w-20' : 'lg:w-64'}
          w-64
        `}
      >
        <div className="flex flex-col h-full pt-20 lg:pt-6">
          {/* Logo section with collapse button */}
          <div className={`${isDesktopCollapsed ? 'px-3' : 'px-6'} pb-8 border-b border-sidebar-border transition-all duration-300`}>
            <div className={`flex items-center justify-between`}>
              <div className={`flex items-center ${isDesktopCollapsed ? 'justify-center' : 'gap-3'} flex-1`}>
                <img
                  src="/manus-storage/hust-sociology-logo_1803912d.webp"
                  alt="华中科技大学社会学院"
                  className="w-12 h-12 object-contain"
                />
                {!isDesktopCollapsed && (
                  <div>
                    <h1 className="text-sm font-bold text-sidebar-foreground">社会学院</h1>
                    <p className="text-xs text-muted-foreground">信息平台</p>
                  </div>
                )}
              </div>
              
              {/* Desktop collapse button - moved to top */}
              <button
                onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
                className="hidden lg:flex items-center justify-center p-1.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors flex-shrink-0"
                title={isDesktopCollapsed ? '展开侧边栏' : '收起侧边栏'}
              >
                <ChevronLeft className={`w-5 h-5 transition-transform duration-300 ${isDesktopCollapsed ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
            {navItems.map((item) => {
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileOpen(false)}
                    className={`
                      flex items-center ${isDesktopCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg transition-all duration-200 block
                      text-sidebar-foreground hover:bg-sidebar-accent
                    `}
                    title={isDesktopCollapsed ? item.label : undefined}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    {!isDesktopCollapsed && (
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{item.label}</div>
                        {item.description && (
                          <div className="text-xs opacity-75 truncate">{item.description}</div>
                        )}
                      </div>
                    )}
                  </a>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`
                    flex items-center ${isDesktopCollapsed ? 'justify-center' : 'gap-3'} px-4 py-3 rounded-lg transition-all duration-200 block
                    ${isActive(item.href)
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-md'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                    }
                  `}
                  title={isDesktopCollapsed ? item.label : undefined}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!isDesktopCollapsed && (
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm">{item.label}</div>
                      {item.description && (
                        <div className="text-xs opacity-75 truncate">{item.description}</div>
                      )}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer info */}
          <div className={`${isDesktopCollapsed ? 'px-3' : 'px-6'} py-4 border-t border-sidebar-border text-xs text-muted-foreground transition-all duration-300`}>
            {!isDesktopCollapsed && (
              <>
                <p>华中科技大学</p>
                <p>社会学院 2026</p>
              </>
            )}
          </div>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className={`hidden lg:block transition-all duration-300 ${isDesktopCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`} />
    </>
  );
}
