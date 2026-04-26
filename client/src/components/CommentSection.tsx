import { Comment, addComment } from '@/data/reviews';
import { MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CommentSectionProps {
  mentorId: string;
  comments: Comment[];
  onCommentAdded?: (comment: Comment) => void;
}

export default function CommentSection({
  mentorId,
  comments,
  onCommentAdded
}: CommentSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorYear, setAuthorYear] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!authorName.trim() || !newComment.trim()) {
      alert('请填写昵称和留言内容');
      return;
    }

    setIsSubmitting(true);

    // 模拟提交延迟
    setTimeout(() => {
      const comment = addComment({
        mentorId,
        authorName,
        authorYear: authorYear || undefined,
        content: newComment,
        timestamp: new Date()
      });

      setNewComment('');
      setAuthorName('');
      setAuthorYear('');
      setIsSubmitting(false);

      if (onCommentAdded) {
        onCommentAdded(comment);
      }

      // 显示成功提示
      alert('留言已发布！');
    }, 500);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div
        className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg border border-border cursor-pointer hover:bg-secondary/40 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-primary" />
          <span className="font-semibold text-foreground">
            互动留言 ({comments.length})
          </span>
        </div>
        <span className="text-sm text-muted-foreground">
          {isExpanded ? '收起' : '展开'}
        </span>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="space-y-4">
          {/* New Comment Form */}
          <form onSubmit={handleSubmit} className="p-4 bg-card border border-border rounded-lg space-y-3">
            <h4 className="font-semibold text-foreground">发布留言</h4>

            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="你的昵称"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="px-3 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all text-sm"
              />
              <input
                type="text"
                placeholder="年级（如 2024级）"
                value={authorYear}
                onChange={(e) => setAuthorYear(e.target.value)}
                className="px-3 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all text-sm"
              />
            </div>

            <textarea
              placeholder="分享你的想法、问题或建议..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 rounded-lg bg-input border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all text-sm resize-none"
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? '发布中...' : '发布留言'}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              💡 提示：请文明留言，分享真实的选导师经验和建议，帮助其他同学做出更好的选择。
            </p>
          </form>

          {/* Comments List */}
          <div className="space-y-3">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.id} className="p-4 bg-card border border-border rounded-lg">
                  {/* Author Info */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-foreground">{comment.authorName}</span>
                    {comment.authorYear && (
                      <span className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded">
                        {comment.authorYear}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground ml-auto">
                      {comment.timestamp.toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Comment Content */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {comment.content}
                  </p>

                  {/* Replies */}
                  {comment.replies && comment.replies.length > 0 && (
                    <div className="ml-4 pt-3 border-l-2 border-border space-y-3">
                      {comment.replies.map((reply) => (
                        <div key={reply.id}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-sm text-foreground">
                              {reply.authorName}
                            </span>
                            {reply.authorYear && (
                              <span className="text-xs bg-primary/10 text-primary px-1.5 py-0.5 rounded">
                                {reply.authorYear}
                              </span>
                            )}
                            <span className="text-xs text-muted-foreground ml-auto">
                              {reply.timestamp.toLocaleDateString('zh-CN', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {reply.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm">暂无留言，成为第一个发布留言的人吧！</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
