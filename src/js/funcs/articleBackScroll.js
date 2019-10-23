function articleBackScroll() {
    if (articleScrollTop == 0) {
        articleScrollTop = window.pageYOffset;
        buttonArticleBackScroll.classList.add('unscrollButton_state_back');
        scrollWindowTo(0);
    } else {
        scrollWindowTo(articleScrollTop);
        articleBackScrollReset();
    }
};
