export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  serviceCount: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  provider: string;
  providerAvatar: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  categoryId: string;
  image: string;
  deliveryDays: number;
  tags: string[];
}

export const categories: Category[] = [
  { id: 'seo', name: 'تحسين محركات البحث SEO', icon: '🔍', description: 'تحسين ترتيب موقعك في نتائج البحث وزيادة الزيارات العضوية', serviceCount: 24 },
  { id: 'social-media', name: 'إدارة حسابات التواصل', icon: '📱', description: 'إدارة احترافية لحساباتك على منصات التواصل الاجتماعي', serviceCount: 18 },
  { id: 'ads', name: 'إعلانات مواقع التواصل', icon: '📢', description: 'حملات إعلانية مدفوعة على فيسبوك وإنستقرام وتويتر', serviceCount: 15 },
  { id: 'consulting', name: 'استشارات وخطط تسويقية', icon: '📋', description: 'خطط تسويقية شاملة واستشارات من خبراء التسويق', serviceCount: 10 },
  { id: 'facebook', name: 'التسويق على فيسبوك', icon: '👥', description: 'تسويق متخصص على منصة فيسبوك وإدارة الصفحات', serviceCount: 12 },
  { id: 'sem', name: 'التسويق عبر محركات البحث SEM', icon: '🎯', description: 'إعلانات جوجل المدفوعة وحملات PPC', serviceCount: 8 },
  { id: 'ecommerce-seo', name: 'سيو متاجر إلكترونية', icon: '🛒', description: 'تحسين ظهور متجرك الإلكتروني في محركات البحث', serviceCount: 9 },
  { id: 'instagram', name: 'التسويق عبر إنستقرام', icon: '📸', description: 'تسويق وإدارة حساب إنستقرام وزيادة التفاعل', serviceCount: 14 },
  { id: 'content', name: 'كتابة المحتوى التسويقي', icon: '✍️', description: 'كتابة محتوى تسويقي جذاب ومقالات SEO', serviceCount: 20 },
  { id: 'design', name: 'تصميم تسويقي', icon: '🎨', description: 'تصميم بوستات سوشيال ميديا وإعلانات بصرية', serviceCount: 16 },
];

