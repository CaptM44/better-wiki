loadCss('/styles/main.css');
loadCss('/styles/toc.css');
loadCss('/styles/hidden.css');
loadCss('/styles/markdown.css');

function loadCss(path) {
    var link = document.createElement("link");
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = chrome.extension.getURL(path);
    link.classList.add("injectedCss");

    document.documentElement.appendChild(link);
    setTimeout(function () {
        document.documentElement.appendChild(link);
    });
}

window.onload = function () {
    var toc = document.getElementById('toc')
    document.getElementById('mw-panel').appendChild(toc);
    toc.style.display = 'block';
}