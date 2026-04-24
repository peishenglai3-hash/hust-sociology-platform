import { BookOpen } from 'lucide-react';
import ModulePage from './ModulePage';

export default function Academic() {
  return (
    <ModulePage
      title="学术资料"
      description="课程讲义、研究论文、学术资源库 - 为你的学术研究提供全面支持"
      icon={<BookOpen className="w-8 h-8" />}
      itemCount={12}
    />
  );
}
