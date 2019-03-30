//region {variables and functions}
var responseMessage = { data: "Test message Y" };
//end-region

//region {calls}
//Show Page-Action using the onMessage event
chrome.runtime.onMessage.addListener(
	function(requestMessage,sender,sendResponse) {
        chrome.pageAction.show(sender.tab.id);
        console.log("requestMessage: " + requestMessage.data);
        sendResponse(responseMessage);
	}
);
//end-region
