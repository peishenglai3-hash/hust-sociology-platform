import { Mail, MapPin, BookOpen, Star, ArrowRight } from 'lucide-react';
import { Mentor } from '@/data/mentors';
import { getMentorReviews, getMentorAverageRating } from '@/data/reviews';
import { useState } from 'react';
import { Link } from 'wouter';

interface MentorCardProps {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: MentorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const reviews = getMentorReviews(mentor.id);
  const averageRating = getMentorAverageRating(mentor.id);

  return (
    <div className="rounded-lg border border-border bg-card hover:shadow-md transition-all duration-300 overflow-hidden group">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 border-b border-border">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground">{mentor.name}</h3>
            <p className="text-sm font-medium text-primary">{mentor.title}</p>
            {reviews.length > 0 && (
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < Math.round(Number(averageRating))
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">({reviews.length})</span>
              </div>
            )}
          </div>
          {mentor.gender && (
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
              {mentor.gender}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Basic Info */}
        <div className="text-sm text-muted-foreground space-y-1">
          {mentor.origin && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{mentor.origin}</span>
            </div>
          )}
          {mentor.education && (
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>学位：{mentor.education}</span>
            </div>
          )}
        </div>

        {/* Research Directions */}
        <div>
          <p className="text-xs font-semibold text-foreground mb-2">研究方向：</p>
          <div className="flex flex-wrap gap-1">
            {mentor.researchDirections.slice(0, 3).map((direction, idx) => (
              <span
                key={idx}
                className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded"
              >
                {direction}
              </span>
            ))}
            {mentor.researchDirections.length > 3 && (
              <span className="text-xs text-muted-foreground px-2 py-1">
                +{mentor.researchDirections.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Contact Info */}
        {(mentor.email || mentor.phone || mentor.office) && (
          <div className="text-sm space-y-1 pt-2 border-t border-border">
            {mentor.email && (
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${mentor.email}`} className="truncate hover:underline">
                  {mentor.email}
                </a>
              </div>
            )}
            {mentor.phone && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-xs">📞</span>
                <span>{mentor.phone}</span>
              </div>
            )}
            {mentor.office && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-xs">🏢</span>
                <span>{mentor.office}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 mt-3 pt-3 border-t border-border">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {isExpanded ? '收起' : '详情'}
          </button>
          <Link href={`/mentor/${mentor.id}`} className="flex-1 flex items-center justify-center gap-1 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded transition-colors">
            查看全部
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 bg-secondary/20 border-t border-border">
          {mentor.bio && (
            <div>
              <p className="text-xs font-semibold text-foreground mb-1">个人简介：</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{mentor.bio}</p>
            </div>
          )}
          {mentor.achievements && mentor.achievements.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-foreground mb-2">主要成果：</p>
              <ul className="space-y-1">
                {mentor.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary">•</span> {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
