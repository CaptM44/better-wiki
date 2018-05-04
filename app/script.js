loadCss('/styles/main.css');
loadCss('/styles/toc.css');
loadCss('/styles/hidden.css');
loadCss('/styles/markdown.css');

loadOptions(function (options) {
    if (options.fixedNav) {
        var toc = document.getElementById('toc');
        toc.style.position = 'fixed';
        var prevY = 0;

        document.addEventListener('scroll', function () {
            var y = window.pageYOffset || document.documentElement.scrollTop;
            delta = y - prevY;
            prevY = y;

            var top = parseFloat(window.getComputedStyle(toc).top);
            top -= delta;

            var maxTop = y > 160 ? 0 : 160;
            top = top > maxTop ? maxTop : top;

            var minTop = window.innerHeight - toc.clientHeight;
            minTop = minTop > 0 ? 0 : minTop;
            top = top < minTop ? minTop : top;

            toc.style.top = top + 'px';
        });
    }
})

function loadCss(path) {
    var link = document.createElement("link");
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = chrome.extension.getURL(path);
    link.classList.add("injectedCss");

    document.documentElement.appendChild(link)
    setTimeout(function () {
        document.documentElement.appendChild(link)
    });
}

function loadOptions(cb) {
    var defaultOptions = {
        fixedNav: true,
    }

    chrome.storage.sync.get(defaultOptions, cb);
}