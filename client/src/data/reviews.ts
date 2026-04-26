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

// 示例评价数据
export const reviews: Review[] = [
  {
    id: 'review-001',
    mentorId: 'assoc-012',
    studentName: '李同学',
    studentYear: '2023级',
    rating: 5,
    title: '彭老师很好相处，研究方向新颖',
    content: '彭老师的课程讲得很清楚，对学生的研究方向给予了很多建议和指导。虽然要求比较严格，但这对我们的学术成长很有帮助。推荐给有兴趣研究数字社会的同学！',
    timestamp: new Date('2026-04-20'),
    helpful: 12,
    tags: ['友好', '要求严格', '研究方向新颖']
  },
  {
    id: 'review-002',
    mentorId: 'assoc-012',
    studentName: '王同学',
    studentYear: '2024级',
    rating: 4,
    title: '学到了很多关于技术治理的知识',
    content: '彭老师在技术治理方向的研究很深入，能够引导学生思考一些前沿的学术问题。建议同学们在选择研究方向时要想清楚，因为彭老师对学生的学术训练要求比较高。',
    timestamp: new Date('2026-04-18'),
    helpful: 8,
    tags: ['学术严谨', '前沿研究']
  },
  {
    id: 'review-003',
    mentorId: 'prof-006',
    studentName: '张同学',
    studentYear: '2023级',
    rating: 5,
    title: '果老师人很好，研究方向有趣',
    content: '果老师研究人口问题，这个方向很有现实意义。老师很有耐心，经常给我们答疑解惑。实验室的氛围也很融洽，大家互相帮助。',
    timestamp: new Date('2026-04-15'),
    helpful: 15,
    tags: ['耐心', '现实意义', '氛围好']
  },
  {
    id: 'review-004',
    mentorId: 'prof-006',
    studentName: '陈同学',
    studentYear: '2024级',
    rating: 4,
    title: '人口社会学方向很有前景',
    content: '果老师的研究方向涉及人口性别失衡等重要社会问题，学术价值很高。老师会定期组织组会讨论，能够学到很多东西。',
    timestamp: new Date('2026-04-12'),
    helpful: 10,
    tags: ['学术价值高', '组织有序']
  },
  {
    id: 'review-005',
    mentorId: 'assoc-014',
    studentName: '刘同学',
    studentYear: '2023级',
    rating: 5,
    title: '谢老师在养老保障方向很专业',
    content: '谢老师在社会保障和养老方向有很深的研究积累。老师很支持学生参加学术会议和发表论文，对我们的学术发展很有帮助。',
    timestamp: new Date('2026-04-10'),
    helpful: 9,
    tags: ['专业', '支持发表论文']
  },
  {
    id: 'review-006',
    mentorId: 'assoc-001',
    studentName: '周同学',
    studentYear: '2024级',
    rating: 4,
    title: '陈老师的课程很实用',
    content: '陈老师讲授的经济社会学和组织社会学课程很有实践意义。老师会结合现实案例讲解理论，帮助我们理解社会现象。',
    timestamp: new Date('2026-04-08'),
    helpful: 7,
    tags: ['实用', '结合案例']
  }
];

// 示例留言数据
export const comments: Comment[] = [
  {
    id: 'comment-001',
    mentorId: 'assoc-012',
    authorName: '小李',
    authorYear: '2024级',
    content: '请问彭老师今年还招收硕士生吗？有什么具体要求吗？',
    timestamp: new Date('2026-04-22'),
    replies: [
      {
        id: 'reply-001',
        mentorId: 'assoc-012',
        authorName: '学长学姐',
        authorYear: '2023级',
        content: '一般来说彭老师每年都会招收2-3名硕士生。建议你先去看看老师的最新论文，了解研究方向，然后主动联系老师。',
        timestamp: new Date('2026-04-22')
      }
    ]
  },
  {
    id: 'comment-002',
    mentorId: 'prof-006',
    authorName: '小王',
    authorYear: '2024级',
    content: '果老师的邮箱是什么？想咨询一下研究生申请的事情。',
    timestamp: new Date('2026-04-21'),
    replies: [
      {
        id: 'reply-002',
        mentorId: 'prof-006',
        authorName: '小张',
        authorYear: '2023级',
        content: '邮箱在导师信息页面就有啊，点击邮箱地址可以直接发送邮件。',
        timestamp: new Date('2026-04-21')
      }
    ]
  },
  {
    id: 'comment-003',
    mentorId: 'assoc-014',
    authorName: '小刘',
    authorYear: '2024级',
    content: '谢老师的研究方向是否接受跨专业的学生？',
    timestamp: new Date('2026-04-20')
  }
];

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
