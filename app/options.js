document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('save').addEventListener('click', saveOptions);

function loadOptions() {
    var defaultOptions = {
        fixedNav: true
    }

    chrome.storage.sync.get(defaultOptions, function (options) {
        document.getElementById('fixedNav').checked = options.fixedNav;
    });
}

function saveOptions() {
    var options = {
        fixedNav: document.getElementById('fixedNav').checked
    }

    chrome.storage.sync.set(options, function () {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}