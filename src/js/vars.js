// Глобальные переменные
var $pageRootClassName = 'page';
var windowEvents = [
    {
        method: articleImagesInitLoad,
        onScroll: true,
        onLoad: true,
        onResize: false,
        scrollTimer: false,
    },
    {
        method: articleBackScrollWatch,
        onScroll: true,
        onLoad: true,
        onResize: false,
        scrollTimer: false,
    },
    {
        method: articleScrollProgressBar,
        onScroll: true,
        onLoad: true,
        onResize: false,
        scrollTimer: false,
    },
];
var articleImages;
var buttonArticleBackScroll;
var articleScrollTop = 0;
var scrollProgress;
