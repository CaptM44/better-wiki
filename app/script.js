loadCss('/styles/main.css');
loadCss('/styles/toc.css');
loadCss('/styles/hidden.css');
loadCss('/styles/markdown.css');

loadOptions(function (options) {
    if (options.fixedNav) {
        // loadCss('/styles/fixedNav.css');
        document.addEventListener('scroll', function () {
            var toc = document.getElementById('toc')

            if (document.documentElement.scrollTop > 184) {
                toc.style.position = 'fixed';
                toc.style.top = '16px';
            } else {
                toc.style.position = 'absolute';
                toc.style.top = '200px';
            }
            toc.style.bottom = '0px';
        })
    }
})

function loadCss(path) {
    var link = document.createElement("link");
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = chrome.extension.getURL(path);
    link.classList.add("injectedCss");

    document.documentElement.appendChild(link)
    setTimeout(t => document.documentElement.appendChild(link));
}

function loadOptions(cb) {
    var defaultOptions = {
        fixedNav: true,
    }

    chrome.storage.sync.get(defaultOptions, cb);
}