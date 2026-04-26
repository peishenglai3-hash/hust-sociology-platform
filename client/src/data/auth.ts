export interface VerifiedStudent {
  id: string;
  name: string;
  studentId: string;
  joinDate: Date;
  role?: 'admin' | 'student'; // admin: 平台管理员，student: 普通学生
}

export interface AuthSession {
  studentId: string;
  name: string;
  verifiedAt: Date;
}

// 已验证的学生列表（初始化时包含平台创建者）
export const verifiedStudents: VerifiedStudent[] = [
  {
    id: 'student-001',
    name: '赖培胜',
    studentId: 'U202515984',
    joinDate: new Date('2026-04-26'),
    role: 'admin'
  }
];

// 本地存储键
const AUTH_SESSION_KEY = 'hust_sociology_auth_session';

// 验证学生身份
export const verifyStudent = (name: string, studentId: string): VerifiedStudent | null => {
  const verified = verifiedStudents.find(
    s => s.name === name && s.studentId === studentId
  );
  return verified || null;
};

// 注册新学生（需要验证）
export const registerStudent = (name: string, studentId: string): VerifiedStudent => {
  // 检查是否已存在
  const existing = verifiedStudents.find(
    s => s.name === name && s.studentId === studentId
  );
  
  if (existing) {
    return existing;
  }

  // 创建新学生记录
  const newStudent: VerifiedStudent = {
    id: `student-${Date.now()}`,
    name,
    studentId,
    joinDate: new Date(),
    role: 'student'
  };

  verifiedStudents.push(newStudent);
  return newStudent;
};

// 保存认证会话到本地存储
export const saveAuthSession = (student: VerifiedStudent) => {
  const session: AuthSession = {
    studentId: student.studentId,
    name: student.name,
    verifiedAt: new Date()
  };
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
};

// 获取当前认证会话
export const getAuthSession = (): AuthSession | null => {
  try {
    const session = localStorage.getItem(AUTH_SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch {
    return null;
  }
};

// 清除认证会话
export const clearAuthSession = () => {
  localStorage.removeItem(AUTH_SESSION_KEY);
};

// 检查是否已登录
export const isAuthenticated = (): boolean => {
  return getAuthSession() !== null;
};

// 获取当前用户
export const getCurrentUser = (): VerifiedStudent | null => {
  const session = getAuthSession();
  if (!session) return null;
  
  return verifiedStudents.find(
    s => s.studentId === session.studentId && s.name === session.name
  ) || null;
};
