export interface VerifiedStudent {
  id: string;
  name: string;
  studentId: string;
  joinDate: Date;
  role?: 'admin' | 'student';
}

export interface AuthSession {
  studentId: string;
  name: string;
  verifiedAt: Date;
}

// 已验证的学生列表（包含平台创建者和全年级学生）
export const verifiedStudents: VerifiedStudent[] = [
  {
    id: 'student-001',
    name: '赖培胜',
    studentId: 'U202515984',
    joinDate: new Date('2026-04-26'),
    role: 'admin'
  },
  {
    id: 'student-002',
    name: '杨麒憬',
    studentId: 'U202510106',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-003',
    name: '赵嘉豪',
    studentId: 'U202510107',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-004',
    name: '王代衡',
    studentId: 'U202510108',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-005',
    name: '王德弘',
    studentId: 'U202510109',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-006',
    name: '杨涵',
    studentId: 'U202510110',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-007',
    name: '顾迪',
    studentId: 'U202510111',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-008',
    name: '王一力',
    studentId: 'U202510112',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-009',
    name: '潘王杰',
    studentId: 'U202510113',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-010',
    name: '陶一铭',
    studentId: 'U202510114',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-011',
    name: '王亭弼',
    studentId: 'U202510115',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-012',
    name: '封宇阳',
    studentId: 'U202510116',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-013',
    name: '崔旭鹏',
    studentId: 'U202510117',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-014',
    name: '钟昌宇',
    studentId: 'U202510118',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-015',
    name: '曹李响',
    studentId: 'U202510119',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-016',
    name: '陈星宇',
    studentId: 'U202510120',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-017',
    name: '刘景能',
    studentId: 'U202510121',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-018',
    name: '丁成',
    studentId: 'U202510122',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-019',
    name: '丘景天',
    studentId: 'U202510123',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-020',
    name: '王翊舟',
    studentId: 'U202510124',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-021',
    name: '许华同嘉',
    studentId: 'U202510125',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-022',
    name: '王頔',
    studentId: 'U202510126',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-023',
    name: '向正尧',
    studentId: 'U202510127',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-024',
    name: '熊宇',
    studentId: 'U202510128',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-025',
    name: '罗子翔',
    studentId: 'U202510129',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-026',
    name: '龙靖坤',
    studentId: 'U202510130',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-027',
    name: '刘熙程',
    studentId: 'U202510131',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-028',
    name: '何俊毅',
    studentId: 'U202510132',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-029',
    name: '彭子睿',
    studentId: 'U202510133',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-030',
    name: '欧阳越峰',
    studentId: 'U202510134',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-031',
    name: '田子昂',
    studentId: 'U202510135',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-032',
    name: '彭俊尧',
    studentId: 'U202510136',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-033',
    name: '宋建勋',
    studentId: 'U202510241',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-034',
    name: '李屹洋',
    studentId: 'U202510242',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-035',
    name: '路鑫宇',
    studentId: 'U202510243',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-036',
    name: '赵志博',
    studentId: 'U202510245',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-037',
    name: '李子奥',
    studentId: 'U202510246',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-038',
    name: '林子森',
    studentId: 'U202510247',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-039',
    name: '宁振轩',
    studentId: 'U202510248',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-040',
    name: '张宇轩',
    studentId: 'U202510249',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-041',
    name: '王思涵',
    studentId: 'U202510250',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-042',
    name: '卢晨',
    studentId: 'U202510251',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-043',
    name: '丛昭宇',
    studentId: 'U202510252',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-044',
    name: '李鑫鹏',
    studentId: 'U202510253',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-045',
    name: '王纲承',
    studentId: 'U202510254',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-046',
    name: '汪新桐',
    studentId: 'U202510255',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-047',
    name: '李想',
    studentId: 'U202510256',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-048',
    name: '魏子滔',
    studentId: 'U202510257',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-049',
    name: '宋弈非',
    studentId: 'U202510258',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-050',
    name: '郭劲江',
    studentId: 'U202510143',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-051',
    name: '李轩兆',
    studentId: 'U202510145',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-052',
    name: '吴骏鸣',
    studentId: 'U202510146',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-053',
    name: '王行健',
    studentId: 'U202510147',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-054',
    name: '刘松灏',
    studentId: 'U202510148',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-055',
    name: '刘名扬',
    studentId: 'U202510149',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-056',
    name: '栾夏天',
    studentId: 'U202510150',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-057',
    name: '刘睿晨',
    studentId: 'U202510151',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-058',
    name: '詹永鹏',
    studentId: 'U202510152',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-059',
    name: '刘晨',
    studentId: 'U202510153',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-060',
    name: '孙宇健',
    studentId: 'U202510154',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-061',
    name: '石成浩',
    studentId: 'U202510155',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-062',
    name: '林昕睿',
    studentId: 'U202510156',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-063',
    name: '龚亦陈',
    studentId: 'U202510157',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-064',
    name: '许子轩',
    studentId: 'U202510158',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-065',
    name: '孙俊壕',
    studentId: 'U202510159',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-066',
    name: '彭呈祥',
    studentId: 'U202510160',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-067',
    name: '严畅',
    studentId: 'U202510161',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-068',
    name: '丁攀',
    studentId: 'U202510162',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-069',
    name: '张丰毅',
    studentId: 'U202510163',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-070',
    name: '刘松旺',
    studentId: 'U202510164',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-071',
    name: '曹翰卿',
    studentId: 'U202510165',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-072',
    name: '何思羽',
    studentId: 'U202510166',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-073',
    name: '江安博',
    studentId: 'U202510167',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-074',
    name: '熊子毅',
    studentId: 'U202510168',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-075',
    name: '刘太平',
    studentId: 'U202510169',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-076',
    name: '黄毅韬',
    studentId: 'U202510170',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-077',
    name: '王俊松',
    studentId: 'U202510171',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-078',
    name: '蒋思成',
    studentId: 'U202510172',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-079',
    name: '周宸宇',
    studentId: 'U202510173',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-080',
    name: '许睿博',
    studentId: 'U202510174',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-081',
    name: '赵炫策',
    studentId: 'U202510216',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-082',
    name: '徐经纬',
    studentId: 'U202510217',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-083',
    name: '陈嘉宁',
    studentId: 'U202510218',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-084',
    name: '何雨轩',
    studentId: 'U202510219',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-085',
    name: '韩子贤',
    studentId: 'U202510220',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-086',
    name: '康铎',
    studentId: 'U202510221',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-087',
    name: '罗华俊',
    studentId: 'U202510222',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-088',
    name: '林星辰',
    studentId: 'U202510223',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-089',
    name: '朱思玮',
    studentId: 'U202510224',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-090',
    name: '胡承源',
    studentId: 'U202510225',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-091',
    name: '涂亦乐',
    studentId: 'U202510226',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-092',
    name: '周琰博',
    studentId: 'U202510227',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-093',
    name: '杨程涛',
    studentId: 'U202510228',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-094',
    name: '潘岳',
    studentId: 'U202510229',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-095',
    name: '张铭宇',
    studentId: 'U202510230',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-096',
    name: '周峻熙',
    studentId: 'U202510231',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-097',
    name: '赖慧国',
    studentId: 'U202510232',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-098',
    name: '胡嘉煜',
    studentId: 'U202510233',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-099',
    name: '张昊',
    studentId: 'U202510234',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-100',
    name: '钟迪科',
    studentId: 'U202510235',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-101',
    name: '苏易',
    studentId: 'U202510236',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-102',
    name: '肖李子帅',
    studentId: 'U202510237',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-103',
    name: '余政霖',
    studentId: 'U202510238',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-104',
    name: '井文凯',
    studentId: 'U202510239',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-105',
    name: '侯卜文',
    studentId: 'U202510180',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-106',
    name: '扈冉',
    studentId: 'U202510181',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-107',
    name: '刘国庆',
    studentId: 'U202510182',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-108',
    name: '杨曦铖',
    studentId: 'U202510183',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-109',
    name: '杨磊',
    studentId: 'U202510184',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-110',
    name: '邓明浩',
    studentId: 'U202510185',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-111',
    name: '刘家豪',
    studentId: 'U202510186',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-112',
    name: '刘明浩',
    studentId: 'U202510187',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-113',
    name: '刘思宇',
    studentId: 'U202510188',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-114',
    name: '唐正阳',
    studentId: 'U202510189',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-115',
    name: '赵修齐',
    studentId: 'U202510190',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-116',
    name: '刘宸铭',
    studentId: 'U202510191',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-117',
    name: '欧阳隆',
    studentId: 'U202510192',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-118',
    name: '董征',
    studentId: 'U202510193',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-119',
    name: '盛宇博',
    studentId: 'U202510194',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-120',
    name: '顾笑尘',
    studentId: 'U202510195',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-121',
    name: '李传奇',
    studentId: 'U202510196',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-122',
    name: '章子信',
    studentId: 'U202510197',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-123',
    name: '彭煊凯',
    studentId: 'U202510198',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-124',
    name: '贺晟',
    studentId: 'U202510199',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-125',
    name: '鲍嘉明',
    studentId: 'U202510200',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-126',
    name: '陶理',
    studentId: 'U202510201',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-127',
    name: '孙宇堂',
    studentId: 'U202510202',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-128',
    name: '罗天翼',
    studentId: 'U202510203',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-129',
    name: '杨子墨',
    studentId: 'U202510204',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-130',
    name: '周铭轩',
    studentId: 'U202510205',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-131',
    name: '武文龙',
    studentId: 'U202510206',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-132',
    name: '张植泰',
    studentId: 'U202510207',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-133',
    name: '吴治杙',
    studentId: 'U202510208',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-134',
    name: '于霁',
    studentId: 'U202510209',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-135',
    name: '杜姚文辉',
    studentId: 'U202510210',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-136',
    name: '张泽政',
    studentId: 'U202515931',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-137',
    name: '段钧然',
    studentId: 'U202515932',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-138',
    name: '李明恺',
    studentId: 'U202515933',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-139',
    name: '郭鼎奇',
    studentId: 'U202515934',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-140',
    name: '鄢定富',
    studentId: 'U202515935',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-141',
    name: '李正一',
    studentId: 'U202515956',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-142',
    name: '赵绍星',
    studentId: 'U202515957',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-143',
    name: '谢中浩',
    studentId: 'U202515958',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-144',
    name: '李东晋',
    studentId: 'U202515959',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-145',
    name: '龚子健',
    studentId: 'U202515960',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-146',
    name: '周锦程',
    studentId: 'U202515980',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-147',
    name: '孙海川',
    studentId: 'U202515981',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-148',
    name: '成屹卓',
    studentId: 'U202515982',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-149',
    name: '吴博睿',
    studentId: 'U202515983',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-150',
    name: '赖培胜',
    studentId: 'U202515984',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-151',
    name: '杨圳凯',
    studentId: 'U202590071',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-152',
    name: '李梓萱',
    studentId: 'U202515911',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-153',
    name: '钟鹤榕',
    studentId: 'U202515912',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-154',
    name: '郑宓',
    studentId: 'U202515913',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-155',
    name: '高歌',
    studentId: 'U202515914',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-156',
    name: '卢宣竹',
    studentId: 'U202515915',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-157',
    name: '龚晨',
    studentId: 'U202515916',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-158',
    name: '朱梓萌',
    studentId: 'U202515917',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-159',
    name: '赵嘉祺',
    studentId: 'U202515918',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-160',
    name: '章乃懿',
    studentId: 'U202515919',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-161',
    name: '隆湉',
    studentId: 'U202515920',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-162',
    name: '曾睿',
    studentId: 'U202515921',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-163',
    name: '卢雨欣',
    studentId: 'U202515922',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-164',
    name: '王依晨',
    studentId: 'U202515923',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-165',
    name: '黄梦菲',
    studentId: 'U202515924',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-166',
    name: '贺珍珍',
    studentId: 'U202515925',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-167',
    name: '李椿霖',
    studentId: 'U202515926',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-168',
    name: '万杰',
    studentId: 'U202515927',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-169',
    name: '蒋雨晴',
    studentId: 'U202515928',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-170',
    name: '李睿',
    studentId: 'U202515929',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-171',
    name: '古丽米热·买买斯地克',
    studentId: 'U202515930',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-172',
    name: '钟佳玉',
    studentId: 'U202515936',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-173',
    name: '贺羽凡',
    studentId: 'U202515937',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-174',
    name: '房雨童',
    studentId: 'U202515938',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-175',
    name: '李雨妍',
    studentId: 'U202515939',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-176',
    name: '黎冰艳',
    studentId: 'U202515940',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-177',
    name: '肖其萱',
    studentId: 'U202515941',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-178',
    name: '张清若',
    studentId: 'U202515942',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-179',
    name: '胡雨粟',
    studentId: 'U202515943',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-180',
    name: '叶子欣',
    studentId: 'U202515945',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-181',
    name: '吴可迪',
    studentId: 'U202515946',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-182',
    name: '王文煊',
    studentId: 'U202515947',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-183',
    name: '李瑞雪',
    studentId: 'U202515948',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-184',
    name: '姜直怡',
    studentId: 'U202515949',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-185',
    name: '蒋思敏',
    studentId: 'U202515950',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-186',
    name: '魏紫姝',
    studentId: 'U202515951',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-187',
    name: '朱高雯',
    studentId: 'U202515952',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-188',
    name: '许欣怡',
    studentId: 'U202515953',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-189',
    name: '杜妍蓉',
    studentId: 'U202515954',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-190',
    name: '张楒琪',
    studentId: 'U202515955',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-191',
    name: '罗家媛',
    studentId: 'U202515961',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-192',
    name: '张家艺',
    studentId: 'U202515962',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-193',
    name: '顾晓彤',
    studentId: 'U202515963',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-194',
    name: '田梓沄',
    studentId: 'U202515964',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-195',
    name: '甘鑫钰',
    studentId: 'U202515965',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-196',
    name: '刘祺美',
    studentId: 'U202515966',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-197',
    name: '潘芷妮',
    studentId: 'U202515967',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-198',
    name: '黄心妍',
    studentId: 'U202515968',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-199',
    name: '雍格然',
    studentId: 'U202515969',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-200',
    name: '龚思琦',
    studentId: 'U202515970',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-201',
    name: '赵锦怡',
    studentId: 'U202515971',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-202',
    name: '程景玉',
    studentId: 'U202515972',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-203',
    name: '余一帆',
    studentId: 'U202515973',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-204',
    name: '周楚澜',
    studentId: 'U202515974',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-205',
    name: '余嘉淇',
    studentId: 'U202515975',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-206',
    name: '王雨婷',
    studentId: 'U202515976',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-207',
    name: '钟思泉',
    studentId: 'U202515977',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-208',
    name: '张艺洋',
    studentId: 'U202515978',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-209',
    name: '杨雪',
    studentId: 'U202515979',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-210',
    name: '施乐怡',
    studentId: 'U202590072',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-211',
    name: '陈佳薇',
    studentId: 'U202510137',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-212',
    name: '吕雯洁',
    studentId: 'U202510138',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-213',
    name: '张怡璇',
    studentId: 'U202510139',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-214',
    name: '朱梓溪',
    studentId: 'U202510140',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-215',
    name: '俞佳颖',
    studentId: 'U202510141',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-216',
    name: '陈芊亦',
    studentId: 'U202510142',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-217',
    name: '袁梓涵',
    studentId: 'U202510175',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-218',
    name: '张子涵',
    studentId: 'U202510176',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-219',
    name: '刘睿',
    studentId: 'U202510177',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-220',
    name: '李易航',
    studentId: 'U202510178',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-221',
    name: '肖心悦',
    studentId: 'U202510179',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-222',
    name: '方靖婷',
    studentId: 'U202510211',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-223',
    name: '金子晴',
    studentId: 'U202510212',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-224',
    name: '罗棋',
    studentId: 'U202510213',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-225',
    name: '周雅婷',
    studentId: 'U202510214',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-226',
    name: '燕奕霏',
    studentId: 'U202510215',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-227',
    name: '叶徵',
    studentId: 'U202510240',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-228',
    name: '刘曦优',
    studentId: 'U202510259',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-229',
    name: '金明佳',
    studentId: 'U202510260',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  },
  {
    id: 'student-230',
    name: '陈俪心',
    studentId: 'U202510261',
    joinDate: new Date('2026-05-03'),
    role: 'student'
  }
];

