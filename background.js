"use strict";

// On Chrome Install
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        chrome.tabs.create({ url: "https://chat.openai.com/auth/login" });
    }
});

chrome.webRequest.onHeadersReceived.addListener(

  function (details) {
    for (var j = 0; j < details.responseHeaders.length; ++j) {
      if (details.responseHeaders[j].name.toLowerCase() == 'x-frame-options') {
        details.responseHeaders.splice(j, 1);
        
        return {
          responseHeaders: details.responseHeaders 
        };
      }
    }
  }, {
    urls: ["<all_urls>"]
  }, ["blocking", "responseHeaders"]);

  