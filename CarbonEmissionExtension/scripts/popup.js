const h1 = document.querySelector("h1");
const p1 = document.querySelector("p");

const carbon = document.getElementById("grams");

const frontendUrl = "http://localhost:5173/";
const backendUrl = "http://localhost:8000/";
// chrome.runtime.sendMessage(
//     { name: "request", userid: "123" },
//     function (response) {
//         console.log(response);
//         h1.textContent = response.size;
//         p1.textContent = response.change;
//     }
// );
const login = async (email, password) => {
    const response = await fetch(backendUrl + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });
    const res = response.json();
    const cookie = res.headers.get("set-cookie");
    chrome.cookies.set({
        url: frontendUrl,
        name: "session",
        value: cookie.split(";")[0].split("=")[1],
    });
};

const register = async (email, password) => {
    await fetch(backendUrl + "/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });
}

const getCurrentSessionEmissions = async () => {  
    chrome.cookies.set({
        url: frontendUrl,
        name: "session",
        value: "2"
    });
    chrome.cookies.get({
        url: frontendUrl,
        name: "session",
    }, async function (cookie) {
        // if(cookie === null) {

        // }
        const res = await fetch(backendUrl + "current", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "session=" + cookie.value,
            },
        });
        carbon.textContent = res.json();
    }
    );
}

setInterval(() => {
    getCurrentSessionEmissions();
}, 3000);
