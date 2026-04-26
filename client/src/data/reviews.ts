export interface Review {
  id: string;
  mentorId: string;
  studentName: string;
  studentYear?: string; // 如 "2024级"
  rating: number; // 1-5
  title: string;
  content: string;
  timestamp: Date;
  helpful?: number; // 点赞数
  tags?: string[]; // 如 "严谨"、"友好"、"要求高"等
}

export interface Comment {
  id: string;
  mentorId: string;
  authorName: string;
  authorYear?: string;
  content: string;
  timestamp: Date;
  replies?: Comment[];
}

// 空的评价数据数组（等待后端集成）
export const reviews: Review[] = [];

// 空的留言数据数组（等待后端集成）
export const comments: Comment[] = [];

// 获取导师的评价
export const getMentorReviews = (mentorId: string) => {
  return reviews.filter(r => r.mentorId === mentorId).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

// 获取导师的留言
export const getMentorComments = (mentorId: string) => {
  return comments.filter(c => c.mentorId === mentorId).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
};

// 计算导师平均评分
export const getMentorAverageRating = (mentorId: string) => {
  const mentorReviews = reviews.filter(r => r.mentorId === mentorId);
  if (mentorReviews.length === 0) return 0;
  const sum = mentorReviews.reduce((acc, r) => acc + r.rating, 0);
  return (sum / mentorReviews.length).toFixed(1);
};

// 添加评价
export const addReview = (review: Omit<Review, 'id'>) => {
  const newReview: Review = {
    ...review,
    id: `review-${Date.now()}`
  };
  reviews.push(newReview);
  return newReview;
};

// 添加留言
export const addComment = (comment: Omit<Comment, 'id'>) => {
  const newComment: Comment = {
    ...comment,
    id: `comment-${Date.now()}`
  };
  comments.push(newComment);
  return newComment;
};
