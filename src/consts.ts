export const ROUTES = [
  {
    href: "/",
    label: "Artist",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/tags",
    label: "Tags",
  },
  {
    href: "/blog",
    label: "Blog",
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
  title: "Artists of The Day",
  subtitle: "xxを彩る演奏家たち",
  role: "Digital Artist",
  contact: "mailto:yoko.iwasaki8@gmail.com",
  avatar:
    "https://pbs.twimg.com/profile_images/1439435811083067393/UJYLoQQw_400x400.jpg",
  about:
    "Adobe製品と戯れる主婦 |  Nextjs・AstroでWebサイト制作. ホームページ管理人：座間市演奏家連盟 (WordPress Lolipop) ・ 女声合唱団ポレポーレ (NextJs microCMS Netlify). チラシ＆動画制作 (Illustrator, Premiere Pro, AE) | 元産業翻訳 | クラウドワークでトランスクリプト | 老人ホームへ慰問となにかと忙しい",
} as const;

export const EVENT_INFO = {
  title: "Program",
  subtitle: "xx",
  one: "https://zama-musicartist.info/concertreport/wp-content/uploads/%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E3%83%95%E3%82%A7%E3%82%B9%E3%82%BF%EF%BC%92%EF%BC%90%EF%BC%92%EF%BC%92%E3%83%9A%E3%83%BC%E3%82%B81-1448x2048.jpg",
  oneAlt: "aaa",
  width: 300,
  two: "https://zama-musicartist.info/concertreport/wp-content/uploads/%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E3%83%95%E3%82%A7%E3%82%B9%E3%82%BF%EF%BC%92%EF%BC%90%EF%BC%92%EF%BC%92%E3%83%9A%E3%83%BC%E3%82%B82-1448x2048.jpg",
  twoAlt: "aaa",
  three:
    "https://zama-musicartist.info/concertreport/wp-content/uploads/%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E3%83%95%E3%82%A7%E3%82%B9%E3%82%BF%EF%BC%92%EF%BC%90%EF%BC%92%EF%BC%92%E3%83%9A%E3%83%BC%E3%82%B83-1448x2048.jpg",
  threeAlt: "aaa",
  four: "https://zama-musicartist.info/concertreport/wp-content/uploads/%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E3%83%95%E3%82%A7%E3%82%B9%E3%82%BF%EF%BC%92%EF%BC%90%EF%BC%92%EF%BC%92%E3%83%9A%E3%83%BC%E3%82%B84-1448x2048.jpg",
  fourAlt: "aaa",
} as const;

export const SEO_INFO = [
  {
    name: "description",
    content: "Music artist site created by Yoko",
  },
  {
    name: "keywords",
    content: "Music artists portfolio, Digital art, gallery",
  },
  { name: "author", content: PERSONAL_INFO.name },
];
