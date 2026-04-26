import { useState } from 'react';
import { useLocation } from 'wouter';
import { Lock, User, BookOpen, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { verifyStudent, registerStudent, saveAuthSession } from '@/data/auth';

export default function Login() {
  const [, setLocation] = useLocation();
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 验证输入
      if (!name.trim()) {
        setError('请输入你的姓名');
        setIsLoading(false);
        return;
      }

      if (!studentId.trim()) {
        setError('请输入你的学号');
        setIsLoading(false);
        return;
      }

      // 学号格式验证（HUST学号通常为U开头 + 9位数字）
      if (!/^U\d{9}$/.test(studentId.trim())) {
        setError('学号格式不正确，请输入形如 U202515984 的学号');
        setIsLoading(false);
        return;
      }

      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 500));

      // 尝试验证现有学生
      let student = verifyStudent(name.trim(), studentId.trim());

      if (!student) {
        // 如果不存在，则注册新学生
        if (!isRegistering) {
          setIsRegistering(true);
          setError('');
          setIsLoading(false);
          return;
        }
        student = registerStudent(name.trim(), studentId.trim());
      }

      // 保存认证会话
      saveAuthSession(student);

      // 重定向到首页
      setLocation('/');
    } catch (err) {
      setError('发生错误，请重试');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">社会学院平台</h1>
          <p className="text-muted-foreground">华中科技大学社会学院信息整合与管理平台</p>
        </div>

        {/* Login Card */}
        <div className="bg-card border border-border rounded-lg shadow-lg p-8 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              {isRegistering ? '首次使用，请注册' : '学生身份验证'}
            </h2>
            <p className="text-sm text-muted-foreground">
              {isRegistering
                ? '输入你的真实信息以创建账户'
                : '输入你的姓名和学号以验证身份'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                姓名
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="请输入你的真实姓名"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError('');
                    setIsRegistering(false);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Student ID Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                学号
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="例如：U202515984"
                  value={studentId}
                  onChange={(e) => {
                    setStudentId(e.target.value.toUpperCase());
                    setError('');
                    setIsRegistering(false);
                  }}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  disabled={isLoading}
                  maxLength={10}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                学号格式：U + 9位数字
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 transition-all"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  {isRegistering ? '创建账户中...' : '验证中...'}
                </span>
              ) : isRegistering ? (
                '创建账户'
              ) : (
                '验证身份'
              )}
            </Button>
          </form>

          {/* Info Box */}
          <div className="p-4 bg-secondary/20 border border-border rounded-lg">
            <h4 className="font-medium text-foreground text-sm mb-2">📋 注意事项</h4>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• 请输入你的真实姓名和学号</li>
              <li>• 首次登录时将自动创建账户</li>
              <li>• 你的信息仅用于身份验证，不会被泄露</li>
              <li>• 学号格式：U + 9位数字（如 U202515984）</li>
            </ul>
          </div>

          {/* Demo Hint */}
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h4 className="font-medium text-foreground text-sm mb-2">💡 演示账户</h4>
            <p className="text-xs text-muted-foreground mb-2">
              你可以使用以下信息登录以体验平台：
            </p>
            <div className="space-y-1 text-xs font-mono bg-background p-2 rounded border border-border">
              <p>姓名：<span className="text-primary">赖培胜</span></p>
              <p>学号：<span className="text-primary">U202515984</span></p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-muted-foreground">
          <p>华中科技大学社会学院 © 2026</p>
          <p>为学院同学服务的信息整合平台</p>
        </div>
      </div>
    </div>
  );
}
