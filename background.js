
console.log('background.js');

chrome.browserAction.onClicked.addListener(function() {

  console.log('Clicked browser action');

  chrome.tabs.executeScript(null, {file: 'jquery.js'}, function() {

    chrome.tabs.executeScript(null, {file: 'scrambler.js'});
  });


});
