// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//     console.log(response.farewell);
// });

const frontendUrl = "http://localhost:3000/";
const backendUrl = "http://localhost:5000/";

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
                currentSize = parseInt(header.value);
                chrome.cookies.get({
                    url: frontendUrl,
                    name: "session",
                }, async function (cookie) {
                    const res = await fetch(backendUrl + "/emit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Cookie": "session=" + cookie.value,
                        },
                        body: JSON.stringify({
                            url: details.url,
                            data: currentSize,
                        }),
                    });
                    if(!res.ok){
                        chrome.cookies.set({
                            url: frontendUrl,
                            name: "session",
                            value: "",
                        });
                    }
                    return res.json();
                }
                );
            }
        });
    },
    { urls: ["<all_urls>"] },
    ["responseHeaders"]
);
