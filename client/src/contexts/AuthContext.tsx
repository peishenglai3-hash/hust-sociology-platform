import { createContext, useContext, useEffect, useState } from 'react';
import { VerifiedStudent, getAuthSession, clearAuthSession, getCurrentUser } from '@/data/auth';

interface AuthContextType {
  user: VerifiedStudent | null;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<VerifiedStudent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 检查是否有已保存的认证会话
    const session = getAuthSession();
    if (session) {
      const currentUser = getCurrentUser();
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  const logout = () => {
    clearAuthSession();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
