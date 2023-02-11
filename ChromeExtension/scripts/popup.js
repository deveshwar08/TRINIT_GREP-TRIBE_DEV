const h1 = document.querySelector("h1");
const p1 = document.querySelector("p");

const frontendUrl = "http://localhost:3000/";
const backendUrl = "http://localhost:5000/";
// chrome.runtime.sendMessage(
//     { name: "request", userid: "123" },
//     function (response) {
//         console.log(response);
//         h1.textContent = response.size;
//         p1.textContent = response.change;
//     }
// );
const login = async (email, password) => {
    const res = await fetch(backendUrl + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });
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
    chrome.cookies.get({
        url: frontendUrl,
        name: "session",
    }, async function async(cookie) {
        const res = await fetch(backendUrl + "/current", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "session=" + cookie.value,
            },
        });
        h1.textContent = res.json();
    }
    );
}

setInterval(() => {
    getCurrentSessionEmissions();
}, 30000);
