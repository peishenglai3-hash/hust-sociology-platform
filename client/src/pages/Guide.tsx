import { Lightbulb } from 'lucide-react';
import ModulePage from './ModulePage';

export default function Guide() {
  return (
    <ModulePage
      title="学习指南"
      description="学习建议、生活指南、校园资源 - 充分利用学院和学校的各项资源"
      icon={<Lightbulb className="w-8 h-8" />}
      itemCount={9}
    />
  );
}
