var semitotal = 0;
chrome.devtools.network.onRequestFinished.addListener(function (request) {
  semitotal += request.response._transferSize;
});


setInterval(() => {
  if (semitotal > 0) {
    h1.textContent = semitotal;
    chrome.storage.sync.get("byte", (data) => {
      chrome.storage.sync.set({ byte: data.byte + semitotal }, () => {
        semitotal = 0;
      });
    });
  }
}, 5000);

const h1 = document.querySelector('h1');
