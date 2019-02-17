//region {variables and functions}
var consoleGreeting = "Hello World! - from event_script.js";
var ruleStackOverflowHost = {
  "conditions": [
    new chrome.declarativeContent.PageStateMatcher({
      "pageUrl": {
        "hostEquals": "stackoverflow.com",
        "schemes": ["http", "https"]
      }
    })
  ],
  "actions": [new chrome.declarativeContent.ShowPageAction()]
};
//end-region


//region {calls}
console.log(consoleGreeting);
chrome.runtime.onInstalled.addListener(function () {
  //Replace all rules
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    //With a new rule
    chrome.declarativeContent.onPageChanged.addRules([ruleStackOverflowHost]);
  });
});
//end-region