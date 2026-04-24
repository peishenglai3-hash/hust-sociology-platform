import { GraduationCap } from 'lucide-react';
import ModulePage from './ModulePage';

export default function Review() {
  return (
    <ModulePage
      title="复习资料"
      description="考试复习指南、历年真题、学习笔记 - 助力你的考试准备"
      icon={<GraduationCap className="w-8 h-8" />}
      itemCount={10}
    />
  );
}
