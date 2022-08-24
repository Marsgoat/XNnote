# VitePress

`2022/8/15`

自從年初鈞平跟我分享他的 blog 之後，我就有想把筆記移到別的地方，但靜態網站生成器多到不知道該選哪個，本來是想學鈞平大大用 HackMD api + next.js 來做我的筆記，結果看到我弟用 vitepress 看起來好像還不錯，決定也來用看看，順便寫一篇分享一下。

本來我還在想 vitepress 跟 vuepress 要用哪個，因為有點擔心 vitepress 太新了，官方都說還只是 alpha 版，會不會碰到很多雷之類的。

> 結果真的是碰到不少雷，不過因為一直都還有在更新，期待未來會變得越來越好用～<br>
> 我也會不定期回來這篇更新一下的<br>
> 2022/8/22

![](https://i.imgur.com/lX1vvcS.png){:width='80%'}

直到我看到了這個，尤雨溪本人都這樣說了，那還有什麼好選的。

## Getting Started

[官方文檔](https://vitepress.vuejs.org/)<br>
:::warning <div></div>
這邊我只是用官方文檔加入大量廢話，目標是寫出連猴子都懂的簡單又好笑的文檔。
:::

一開始要先裝個套件管理器(package manager)<br>
官網是用 yarn 當範例，我自己是用 npm，因為裝 node js 他就幫我一起裝了真棒！<br>
<font v-pre color="#c2534c">建議安裝 node v16 以上版本，我自己是裝 v16.17.0</font>

> 我本來 windows 環境會 build 不起來，後來發現是 node 版本的問題，我 windows 這邊版本是 v14.17.0，但是 vite3 要 v14.18 以上版本才行<br>
> 2022/8/23

我弟推薦用 pnpm，這邊我有特別問過子期大大，他覺得雖然 pnpm 號稱效率提升不少，但未必有感，如果有要用 mono-repo 的專案架構的話才會比較有差，不然他覺得差異不大。<br>
<font v-pre color="#c2534c">因為我自己是用 npm 所以會跟官網有一點點不一樣，但其實就只是指令從 yarn 換成 npm 而已。</font>

### Step. 1: Create a new project

```shell
$ mkdir vitepress-starter && cd vitepress-starter
```

照著官方文檔第一步做，其實我新增資料夾跟檔案都不下指令的，`mkdir`基本沒用過，按滑鼠右鍵「新增資料夾」他不香嗎，而且我常直接在 github 上新增一個 repo 然後再 clone 下來，就跳過新增資料夾的部分了。<br>
<font v-pre color="#c2534c">這邊我也比較推薦直接開個 repo 然後 clone 下來。</font>

```shell
$ npm init
```

接著要初始化，會要你填一些東西。

```shell
$ npm init -y
```

如果懶得填可以直接加個`-y`快速跳過，反正大部分都不會有差。<br>
好了之後會有兩個檔案，`package.json`跟`package-lock.json`。

### Step. 2: Install VitePress

```shell
$ npm install --dev vitepress vue
```

直接安裝，裝好之後會多一個`node_modules`的資料夾，記得要在`.gitignore`中加入`node_modules`別把這包給傳上 github 了。

```shell
$ mkdir docs && echo '# Hello VitePress' > docs/index.md
```

接著新增`docs`資料夾，這邊名稱如果有改，那下面`scripts`要記得跟著改，然後新增一個`index.md`這個就是首頁了。

### Step. 3: Boot up dev environment

`package.json`

```json{4-6}
{
  ...
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs"
  },
  ...
}
```

要在`package.json`中的`scripts`加入`dev`、`build`、`serve`這三行，官方文檔前面還加個`docs:`我不想每次下指令都要打這麼長所以就刪掉了，`test`那行也可以刪掉了，誰會對 md 檔寫 test 啊。

> 如果你前面資料夾名稱取叫`src`那這邊要記得改成`vitepress dev src`依此類推。

```shell
$ npm run dev
```

接著就可以跑跑看了

![](https://i.imgur.com/5oasFLT.png)

![](https://i.imgur.com/rztq284.png)

用瀏覽器開`http://localhost:3000`，就會看到剛剛打的 Hello VitePress

> 8 月 17 更新後([alpha.8 版本](https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md))已經改成`http://localhost:5137`了<br>
> 2022/8/18

### Step. 4: Add more pages

這步實在沒什麼好說明的，就是在你的`docs`資料夾中新增檔案。

## Home Page

首頁就是上面新增的`index.md`<br>
詳細可以參考[Home Page](https://vitepress.vuejs.org/guide/theme-home-page.html)，我這邊就直接放上我的筆記當範例了。

```yaml
---
layout: home

title: 小羊的學習筆記
titleTemplate: 搞笑日常分享

hero:
  name: 小羊的學習筆記
  text: 搞笑日常分享
  tagline: 。
  image: https://raw.githubusercontent.com/vitejs/vite/main/docs/images/vite.svg
  actions:
    - theme: brand
      text: about
      link: /about/
    - theme: alt
      text: View on GitHub
      link: https://github.com/Marsgoat/XNnote
---
```

![](https://i.imgur.com/oQhgPG0.png)

右邊太空了就先放張 vite 的圖。<br>
第 15 行 about 的 link 有兩種寫法。

1. link 直接指定該 md 檔

```
docs
├─ index.md
└─ about.md
```

這樣上方 link 那行就填入：`link: /about`

2. link 指定位置為資料夾

比如說我新增了一個資料夾為`about`，然後直接在裡面新增一個`index.md`

```
docs
├─ about
│  └─ index.md
└─ index.md
```

這樣上方 link 那行就填入：`link: /about/`<br>
指定路徑為資料夾的話他會自己抓資料夾中檔名為 index 的檔案

## Configuration

再來就是一些設定檔的設置了，這邊可以看看官方[Config](https://vitepress.vuejs.org/config/introduction.html)的一些設置，我底下會分享我的筆記當做範例，有興趣的可以先參考一下，再自己去爬文檔做修改。

```
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme
│  │  │  ├─ custom.css
│  │  │  └─ index.js
│  │  └─ config.js
│  └─ index.md
├─ node_modules
├─ .gitignore
├─ package-lock.json
└─ package.json
```

![](https://i.imgur.com/NOnfGLj.png)

先在`docs`中新增一個`.vitepress`的資料夾，然後新增一個`config.js`的檔案，路徑一定要對，不要亂改名，這個是他預設的。<br>
在`.vitepress`資料夾下再新增一個資料夾`theme`，然後新增`custom.css`與`index.js`，這是用來自定義主題、顏色等，一開始可能用不到，但就一樣先建好。

`config.js`

```javascript
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
};
```

這邊可以看[Theme-Nav](https://vitepress.vuejs.org/guide/theme-nav)有比較詳細的說明，我這裡是把`nav`跟`siderbar`寫成 function 看起來比較不會這麼雜亂，其實是一樣的。

```javascript
function nav() {
  return [
    { text: '關於', link: '/about/', activeMatch: '/about/' },
    { text: '圍棋', link: '/go/', activeMatch: '/go/' },
    { text: '雜談', link: '/chat/', activeMatch: '/chat/' },
    { text: 'coding', link: '/coding/', activeMatch: '/coding/' },
  ];
}
```

我自己的筆記大概就長得像這樣，目前只有三大類，硬湊一個關於我。

`index.js`

```javascript
import DefaultTheme from 'vitepress/theme';
import './custom.css';

export default DefaultTheme;
```

這邊就是他預設的而已，後面裝`mermaid`的時候才會再回來改這裡。

`custom.css`

```css
:root {
  --vp-c-brand: #54a8bf;
  --vp-c-brand-light: #54a8bf;
}
```

這邊我只先調了顏色，可以到[github](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/styles/vars.css)上看有哪些預設的 css 設定，可以依照自己的喜好做更改。

## Deploying

這邊我就用 github 當範例，如果要用別的，就一樣參考[官方文檔](https://vitepress.vuejs.org/guide/deploying.html)，在推上去之前最好先在本地測試一下會不會過。

### 本地測試

```shell
$ npm run build
```

build 完之後，不管有沒有成功都會在`.vitepress`底下會生出一個`dist`的資料夾，記得這個一樣要在`.gitignore`中加入，別把這包給傳上 github 了。

```shell
$ npm run serve
```

如果前一步驟沒有報錯的話就可以開起來看看了，有時候 dev 能過但是卻 build 不起來，比如我的`<font>`沒有加 v-pre，或是一些套件有問題，甚至是 node 版本的問題，真的是讓我踩很多雷。

一切都沒有問題的話，就可以進下一步了。

### 使用 Github Actions 自動部署 GitHub Pages

我們先在 github 做設定，找到`Settings`中的`Developer settings`->`Personal access tokens`然後點選`Generate new token`。

![](https://i.imgur.com/4aaEe3N.png)

要先在 github 做設定，找到`Settings`中的`Developer settings`->`Personal access tokens`然後點選`Generate new token`。

![](https://i.imgur.com/0nWw7GA.png)

Note 的部分就看你要取什麼，`workflow`這個要勾起來，還有上面 repo 的部分也要。<br>
勾完後直接拉到最底下按下`Generate token`就搞定了。<br>
<font v-pre color="#c2534c">他會產生一串 token，只會顯示一次，請記得複製下來！</font><br>
但其實忘記也沒差啦，就重新再生就好了 XD

然後回到專案內

![](https://i.imgur.com/ZqqrRa7.png)

在專案中點`Settings` -> `Secrets` -> `Actions`<br>
然後按下`New repository secret`

![](https://i.imgur.com/opJono1.png)

Name 就是你剛剛取的，Value 就是剛剛生成的 token，如果你忘了複製，那就重新來一次。

接著要在專案根目錄新增一個資料夾`.github`，在裡面建一個`workflows`資料夾，最後新增`deploy.yml`

```
.github
└─ workflows
    └─ deploy.yml
```

`deploy.yml`內容如下，也是用官方範例改的，因為我是用 npm 不是 yarn。

```yaml{21}
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm
      - run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

21 行這邊`GITHUB_TOKEN`就是換成前面生成的那個 token。<br>
都完成後就推上去就可以了～<br>
推上去後可以看`actions`就知道現在 deploy 的進度了～沒意外的話應該一兩分鐘內就好了。

## plugin

HackMD 用習慣了還真的是挺方便的，用 vitepress 你要用打公式跟畫圖都還得另外裝套件。<br>
這邊分享遇到的兩個坑，一個是畫圖用的`mermaid`另一個是打公式或是一些數學符號會用到的`latex`

### Latex

這個是打公式什麼的非常好用的套件，比如[旋轉棋盤](/coding/rotate.md#原理)中的公式，vitepress 中暫時還不支援就要自己裝，這個[issue](https://github.com/vuejs/vitepress/issues/529)點進去他一開始要你裝 Katex，照著做完會發現 dev 能跑，但是 build 就會壞掉...<br>
要拉到很底下才會發現他又回說改裝 mathjax3 ~~哭啊，不會早點說嗎~~

```shell
$ npm install markdown-it-mathjax3
```

`dcos/.vitepress/config.js`

```javascript
import mathjax3 from 'markdown-it-mathjax3';

const customElements = ['mjx-container'];

export default {
  markdown: {
    config: (md) => {
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
```

要把上面這些加進去，就可以了用了～

`dcos/.vitepress/theme/custom.css`

```css
mjx-container {
  display: inline-block;
  margin: auto 2px -2px;
}
```

我會在`custom.css`中加入這些設定，不然他換行什麼的有點討厭，反正這個排版就看個人喜好。

### Mermaid

[Mermaid](https://socket.dev/npm/package/vitepress-plugin-mermaid)這個就是畫圖的工具，比如[洗牌](/coding/FisherYatesShuffle.md#暴力展開)那篇的暴力展開圖。<br>
照著安裝就行了只是有個地方要稍微改一下

`dcos/.vitepress/config.js`

```javascript
import MermaidPlugin from 'vitepress-plugin-mermaid';

export default {
  markdown: {
    config: (md) => {
      md.use(mathjax3);
      md.use(MermaidPlugin);
    },
  },
};
```

如果你前面也照著裝了 mathjax3 的話，這邊要改成這樣～

## 心得

玩了幾天 vitepress 真的是蠻好用的，而且挺適合我這種只想單純寫寫搞笑筆記文檔的人，算是一個蠻好玩的，雖然也採了很多雷，還好有卷王幫忙我排除了很多錯誤。<br>
整體來說體驗還算不錯，期待官方更新快一點，未來有什麼新玩具我也會多多去嘗試的，希望能一直保持對新事物的好奇心，一直開心的學習下去！<br>
一開始會用 HackMD 是看玉山在用覺得蠻好用的，又是台灣人寫的，就想支持一下，我板上很多大神好像都是用 Medium 比較多，我也是因為看到 Laurice 大神寫的文章，才想要開始來寫，但我要技術沒技術，要文筆沒文筆，又想跟別人不一樣，那我只好走搞笑路線娛樂大眾了。

## reference

[官方文檔](https://vitepress.vuejs.org/)<br>
[鈞平大大的 blog](https://gpwork4u.github.io/)(他本人表示已放棄這裡 XDD)<br>
[卷王的筆記](https://sheepndw.github.io/memochou/)<br>

## 新登場人物

鈞平：<br>
研究所學長，其實出現過了，但剛好有機會就再介紹一次，動態回顧大師，是個喜歡回顧自己 FB 動態回顧的人，絕招是沒有動態就創造動態。住在苗栗國，每次 Lab 聚會都說太遠不參加，但明明每週有兩天要到天龍國上班，我知道你會看ㄏㄏ，<font v-pre color="#c2534c">你已被小羊情緒勒索了，所以看到這行你下次一定要出席！</font>

卷王：<br>
其實就是我弟，他實在太卷了我都叫他卷王，以後筆記中出現也會改叫卷王，他現在比起半年前自信多了，應該是上班後發現自己好像有點強，但他下班後還是瘋狂的進修，我都快被他卷死了。<br>
卷王語錄：

> 寧願累死自己也要餓死同行

> 今天你不卷死他，明天你就會被他卷死。

不知道卷是什麼意思的可以 google「內卷」

Laurice：<br>
國中同學，是我從國中起就開始仰望的大神，我國中是那種超混每天被老師罵的問題學生，他是基測滿分的超級學霸，本來根本不會有交集，都是因為鄭皓中把大家拉到一起，當時還有幾個人，我們幾乎每天放學都搭同一班公車回家，都會鬥嘴、聊八卦、比成績(這邊的比成績不包括我，他們模擬考幾萬人的總排名比我的班排名還要小，到底是要比什麼鬼，我都只能默默的膜拜他們)，還是很懷念當時在公車上打鬧的日子，感謝各位不嫌棄願意和我做朋友，不然剛轉過去真的是很慌，轉學生真的是很邊緣。

[L's 碎碎念](https://www.facebook.com/MurmurOfL) 神的粉專，歡迎大家去按讚。<br>
[大神的 medium](https://medium.com/@austinlaurice) 大力推薦，很多篇文章我都是跪著看完的，可以看看神的學習歷程，是凡人所體驗不到的。

鄭皓中：<br>
國小同學但到國中才變熟，是個又高又帥又強的大神，其實我們根本沒同班過，我是轉學生，剛轉過去誰都不認識，但他在走廊上馬上就認出了我，也多虧了他讓我認識了不少人，當時我們不只是同班公車，也同站下車，還記得會一起走到一個天橋才各自回家，真的是國中時期最好的朋友沒有之一。

[回目錄](/coding/)
