loadCss('/styles/main.css');
loadCss('/styles/toc.css');
loadCss('/styles/hidden.css');
loadCss('/styles/markdown.css');

function loadCss(path) {
    var link = document.createElement("link");
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = chrome.extension.getURL(path);;

    document.documentElement.appendChild(link)
    setTimeout(t => document.documentElement.appendChild(link));
}