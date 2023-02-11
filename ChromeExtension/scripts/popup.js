const h1 = document.querySelector("h1");
const p1 = document.querySelector("p");



chrome.runtime.sendMessage(
  { name: "request" ,userid: "123"},
  function (response) {
    console.log(response);
    h1.textContent = response.size;
    p1.textContent = response.change;
  }
);
