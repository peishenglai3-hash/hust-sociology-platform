import { Review } from '@/data/reviews';
import { Star, ThumbsUp } from 'lucide-react';
import { useState } from 'react';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful || 0);

  const handleHelpful = () => {
    if (!isHelpful) {
      setIsHelpful(true);
      setHelpfulCount(helpfulCount + 1);
    }
  };

  return (
    <div className="rounded-lg border border-border bg-card p-4 hover:shadow-sm transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-foreground">{review.studentName}</h4>
            {review.studentYear && (
              <span className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded">
                {review.studentYear}
              </span>
            )}
          </div>
          <h3 className="text-sm font-medium text-foreground mb-2">{review.title}</h3>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1 ml-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
        {review.content}
      </p>

      {/* Tags */}
      {review.tags && review.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {review.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
        <span>
          {review.timestamp.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
        <button
          onClick={handleHelpful}
          disabled={isHelpful}
          className={`flex items-center gap-1 px-2 py-1 rounded transition-all ${
            isHelpful
              ? 'bg-primary/10 text-primary'
              : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
          }`}
        >
          <ThumbsUp className="w-3 h-3" />
          <span>{helpfulCount}</span>
        </button>
      </div>
    </div>
  );
}
