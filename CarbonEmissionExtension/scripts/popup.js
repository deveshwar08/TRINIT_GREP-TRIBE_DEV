const h1 = document.querySelector("h1");
const p1 = document.querySelector("p");

const carbon = document.getElementById("grams");
const total = document.getElementById("total");
const average = document.getElementById("average");

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
    chrome.cookies.get({
        url: frontendUrl,
        name: "session",
    }, async function (cookie) {

        const res = await fetch(backendUrl + "current", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "session=" + cookie.value,
            },
        });
        const data = await res.json();
        carbon.textContent = Math.round(data) + "g";
    }
    );
}

const getTotalEmissions = async () => {
    chrome.cookies.get({
        url: frontendUrl,
        name: "session",
    }, async function (cookie) {
        const res = await fetch(backendUrl + "footprint", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "session=" + cookie.value,
            },
        });
        const data = await res.json();
        total.textContent = Math.round(data) + "g";
    }
    );
}

const getAverageEmissions = async () => {
    chrome.cookies.get({
        url: frontendUrl,
        name: "session",
    }, async function (cookie) {
        const res = await fetch(backendUrl + "averageFootprint", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "session=" + cookie.value,
            },
        });
        const data = await res.json();
        average.textContent = Math.round(data) + "g";
    }
    );
}

setInterval(() => {
    getCurrentSessionEmissions();
    getTotalEmissions();
    getAverageEmissions();
}, 3000);
