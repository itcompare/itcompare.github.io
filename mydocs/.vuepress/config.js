module.exports = {
    // theme: 'reco',
    theme: require.resolve('../../vuepress-theme-reco'),
    // 插件
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/active-header-links': {},
        // '@vuepress/search': {searchMaxSuggestions: 10},
        'vuepress-plugin-code-copy':{
            // selector: String,
            align: 'top',
            color: '#27b1ff',
            backgroundColor: '#0075b8',
            successText: '已复制'
        },
    },
    // 头部
    head: [
        ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        ['link', {rel: 'icon', href: '/logo/small.png'}],
    ],
    // 网站标题及描述
    title: 'itcompare',
    description: '本站致力于对it中相关技术进行比较，解决从业人员技术选型中的类比的问题！',
    dest: 'docs',
    base: '/',
    // 主题配置
    themeConfig: {
        // 博客配置
        blogConfig: {
            category: {
                location: 3,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 4,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },
        author: 'fanghuabao',
        noFoundPageByTencent: false,//关闭404时，跳转腾讯公益页面
        mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
        modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
        navbar: true,
        smoothScroll: true,
        // 提取markdown中h2 和 h3 标题，显示在侧边栏上。
        sidebarDepth: 5,
        // 文档更新时间
        lastUpdated: '更新时间',
        // logo
        subSidebar: 'auto',
        logo: '/logo/small.png',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 15,

        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'http://gitlab.ximalaya.com/business/business-gateway-open-doc',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'task/update_doc_20220322_181890',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑',
        nav: [
            {text: '首页', link: '/'},
            {text: '指南', link: '/introduce/index.md'},
            // { text: '分类', link: '/categories/' },
            // { text: '标签', link: '/tag/' },
            { text: '时间线', link: '/timeline/'}
        ],
        sidebar:{
            // '/introduce/': [
            //     '/introduce/index.md',
            // ],
        }
    }
}

