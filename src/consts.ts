export const ROUTES = [
  {
    href: "/",
    label: "Artist",
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
    href: "https://zama-musicartist.info/",
    icon: "mdi:web",
  },
  {
    label: "youtube",
    href: "https://www.youtube.com/@user-mu2nn6nt6e",
    icon: "mdi:youtube",
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
    content: "Music artist site created by Yoko",
  },
  { name: "keywords", content: "Music artists, Digital art, gallery" },
  { name: "author", content: PERSONAL_INFO.name },
];
