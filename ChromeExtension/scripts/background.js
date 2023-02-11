// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//     console.log(response.farewell);
// });
let currentSize = 0;
let c = 0;

let CurrentVisited = 0;

current_url = "";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const messageName = message.name;

  if (messageName === "size") {
    currentSize += message.bytes;
    CurrentVisited += 1;
    current_url = message.baseurl;
  } else if (messageName === "request") {
    sendResponse({
      size: currentSize,
      visted: CurrentVisited,
      current_url: current_url,
    });
  }
});

chrome.webRequest.onCompleted.addListener(
  (details) => {
    details.responseHeaders.forEach((header) => {
      if (header.name === "content-length") {
        currentSize += parseInt(header.value);
      }
    });
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"]
);
