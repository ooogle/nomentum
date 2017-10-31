chrome.tabs.executeScript(tab.id, {
    code : 'var script=document.createElement(\'script\');' +
    'script.onload=function() { /*do something in the page after the script was loaded*/ };' +
    'script.src=\'https://quotesondesign.com/api/3.0/api-3.0.js\';' +
    'document.body.appendChild(script);'
}, function (returnedValue) {
    // do something in the extension context after the code was executed
});
