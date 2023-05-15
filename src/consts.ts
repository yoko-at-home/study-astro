export const ROUTES = [
  {
    href: "/",
    label: "Art",
  },
  {
    href: "/about",
    label: "About",
  },
] as const;

// Icons from https://icon-sets.iconify.design
export const SOCIAL = [
  {
    label: "Twitter",
    href: "https://twitter.com/yokoiwasaki6",
    icon: "mdi:twitter",
  },
  {
    label: "Website",
    href: "https://yoko-portfolio",
    icon: "mdi:web",
  },
] as const;

export const PERSONAL_INFO = {
  name: "Yoko",
  title: "Artists of the day",
  subtitle: "xxを彩る演奏家たち",
  role: "Digital Artist",
  contact: "mailto:yoko.iwasaki8@gmail.com",
  avatar:
    "https://pbs.twimg.com/profile_images/1439435811083067393/UJYLoQQw_400x400.jpg",
  about:
    "Adobe製品と戯れる主婦 |  Nextjs・AstroでWebサイト制作. ホームページ管理人：座間市演奏家連盟 (WordPress Lolipop) ・ 女声合唱団ポレポーレ (NextJs microCMS Netlify). チラシ＆動画制作 (Illustrator, Premiere Pro, AE) | 元産業翻訳 | クラウドワークでトランスクリプト | 老人ホームへ慰問となにかと忙しい",
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content: "Art portfolio made by Yoko in his free time",
  },
  { name: "keywords", content: "Art portfolio, Digital art, gallery" },
  { name: "author", content: PERSONAL_INFO.name },
];

export const images = [
  {
    href: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    size: { width: 800, height: 600 },
    label: "yoko",
  },
  {
    href: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    size: { width: 800, height: 600 },
    label: "piko",
  },
  {
    href: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    size: { width: 800, height: 600 },
    label: "toko",
  },
  {
    href: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    size: { width: 800, height: 600 },
    label: "yoko",
  },
  {
    href: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    size: { width: 800, height: 600 },
    label: "piko",
  },
  {
    href: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
    size: { width: 800, height: 600 },
    label: "toko",
  },
];