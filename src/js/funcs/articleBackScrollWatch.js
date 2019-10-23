function articleBackScrollWatch() {
    try {
        var topTarget = document.querySelector('.articleMain').getBoundingClientRect().top + getScrollingElement().scrollTop;
        this.prevOffset = this.offset || window.pageYOffset;
        this.offset = window.pageYOffset;

        if (this.offset >= topTarget) {
            if (buttonArticleBackScroll.classList.contains('unscrollButton_state_back') && this.offset - this.prevOffset > 0) {
                articleBackScrollReset();
            }
            buttonArticleBackScroll.classList.add('unscrollButton_state_show');
        } else {
            if (!buttonArticleBackScroll.classList.contains('unscrollButton_state_back') && this.offset - this.prevOffset < 0) {
                buttonArticleBackScroll.classList.remove('unscrollButton_state_show');
            }
        }
    } catch (e) {}
};
