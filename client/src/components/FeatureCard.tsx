import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  count?: number;
  gradient?: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
  href,
  count,
  gradient = 'from-primary/10 to-primary/5'
}: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className="group block h-full">
        <div
          className={`
            h-full rounded-xl border border-border bg-gradient-to-br ${gradient}
            p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20
            hover:translate-y-[-4px] cursor-pointer
          `}
        >
          {/* Icon */}
          <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {count !== undefined && (
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {count} 项资源
              </span>
            )}
            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
          </div>
        </div>
      </div>
    </Link>
  );
}
