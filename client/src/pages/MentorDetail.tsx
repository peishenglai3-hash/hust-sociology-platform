import { useRoute, Link } from 'wouter';
import { ArrowLeft, Mail, MapPin, BookOpen, Star, MessageCircle } from 'lucide-react';
import { mentors } from '@/data/mentors';
import { getMentorReviews, getMentorComments, getMentorAverageRating } from '@/data/reviews';
import ReviewCard from '@/components/ReviewCard';
import CommentSection from '@/components/CommentSection';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function MentorDetail() {
  const [, params] = useRoute('/mentor/:id');
  const mentorId = (params?.id as string) || '';
  const [comments, setComments] = useState(getMentorComments(mentorId));

  const mentor = mentors.find(m => m.id === mentorId);
  const reviews = getMentorReviews(mentorId);
  const averageRating = getMentorAverageRating(mentorId);

  if (!mentor) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">导师不存在</h1>
          <p className="text-muted-foreground mb-4">抱歉，找不到该导师的信息</p>
          <Link href="/mentors">
            <a className="text-primary hover:text-primary/80">返回导师列表</a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <Link href="/mentors">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              返回导师列表
            </a>
          </Link>

          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">
                {mentor.name.charAt(0)}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">{mentor.name}</h1>
                <span className="text-lg font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {mentor.title}
                </span>
              </div>

              {/* Rating */}
              {reviews.length > 0 && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.round(Number(averageRating))
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{averageRating}</span>
                  <span className="text-sm text-muted-foreground">({reviews.length} 条评价)</span>
                </div>
              )}

              {/* Basic Info */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {mentor.origin && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    {mentor.origin}
                  </div>
                )}
                {mentor.education && (
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {mentor.education}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            {mentor.bio && (
              <section className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-lg font-semibold text-foreground mb-4">个人简介</h2>
                <p className="text-muted-foreground leading-relaxed">{mentor.bio}</p>
              </section>
            )}

            {/* Research Directions */}
            <section className="p-6 bg-card border border-border rounded-lg">
              <h2 className="text-lg font-semibold text-foreground mb-4">研究方向</h2>
              <div className="flex flex-wrap gap-2">
                {mentor.researchDirections.map((direction, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {direction}
                  </span>
                ))}
              </div>
            </section>

            {/* Achievements */}
            {mentor.achievements && mentor.achievements.length > 0 && (
              <section className="p-6 bg-card border border-border rounded-lg">
                <h2 className="text-lg font-semibold text-foreground mb-4">主要成果</h2>
                <ul className="space-y-2">
                  {mentor.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">•</span> {achievement}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Reviews Section */}
            {reviews.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  学生评价 ({reviews.length})
                </h2>
                <div className="grid gap-4">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              </section>
            )}

            {/* Comment Section */}
            <section id="comment-section">
              <CommentSection
                mentorId={mentor.id}
                comments={comments}
                onCommentAdded={(comment) => {
                  setComments([comment, ...comments]);
                }}
              />
            </section>
          </div>

          {/* Right Column - Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 p-6 bg-card border border-border rounded-lg space-y-4">
              <h3 className="font-semibold text-foreground">联系方式</h3>

              {mentor.email && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">电子邮箱</p>
                  <a
                    href={`mailto:${mentor.email}`}
                    className="flex items-center gap-2 p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium">{mentor.email}</span>
                  </a>
                </div>
              )}

              {mentor.phone && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">联系方式</p>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="text-sm text-foreground">{mentor.phone}</p>
                  </div>
                </div>
              )}

              {mentor.office && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">办公地点</p>
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <p className="text-sm text-foreground">{mentor.office}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border space-y-2">
                {mentor.email && (
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                    onClick={() => window.location.href = `mailto:${mentor.email}`}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    发送邮件
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full border-border hover:bg-secondary"
                  onClick={() => {
                    const element = document.getElementById('comment-section');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  留言提问
                </Button>
              </div>

              {/* Stats */}
              <div className="pt-4 border-t border-border space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">学生评价</span>
                  <span className="font-semibold text-foreground">{reviews.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">互动留言</span>
                  <span className="font-semibold text-foreground">{comments.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
