document.getElementById('speedControl').addEventListener('change', function() {
  const speed = parseFloat(this.value);
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "setSpeed", speed: speed });
  });
});
