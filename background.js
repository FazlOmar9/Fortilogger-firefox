chrome.action.onClicked.addListener((tab) => {
  if(tab.url.startsWith('http://192.168.55.253') || tab.url.startsWith('https://192.168.55.253')) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['contents.js']
    });
  }
});