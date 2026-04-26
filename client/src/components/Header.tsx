import { Search, Bell, User } from 'lucide-react';

export default function Header() {
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
          <button
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
            aria-label="User profile"
          >
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
