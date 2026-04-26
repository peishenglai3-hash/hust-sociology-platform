import { Search, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';
import { useState } from 'react';

export default function Header() {
  const { user, logout } = useAuth();
  const [, setLocation] = useLocation();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setLocation('/login');
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-background border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Left: Logo/Title (hidden on mobile due to sidebar) */}
        <div className="hidden lg:flex items-center gap-3">
          <img
            src="/manus-storage/hust-sociology-logo_1803912d.webp"
            alt="华中科技大学社会学院"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className="text-lg font-bold text-foreground">社会学院平台</h1>
            <p className="text-xs text-muted-foreground">信息整合与管理</p>
          </div>
        </div>

        {/* Center: Search bar */}
        <div className="flex-1 max-w-md mx-4 hidden sm:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索资料、导师、政策..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground flex items-center gap-2"
              aria-label="User profile"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="hidden sm:inline text-sm font-medium text-foreground">
                {user?.name}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                <div className="px-4 py-3 border-b border-border">
                  <p className="text-sm font-medium text-foreground">{user?.name}</p>
                  <p className="text-xs text-muted-foreground">{user?.studentId}</p>
                  {user?.role === 'admin' && (
                    <p className="text-xs text-primary font-medium mt-1">平台管理员</p>
                  )}
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  登出
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