// 本地存储键
const AUTH_SESSION_KEY = 'hust_sociology_auth_session';

// 验证学生身份
export const verifyStudent = (name: string, studentId: string): VerifiedStudent | null => {
  const verified = verifiedStudents.find(
    s => s.name === name && s.studentId === studentId
  );
  return verified || null;
};

// 注册新学生（需要验证）
export const registerStudent = (name: string, studentId: string): VerifiedStudent => {
  // 检查是否已存在
  const existing = verifiedStudents.find(
    s => s.name === name && s.studentId === studentId
  );
  
  if (existing) {
    return existing;
  }

  // 创建新学生记录
  const newStudent: VerifiedStudent = {
    id: `student-${Date.now()}`,
    name,
    studentId,
    joinDate: new Date(),
    role: 'student'
  };

  verifiedStudents.push(newStudent);
  return newStudent;
};

// 保存认证会话到本地存储
export const saveAuthSession = (student: VerifiedStudent) => {
  const session: AuthSession = {
    studentId: student.studentId,
    name: student.name,
    verifiedAt: new Date()
  };
  localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
};

// 获取当前认证会话
export const getAuthSession = (): AuthSession | null => {
  try {
    const session = localStorage.getItem(AUTH_SESSION_KEY);
    return session ? JSON.parse(session) : null;
  } catch {
    return null;
  }
};

// 清除认证会话
export const clearAuthSession = () => {
  localStorage.removeItem(AUTH_SESSION_KEY);
};

// 检查是否已登录
export const isAuthenticated = (): boolean => {
  return getAuthSession() !== null;
};

// 获取当前用户
export const getCurrentUser = (): VerifiedStudent | null => {
  const session = getAuthSession();
  if (!session) return null;
  
  return verifiedStudents.find(
    s => s.studentId === session.studentId && s.name === session.name
  ) || null;
};