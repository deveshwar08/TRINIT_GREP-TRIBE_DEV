// chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
//     console.log(response.farewell);
// });

const frontendUrl = "http://localhost:5173/";
const backendUrl = "http://localhost:8000/";
let currentSize = 0;
let CurrentVisited = 0;
let value;
chrome.cookies.set({
    url: frontendUrl,
    name: "session",
    value: "5"
});
chrome.cookies.get({
    url: frontendUrl,
    name: "session",
}, function (cookie) {
    value = cookie.value;
});
current_url = "";

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    const messageName = message.name;

    if (messageName === "size") {
        currentSize += message.bytes;
        CurrentVisited += 1;
        current_url = message.baseurl;
        await fetch(backendUrl + "emit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "session=" + value,
            },
            body: JSON.stringify({
                url: message.baseurl,
                data: currentSize,
            }),
        });

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
        console.log(details)
        details.responseHeaders.forEach(async (header) => {
            if (header.name === "content-length") {
                currentSize = parseInt(header.value);
                console.log("currentSize: " + currentSize);
                const res = await fetch(backendUrl + "emit", {
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
                if (!res.ok) {
                    chrome.cookies.set({
                        url: frontendUrl,
                        name: "session",
                        value: "",
                    });
                }
                return res.json();
            }
        });
    },
    { urls: ["<all_urls>"] },
    ["responseHeaders"]
);
