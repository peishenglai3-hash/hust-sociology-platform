import { Calendar } from 'lucide-react';
import ModulePage from './ModulePage';

export default function CalendarPage() {
  return (
    <ModulePage
      title="活动日历"
      description="学院活动、讲座、重要日期提醒 - 不错过任何重要事件"
      icon={<Calendar className="w-8 h-8" />}
      itemCount={4}
    />
  );
}