export const services: Service[] = [
  {
    id: '1', title: 'تحسين SEO كامل لموقعك مع تقرير مفصل', description: 'سأقوم بتحليل موقعك بالكامل وتحسين محركات البحث On-page و Off-page مع تقرير مفصل يشمل الكلمات المفتاحية والمنافسين والتوصيات.',
    provider: 'أحمد الصنعاني', providerAvatar: '👨‍💻', price: 25000, currency: 'ر.ي', rating: 4.9, reviewCount: 47, categoryId: 'seo',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1b9?w=400&q=80', deliveryDays: 3, tags: ['SEO', 'تحليل', 'تقرير']
  },
  {
    id: '2', title: 'إدارة حساب إنستقرام لمدة شهر كامل', description: 'إدارة احترافية لحسابك على إنستقرام تشمل 30 بوست + 60 ستوري + التفاعل مع المتابعين + تقرير شهري.',
    provider: 'سارة اليمنية', providerAvatar: '👩‍💼', price: 50000, currency: 'ر.ي', rating: 4.8, reviewCount: 32, categoryId: 'instagram',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80', deliveryDays: 30, tags: ['إنستقرام', 'إدارة', 'محتوى']
  },
  {
    id: '3', title: 'حملة إعلانية على فيسبوك مع استهداف دقيق', description: 'إنشاء وإدارة حملة إعلانية احترافية على فيسبوك مع استهداف الجمهور المناسب وتحسين الأداء يومياً.',
    provider: 'محمد العدني', providerAvatar: '👨‍💼', price: 35000, currency: 'ر.ي', rating: 4.7, reviewCount: 28, categoryId: 'facebook',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=400&q=80', deliveryDays: 7, tags: ['فيسبوك', 'إعلانات', 'استهداف']
  },
  {
    id: '4', title: 'كتابة 10 مقالات SEO احترافية لمدونتك', description: 'كتابة 10 مقالات متوافقة مع محركات البحث بكلمات مفتاحية مدروسة، كل مقال 1000-1500 كلمة.',
    provider: 'ليلى الحضرمية', providerAvatar: '👩‍✍️', price: 40000, currency: 'ر.ي', rating: 5.0, reviewCount: 19, categoryId: 'content',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80', deliveryDays: 10, tags: ['مقالات', 'SEO', 'محتوى']
  },
  {
    id: '5', title: 'خطة تسويقية شاملة لمشروعك', description: 'إعداد خطة تسويقية متكاملة تشمل تحليل السوق والمنافسين واستراتيجية التسويق الرقمي لمدة 6 أشهر.',
    provider: 'عمر التعزي', providerAvatar: '🧑‍💼', price: 75000, currency: 'ر.ي', rating: 4.9, reviewCount: 15, categoryId: 'consulting',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80', deliveryDays: 5, tags: ['خطة', 'استراتيجية', 'تحليل']
  },
  {
    id: '6', title: 'تصميم 30 بوست سوشيال ميديا احترافي', description: 'تصميم 30 بوست لحساباتك على السوشيال ميديا بتصاميم عصرية وجذابة متوافقة مع هوية علامتك التجارية.',
    provider: 'فاطمة المقالحية', providerAvatar: '👩‍🎨', price: 30000, currency: 'ر.ي', rating: 4.8, reviewCount: 41, categoryId: 'design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80', deliveryDays: 5, tags: ['تصميم', 'سوشيال', 'بوستات']
  },
  {
    id: '7', title: 'إعداد وتحسين حملات Google Ads', description: 'إنشاء حملات إعلانية على جوجل مع اختيار الكلمات المفتاحية المناسبة وتحسين معدل التحويل.',
    provider: 'خالد الإبي', providerAvatar: '👨‍💻', price: 45000, currency: 'ر.ي', rating: 4.6, reviewCount: 22, categoryId: 'sem',
    image: 'https://images.unsplash.com/photo-1553484771-47a3a4a13885?w=400&q=80', deliveryDays: 3, tags: ['جوجل', 'إعلانات', 'PPC']
  },
  {
    id: '8', title: 'تحسين SEO متجرك الإلكتروني بالكامل', description: 'تحسين شامل لمتجرك الإلكتروني يشمل صفحات المنتجات والتصنيفات والصور مع Schema markup.',
    provider: 'نور الحميري', providerAvatar: '👩‍💻', price: 55000, currency: 'ر.ي', rating: 4.9, reviewCount: 13, categoryId: 'ecommerce-seo',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80', deliveryDays: 7, tags: ['متجر', 'SEO', 'تحسين']
  },
  {
    id: '9', title: 'إدارة صفحة فيسبوك + إعلانات لمدة شهر', description: 'إدارة شاملة لصفحتك على فيسبوك مع نشر يومي + حملة إعلانية + تقرير أسبوعي.',
    provider: 'علي الذماري', providerAvatar: '👨‍💼', price: 60000, currency: 'ر.ي', rating: 4.7, reviewCount: 36, categoryId: 'social-media',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&q=80', deliveryDays: 30, tags: ['فيسبوك', 'إدارة', 'إعلانات']
  },
  {
    id: '10', title: 'إعلانات إنستقرام مع تصميم الإعلان', description: 'إنشاء إعلان احترافي على إنستقرام يشمل التصميم + الاستهداف + المتابعة لمدة أسبوع.',
    provider: 'هدى الصنعانية', providerAvatar: '👩‍💼', price: 20000, currency: 'ر.ي', rating: 4.5, reviewCount: 25, categoryId: 'ads',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80', deliveryDays: 3, tags: ['إنستقرام', 'إعلان', 'تصميم']
  },
  {
    id: '11', title: 'باك لينكات عالية الجودة لموقعك', description: 'بناء 50 باك لينك عالي الجودة من مواقع ذات Domain Authority عالي لتحسين ترتيب موقعك.',
    provider: 'أحمد الصنعاني', providerAvatar: '👨‍💻', price: 35000, currency: 'ر.ي', rating: 4.8, reviewCount: 20, categoryId: 'seo',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80', deliveryDays: 14, tags: ['باك لينك', 'SEO', 'ترتيب']
  },
  {
    id: '12', title: 'فيديو موشن جرافيك تسويقي 60 ثانية', description: 'إنشاء فيديو موشن جرافيك احترافي مدته 60 ثانية لمنتجك أو خدمتك مع تعليق صوتي.',
    provider: 'فاطمة المقالحية', providerAvatar: '👩‍🎨', price: 80000, currency: 'ر.ي', rating: 5.0, reviewCount: 8, categoryId: 'design',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80', deliveryDays: 7, tags: ['فيديو', 'موشن', 'تسويق']
  },
];

export const WHATSAPP_NUMBER = '967781655701';
