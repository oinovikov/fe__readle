document.addEventListener('DOMContentLoaded', function () {
    articleImages = document.querySelectorAll('.articleFigure__image');
    for (var i = 0, c = articleImages.length; i < c; i++) {
        articleImages[i].setAttribute('data-src', articleImages[i].getAttribute('src'));
        articleImages[i].removeAttribute('src');
        articleImages[i].parentNode.classList.add('articleFigure__picture_state_loading');
        articleImages[i].addEventListener('load', function () {
            this.parentNode.classList.remove('articleFigure__picture_state_loading');
            this.parentNode.classList.add('articleFigure__picture_state_loaded');
        });
        articleImages[i].addEventListener('error', function () {
            this.parentNode.classList.remove('articleFigure__picture_state_loading');
            this.parentNode.classList.add('articleFigure__picture_state_error');
        });
    }

    var themeToggleButton = document.querySelector('.themeToggleButton');
    if (themeToggleButton) {
        themeToggleButton.removeEventListener('click', switchUITheme);
        themeToggleButton.addEventListener('click', switchUITheme, window.passiveSupported ? { passive: true } : false);
    }

    buttonArticleBackScroll = document.querySelector('.unscrollButton');
    if (buttonArticleBackScroll) {
        buttonArticleBackScroll.removeEventListener('click', articleBackScroll);
        buttonArticleBackScroll.addEventListener('click', articleBackScroll, window.passiveSupported ? { passive: true } : false);
    }

    scrollProgress = document.querySelector('.scrollProgressBar__value');

    document.querySelector('.controlsBar').addEventListener('click', function () {
        if (!lockPageScreen.isEnabled) {
            lockPageScreen.on();
        } else {
            lockPageScreen.off();
        }
    }, false);

    document.documentElement.insertBefore(document.querySelector('.' + $pageRootClassName + '__shadows'), document.body.nextSibling);

    document.addEventListener('selectionchange', function () {
        if (this.t) {
            clearTimeout(this.t);
        }

        this.t = setTimeout(function () {
            var selObj = window.getSelection();
            // alert(selObj);
            var selRange = selObj.getRangeAt(0);
            var selectedText = selObj.toString();
            console.log(selObj, selRange, selectedText)
        }, 120);
    }, false);
}, window.passiveSupported ? { passive: true } : false);
