function setSpeed(speed) {
  const video = document.querySelector('video');
  if (video) {
    video.playbackRate = speed;
  }
}

// Listen for changes in speed from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setSpeed") {
    setSpeed(request.speed);
  }
});
