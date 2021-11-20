const CRNs = [];
var preferences = {};

chrome.runtime.onInstalled.addListener(() => {
  preferences["switchToEnterCRNsTabCheckBox"] = false;
  preferences["addToSummaryCheckBox"] = false;
  preferences["submitCheckBox"] = false;
  preferences["conditionalAddAndDropCheckBox"] = false;

  //console.log("preferences", preferences)

  chrome.storage.sync.set({ preferences });
  chrome.storage.sync.set({ CRNs });
  console.log('Quick Banner is Active');
  //console.log(preferences["Add to Summary"])
});

/*

*/

browser.browserAction.onClicked.addListener((tab) => {
  //const executing =
  chrome.tabs.executeScript(
    tab.id, {
      file: "insertCRNs.js"
  });
  executing.then(onExecuted, onError);
});
/*
// background.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['insertCRNs.js']
  });
});

*/
