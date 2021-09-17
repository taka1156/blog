module.exports = {
  title: 'Tech Blog',
  description: 'This is a blog example built by VuePress',
  theme: 'vuepress-theme-meteorlxy', // OR shortcut: @vuepress/blog
  locales: {
    '/': {
      lang: 'ja-JP',
    },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/jpg', href: '/favicon.jpg' }],
    [
      'link',
      {
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css',
        rel: 'stylesheet'
      }
    ],
  ],
  themeConfig: {
    lang: {
      home: 'ホーム',
      posts: 'ポスト',
      category: 'カテゴリー',
      categories: 'カテゴリー一覧',
      tag: 'タグ',
      tags: 'タグ一覧',
      createdAt: '作成日',
      updatedAt: '更新日',
      prevPost: 'Prev',
      nextPost: 'Next',
      allCategories: '全て',
      search: '検索',
      searchHint: 'タイトルとタグから検索',
      noRelatedPosts: '関連する投稿はありません',
    },
    lastUpdated: true,
    pagination: {
      perPage: 5,
    },
    comments: false,
    personalInfo: {
      // Nickname
      nickname: 'Tech blog',

      // Introduction of yourself (HTML supported)
      description: 'VuePress blog',


      // Your avatar image
      // Set to external link
      avatar: '/writers/m-logo.png',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: '',
          link: './writers/',
        },

        // Twitter account and link
        twitter: {
          account: '',
          link: './writers/',
        },
      },
    },

    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Posts',
        link: '/post/',
      },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/' },
      {
        text: 'Writers',
        link: '/writers/',
      },
    ],
  },
};
