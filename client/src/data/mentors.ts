export interface Mentor {
  id: string;
  name: string;
  title: string; // 教授、副教授、讲师
  gender?: string;
  birthYear?: number;
  origin?: string;
  education?: string;
  researchDirections: string[];
  achievements?: string[];
  email?: string;
  phone?: string;
  office?: string;
  bio?: string;
}

export const mentors: Mentor[] = [
  // 教授
  {
    id: 'prof-001',
    name: '陈颀',
    title: '教授',
    gender: '男',
    birthYear: 1986,
    origin: '广西钦州',
    education: '博士',
    researchDirections: ['政治社会学', '历史社会学', '土地制度改革', '地方政府行为'],
    achievements: [
      '专著《"公益经营者"：基层政府的新角色与实践困境》（2019年）',
      '专著《历史钟摆：中国农地增值收益分配制度变革研究（1978-2022）》（2024年）'
    ],
    bio: '华中科技大学社会学院教授，博士生导师。研究当代中国土地制度改革与地方政府行为、"家"与转型中国、社会重建等议题。'
  },
  {
    id: 'prof-002',
    name: '曹志刚',
    title: '教授',
    researchDirections: ['城市社区治理', '社区更新', '组织研究', '移民研究'],
    achievements: [
      '著作《城市中国的社区治理结构转型》（2020年）',
      '论文《城市社区治理体系：常态运转与偶态应急的静态差异与动态转换——重大公共卫生危机的启示》（2022年）'
    ],
    email: '168caozhigang@163.com',
    bio: '教授、博士生导师、副院长。中山大学城市社会研究中心研究员，中国人民大学和谐社区研究中心学术委员，华中科技大学国家治理研究院研究员。'
  },
  {
    id: 'prof-003',
    name: '狄金华',
    title: '教授',
    gender: '男',
    birthYear: 1982,
    origin: '湖北当阳',
    education: '博士',
    researchDirections: ['农村社会学', '组织社会学'],
    achievements: [
      '专著《被困的治理：河镇的复合治理与农户策略（1980—2009）》（2015年）',
      '论文《农村政策调整的民情基础》（2020年）'
    ],
    bio: '华中科技大学社会学院教授、博士生导师、院长。新加坡南洋理工大学社会学系访问学者，民政部全国基层政权建设和社区治理专家委员会委员。'
  },
  {
    id: 'prof-004',
    name: '丁建定',
    title: '教授',
    gender: '男',
    birthYear: 1964,
    origin: '河南省南阳市',
    education: '博士',
    researchDirections: ['西方社会保障制度史', '社会福利思想', '中国社会保障制度', '养老服务体系'],
    achievements: [
      '论文《19世纪中期西方社会治理理论的多样化》（2024年）',
      '著作《中国社会保障制度整合与体系完善重大问题研究》（2022年）'
    ],
    bio: '华中科技大学社会学院二级教授，博士生导师。湖北省人文社科重点研究基地"华中科技大学养老服务研究中心"主任，中国老龄协会老龄科学研究基地主任，《养老研究》学术集刊主编。'
  },
  {
    id: 'prof-005',
    name: '郭林',
    title: '教授',
    education: '博士',
    researchDirections: ['养老保障', '社会保障'],
    achievements: [
      '论文《民间资本参与养老服务的优化路径》（2016年）',
      '著作《中国社会养老服务资源优化配置》（2020年）'
    ],
    bio: '华中科技大学与瑞典隆德大学联合培养博士，中国人民大学公共管理学博士后，德国慕尼黑大学福利政治学博士后。现为华中科技大学社会学院教授、博士生导师。'
  },
  {
    id: 'prof-006',
    name: '果臻',
    title: '教授',
    gender: '男',
    birthYear: 1981,
    origin: '天津',
    education: '博士',
    researchDirections: ['人口动态与社会可持续发展', '人口发展规划', '人口政策'],
    achievements: [
      '论文《中国男性婚姻挤压的态势与特征——基于第七次全国人口普查数据的分析》（2023年）',
      '专著《中国人口性别失衡与大龄未婚男性的生存研究》（2018年）'
    ],
    email: 'guozhen@hust.edu.cn',
    bio: '华中科技大学社会学院教授，博士生导师。'
  },
  {
    id: 'prof-007',
    name: '刘成斌',
    title: '教授',
    gender: '男',
    birthYear: 1977,
    education: '博士',
    researchDirections: ['人口社会学', '科技社会学', '发展社会学'],
    achievements: [
      '论文《风险社会的新向度：新冠肺炎疫情的理论透视》（2020年）',
      '著作《农民工的终结》（2017年）'
    ],
    bio: '华中科技大学社会学院教授、副院长，博士生导师。中国社会学会常务理事，青年社会学会副理事长，美国密歇根大学（安娜堡）访问学者。'
  },
  {
    id: 'prof-008',
    name: '任敏',
    title: '教授',
    education: '博士',
    researchDirections: ['"五社联动"与基层治理', '社会工作实践创新', '未成年人保护', '社会工作理论'],
    achievements: [
      '论文《"五社联动"的缘起、内涵与机制》（2024年）',
      '著作《疫情丧亲者的哀伤辅导社会工作实务》（2024年）'
    ],
    email: 'renmint@163.com',
    bio: '教授，博士生导师；高级社会工作师。'
  },
  {
    id: 'prof-009',
    name: '石人炳',
    title: '教授',
    gender: '男',
    birthYear: 1962,
    origin: '湖北天门',
    education: '法学博士',
    researchDirections: ['人口学', '老年保障', '社会政策'],
    achievements: [
      '论文《中国生育政策调整效果评估》（2018年）',
      '著作《人口变动对教育的影响》（2005年）'
    ],
    bio: '社会学学院副院长，人口与政策研究所所长。'
  },
  {
    id: 'prof-010',
    name: '孙秋云',
    title: '教授',
    gender: '男',
    birthYear: 1960,
    education: '史学博士',
    researchDirections: ['社会-文化人类学', '民族学', '城乡文化研究', '社区建设', '乡村社会学'],
    bio: '华中科技大学社会学系教授，博士生导师，兼城乡文化建设研究中心主任。'
  },
  {
    id: 'prof-011',
    name: '王茂福',
    title: '教授',
    education: '经济学博士',
    researchDirections: ['经济社会学', '劳动社会学', '工程移民', '福利社会学', '组织社会学', '制度研究'],
    achievements: [
      '论文《新经济社会学的价格理论论析》（2011年）',
      '著作《拼车的发展及其效应》（2010年）'
    ],
    email: '1750981708@qq.com.cn',
    bio: '华中科技大学社会学院三级教授、博导。历史学学士、社会学硕士、经济学博士。'
  },
  {
    id: 'prof-012',
    name: '向德平',
    title: '教授',
    education: '博士',
    researchDirections: ['发展社会学', '社会政策', '贫困治理', '社会工作'],
    achievements: [
      '论文《多元与发展：相对贫困的内涵及治理》（2020年）',
      '著作《中国减贫行动1978-2018》（2018年）'
    ],
    bio: '二级教授，博士生导师。华中科技大学减贫发展研究中心、华中科技大学社会工作研究中心主任。'
  },
  {
    id: 'prof-013',
    name: '郑丹丹',
    title: '教授',
    gender: '女',
    birthYear: 1971,
    education: '法学博士',
    researchDirections: ['家庭社会学', '网络与文化研究', '社会分层与流动'],
    achievements: [
      '论文《身体的社会型塑与性别象征——对阿文的疾病现象学分析及性别解读》（2007年）',
      '著作《中国城市家庭夫妻权力研究》（2004年）'
    ],
    bio: '1992年毕业于原华中理工大学社会学系，2002年获北京大学法学博士学位。'
  },

  // 副教授
  {
    id: 'assoc-001',
    name: '陈文超',
    title: '副教授',
    gender: '男',
    birthYear: 1982,
    origin: '湖北襄阳',
    education: '社会学博士',
    researchDirections: ['经济社会学', '组织社会学', '社会政策分析'],
    achievements: [
      '著作《劳动—生活均衡：返乡创业者的选择机制》',
      '著作《家户主义与进城创业组织运转》'
    ],
    email: 'chenwenchao@hust.edu.cn',
    bio: '华中科技大学社会学院副教授。主持多个科研项目，发表多篇学术论文。'
  },
  {
    id: 'assoc-002',
    name: '陈斌',
    title: '副教授',
    gender: '男',
    origin: '安徽安庆',
    education: '双博士学位',
    researchDirections: ['公益慈善', '社会政策'],
    achievements: ['发表30余篇学术论文'],
    email: 'chenbin2020@hust.edu.cn',
    bio: '中国人民大学与日本爱知大学联合培养双博士学位获得者。现为华中科技大学社会学院副研究员、博士生导师，公益慈善研究中心主任。'
  },
  {
    id: 'assoc-003',
    name: '高翔',
    title: '副教授',
    origin: '湖北宜昌',
    education: '社会工作博士',
    researchDirections: ['老年社会工作', '失智老人养老'],
    bio: '美国亚利桑那州立大学社会工作博士。2015年入职华中科技大学社会学系，2018年获副教授职称。'
  },
  {
    id: 'assoc-004',
    name: '郭秋菊',
    title: '副教授',
    gender: '女',
    education: '管理学博士',
    researchDirections: ['婚姻、家庭与养老', '弱势群体保护', '农民工市民化'],
    bio: '2014年12月毕业于西安交通大学，获得管理学博士学位。'
  },
  {
    id: 'assoc-005',
    name: '何菊',
    title: '副教授',
    gender: '女',
    origin: '四川绵竹',
    education: '社会学博士',
    researchDirections: ['社会人类学', '宗教与民间信仰', '少数民族文化变迁'],
    bio: '武汉大学社会学博士，华中科技大学社会学系副教授、硕士生导师。'
  },
  {
    id: 'assoc-006',
    name: '胡鹏辉',
    title: '副教授',
    gender: '男',
    origin: '四川营山',
    education: '社会学博士',
    researchDirections: ['情感社会学', '教育社会学', '青年社会学'],
    email: 'hupenghui@hust.edu.cn',
    bio: '南京大学社会学博士，副教授，硕士生导师。'
  },
  {
    id: 'assoc-007',
    name: '罗朝明',
    title: '副教授',
    gender: '男',
    birthYear: 1986,
    education: '社会学博士',
    researchDirections: ['理论社会学', '情感社会学', '现象学社会学'],
    achievements: [
      '主持教育部社科基金青年项目',
      '主持国家社科基金后期资助项目'
    ],
    email: 'luochaoming@hust.edu.cn',
    bio: '中央民族大学社会学学士，南京大学社会学硕士和博士。'
  },
  {
    id: 'assoc-008',
    name: '刘河庆',
    title: '副教授',
    education: '社会学博士',
    researchDirections: ['计算社会科学', '数字社会治理', '人机社会系统', 'AI for Society'],
    email: 'liuheqing321@163.com',
    bio: '中山大学社会学博士，现任华中科技大学社会学院副研究员，硕士生导师。华中科技大学数字社会研究中心主任。'
  },
  {
    id: 'assoc-009',
    name: '李娜',
    title: '副教授',
    gender: '女',
    origin: '河北张家口',
    education: '社会学博士',
    researchDirections: ['社会工作', '教育社会学'],
    email: 'nklina@163.com',
    bio: '南开大学社会学学士、硕士、博士，日本爱知大学博士候选人。'
  },
  {
    id: 'assoc-010',
    name: '苗大雷',
    title: '副教授',
    gender: '男',
    birthYear: 1985,
    origin: '河南济源',
    education: '法学博士',
    researchDirections: ['组织社会学', '社会治理'],
    achievements: [
      '著作《事业单位的制度变迁与基层治理》',
      '获第三届"中国社会学会年度十大好书推荐"提名'
    ],
    email: 'dalei@hust.edu.cn',
    bio: '中国人民大学社会学系法学博士，现为华中科技大学社会学院副教授、硕士生导师，任社会学系主任。'
  },
  {
    id: 'assoc-011',
    name: '欧阳肃通',
    title: '副教授',
    education: '博士',
    researchDirections: ['政治社会学', '宗教社会学'],
    bio: '北京大学学士、硕士，香港浸会大学博士。'
  },
  {
    id: 'assoc-012',
    name: '彭亚平',
    title: '副教授',
    origin: '湖北监利',
    education: '公共管理学博士',
    researchDirections: ['技术治理', '数字设计研究', '"物质转向"思潮'],
    email: 'pengyaping@hust.edu.cn',
    bio: '经济学学士，上海交通大学公共管理学博士。华中科技大学数字社会研究中心副主任。'
  },
  {
    id: 'assoc-013',
    name: '王彦蓉',
    title: '副教授',
    education: '博士',
    researchDirections: ['基层社会治理', '健康社会工作', '家庭教育与儿童发展', '社会学统计方法', '干预研究'],
    bio: '华中科技大学社会学院副教授，博士生导师。现任社会学院留学生教育中心主任，社会工作系副主任。'
  },
  {
    id: 'assoc-014',
    name: '谢勇才',
    title: '副教授',
    gender: '男',
    birthYear: 1988,
    origin: '江西赣州',
    education: '管理学博士',
    researchDirections: ['福利社会学', '养老保障与服务', '跨国劳动者社会保护', '社会保障国际化', '社会救助理论与政策'],
    achievements: [
      '出版1部学术专著',
      '主持2项国家社会科学基金',
      '主持多项中央高校基本科研业务费资助项目'
    ],
    email: 'xieyc2017@hust.edu.cn',
    bio: '毕业于中国人民大学劳动人事学院，现为华中科技大学社会学院副教授、博士生导师。'
  },
  {
    id: 'assoc-015',
    name: '杨蕾',
    title: '副教授',
    education: '社会福利哲学博士',
    researchDirections: ['亲职研究与家庭教育', '哀伤研究与老年人的健康福祉'],
    email: 'yangleiswk@hust.edu.cn',
    bio: '香港中文大学社会福利哲学博士，现任华中科技大学社会学院副研究员，硕士生导师。'
  },
  {
    id: 'assoc-016',
    name: '杨婷',
    title: '副教授',
    gender: '女',
    origin: '河南漯河',
    education: '管理学博士',
    researchDirections: ['婚姻家庭变迁', '女性福利与家庭政策', '人口与健康', '家庭暴力'],
    bio: '西安交通大学和新南威尔士大学联合培养博士生。'
  },
  {
    id: 'assoc-017',
    name: '张慧',
    title: '副教授',
    gender: '女',
    origin: '湖北黄冈',
    education: '心理学博士',
    researchDirections: ['组织管理', '精神健康干预'],
    achievements: ['著作《员工主动服务客户行为研究》'],
    email: 'zhanghui_0927@hust.edu.cn',
    bio: '华中师范大学心理学博士。'
  },

  // 讲师
  {
    id: 'lecturer-001',
    name: '盛禾',
    title: '讲师',
    gender: '女',
    birthYear: 1996,
    origin: '湖北武汉',
    education: '社会学硕士',
    researchDirections: ['人口社会学', '婚姻家庭社会学'],
    achievements: [
      '研究成果发表在《中国人口科学》、《人口研究》、《社会》等学术期刊',
      '多篇文章被人大复印资料全文转载'
    ],
    email: 'hesheng@hust.edu.cn',
    bio: '2025年毕业于北京大学社会学系，现为华中科技大学社会学院讲师。'
  },
  {
    id: 'lecturer-002',
    name: '王滢淇',
    title: '讲师',
    gender: '女',
    birthYear: 1992,
    researchDirections: ['养老服务', '老年社会工作', '儿童福利', '流动人口社会保障', '区域社会保障合作'],
    email: 'wangyingqi@hust.edu.cn',
    bio: '讲师。'
  },
  {
    id: 'lecturer-003',
    name: '吴帆',
    title: '讲师',
    gender: '男',
    birthYear: 1982,
    origin: '湖北黄石',
    education: '社会学博士',
    researchDirections: ['历史社会学', '政治社会学'],
    phone: 'QQ894949292',
    bio: '华中科技大学社会学系讲师。'
  },
  {
    id: 'lecturer-004',
    name: '鄢庆丰',
    title: '讲师',
    gender: '男',
    birthYear: 1972,
    origin: '湖南湘潭',
    education: '博士',
    researchDirections: ['政治社会学'],
    bio: '讲师。'
  },
  {
    id: 'lecturer-005',
    name: '张咏雪',
    title: '讲师',
    gender: '女',
    birthYear: 1995,
    origin: '广东南海',
    researchDirections: ['计算社会学', '数字社会', 'AI的社会影响'],
    email: 'zhangyongxue@hust.edu.cn',
    bio: '现为华中科技大学社会学院讲师。'
  },
  {
    id: 'lecturer-006',
    name: '周舒',
    title: '讲师',
    origin: '湖北武汉',
    researchDirections: ['儿童医务社会工作', '未成年人保护', '社工教育与督导'],
    email: 'zhoushu2021@hust.edu.cn',
    bio: '讲师。'
  },
  {
    id: 'lecturer-007',
    name: '赵阳',
    title: '讲师',
    gender: '男',
    birthYear: 1995,
    origin: '四川阆中',
    education: '社会学博士',
    researchDirections: ['数据治理', '基层政府研究', '信访研究'],
    achievements: [
      '赵阳，2021，《"制造形象"：上访事件中的故事言说》，《社会》第1期',
      '陈家建、赵阳，2019，《"低治理权"与基层购买公共服务困境研究》，《社会学研究》第1期',
      '陈家建、赵阳，2020，《"科级天花板"：县域治理视角下的基层官员晋升问题》，《开放时代》第5期'
    ],
    email: 'bluedaydream@hust.edu.cn',
    bio: '中山大学社会学博士，讲师。'
  },
  {
    id: 'lecturer-008',
    name: '朱震宇',
    title: '讲师',
    gender: '男',
    birthYear: 1997,
    education: '管理学博士',
    researchDirections: ['社会保障理论与政策', '老龄化与养老保障', '长期护理', '养老服务', '社会政策效果评估'],
    achievements: [
      '朱震宇，《长期护理保险对老年家庭照料的影响》，《中国人口科学》，2023年第3期',
      '朱震宇，《农村互助养老社区组织化的实践逻辑——基于全国农村互助养老的案例分析》，《内蒙古社会科学》，2023年第3期',
      '朱震宇，《居家社区机构养老服务一体化发展的优势、机制与困境——基于北京市海淀曜阳养老的个案分析》，《宁夏社会科学》，2022年第6期'
    ],
    email: 'zhuzhenyu@hust.edu.cn',
    office: '东七楼488',
    bio: '中国人民大学管理学博士，德国慕尼黑大学绍尔兄妹政治学院访问学者，讲师。'
  }
];

export const getTitleCounts = () => {
  const counts = {
    '教授': mentors.filter(m => m.title === '教授').length,
    '副教授': mentors.filter(m => m.title === '副教授').length,
    '讲师': mentors.filter(m => m.title === '讲师').length
  };
  return counts;
};
