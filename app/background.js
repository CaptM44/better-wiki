var useCss = true;

//toggle injected css on and off
chrome.browserAction.onClicked.addListener(function (tab) {
    useCss = !useCss;
    chrome.tabs.executeScript(tab.id, {
        code: `
            var useCss = ${useCss};
            var sheets = document.querySelectorAll('.injectedCss');
            
            for (var i = 0; i < sheets.length; i++) { 
                sheets[i].disabled = !useCss;
            }
        `
    });
});