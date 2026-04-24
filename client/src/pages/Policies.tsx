import { FileText } from 'lucide-react';
import ModulePage from './ModulePage';

export default function Policies() {
  return (
    <ModulePage
      title="政策文件"
      description="学院规章制度、通知公告、重要文件 - 了解学院的各项政策"
      icon={<FileText className="w-8 h-8" />}
      itemCount={8}
    />
  );
}
