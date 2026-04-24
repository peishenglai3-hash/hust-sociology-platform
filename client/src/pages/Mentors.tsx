import { Users } from 'lucide-react';
import ModulePage from './ModulePage';

export default function Mentors() {
  return (
    <ModulePage
      title="导师信息"
      description="导师联系方式、研究方向、办公地点 - 快速找到你的指导老师"
      icon={<Users className="w-8 h-8" />}
      itemCount={6}
    />
  );
}
