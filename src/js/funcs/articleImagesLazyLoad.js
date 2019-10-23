function articleImagesLazyLoad() {
    var ratio = .25;

    for (var i = 0, c = articleImages.length; i < c; i++) {
        if (
            (articleImages[i].parentNode.getBoundingClientRect().top >= 0
                && articleImages[i].parentNode.getBoundingClientRect().top <= window.innerHeight * (1 + ratio))
            || (articleImages[i].parentNode.getBoundingClientRect().bottom >= window.innerHeight * -1 * ratio
                && articleImages[i].parentNode.getBoundingClientRect().bottom <= window.innerHeight)
        ) {
            articleImages[i].setAttribute('src', articleImages[i].getAttribute('data-src'));
        }
    }

    articleImages = document.querySelectorAll('.articleFigure__image:not([src])');
};
