import MermaidPlugin from 'vitepress-plugin-mermaid';
import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

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
        href: '/img/logo.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/img/logo.png',
    nav: nav(),
    sidebar: {
      '/go/': sidebarGo(),
      '/chat/': sidebarChat(),
      '/coding/': sidebarCoding(),
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
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
    config: (md) => {
      md.use(MermaidPlugin);
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
};

function nav() {
  return [
    { text: '關於', link: '/about/', activeMatch: '/about/' },
    { text: '圍棋', link: '/go/', activeMatch: '/go/' },
    { text: '雜談', link: '/chat/', activeMatch: '/chat/' },
    { text: 'coding', link: '/coding/', activeMatch: '/coding/' },
  ];
}

function sidebarGo() {
  return [
    {
      text: '圍棋生活',
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
      items: [
        { text: '淺談挖礦', link: '/chat/miner' },
        { text: '2022面試紀錄', link: '/chat/interview2022' },
      ],
    },
  ];
}

function sidebarCoding() {
  return [
    {
      text: 'Coding',
      collapsible: true,
      items: [
        { text: '蜜月橋牌程式優化(位元運算)', link: '/coding/GodJimmy' },
        { text: '旋轉棋盤', link: '/coding/rotate' },
        { text: 'GitHub Copilot', link: '/coding/GithubCopilot' },
        { text: '圍棋征子邏輯', link: '/coding/goLadders' },
        { text: '程式碼可讀性', link: '/coding/readability' },
        {
          text: 'Nullish Coalescing Operator',
          link: '/coding/nullishCoalescingOperator',
        },
        { text: 'Fisher Yates Shuffle', link: '/coding/FisherYatesShuffle' },
        {
          text: '2022面試白板題',
          link: '/coding/interview2022-leetcode',
        },
        { text: 'Merge Intervals', link: '/coding/mergeIntervals' },
        { text: 'VitePress', link: '/coding/vitepress' },
      ],
    },
    {
      text: 'LeetCode',
      collapsible: true,
      items: [
        { text: '每日一題', link: '/coding/leetcodeEveryDay' },
        { text: 'Binary Search', link: '/coding/BinarySearch' },
        { text: 'Sliding Window', link: '/coding/SlidingWindow' },
        { text: 'Stack and Queue', link: '/coding/Stack_Queue' },
      ],
    },
  ];
}
