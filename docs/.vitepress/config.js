export default {
  base: '/XNnote/',
  lang: 'zh-Hant-TW',
  title: '小羊的學習筆記',
  description: '搞笑日常',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/images/vite.svg',
      },
    ],
  ],
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/vitejs/vite/main/docs/images/vite.svg',
    nav: nav(),
    sidebar: {
      '/go/': sidebarGo(),
      '/chat/': sidebarChat(),
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Marsgoat`,
    },
    outlineTitle: ' ',
    docFooter: {
      prev: '前一篇',
      next: '下一篇',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Marsgoat' }],
  },
};

function nav() {
  return [
    { text: '關於', link: '/about/', activeMatch: '/about/' },
    { text: '圍棋人', link: '/go/', activeMatch: '/go/' },
    { text: '雜談', link: '/chat/', activeMatch: '/chat/' },
  ];
}

function sidebarGo() {
  return [
    {
      text: '圍棋',
      collapsible: true,
      items: [{ text: '關於', link: '/go/' }],
    },
    {
      text: '圍棋人生',
      collapsible: true,
      items: [{ text: '圍棋替代役', link: '/go/TaiwanGoAssociation' }],
    },
    {
      text: '棋評',
      collapsible: true,
      items: [{ text: '申之一手', link: '/go/ShinJinSeo' }],
    },
  ];
}

function sidebarChat() {
  return [
    {
      text: '雜談',
      collapsible: true,
      items: [{ text: '關於', link: '/chat/' }],
    },
  ];
}
