console.log("🎬 YouTube Ad Watcher active!");

// Function to detect and highlight the Skip Ad button
function detectSkipAdButton() {
  const skipButton = document.querySelector('.ytp-ad-skip-button, .ytp-skip-ad-button');

  if (skipButton) {
    // Highlight the button
    skipButton.style.border = "3px solid red";
    skipButton.style.boxShadow = "0 0 10px red";
    skipButton.style.transition = "all 0.3s ease";

    console.log("🎯 Skip Ad button detected and highlighted!");
    
    // Show popup message
    showPopup("Skip Ad button detected!");
  }
}

// Function to show popup message
function showPopup(message) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.style.position = "fixed";
  popup.style.top = "10px";
  popup.style.right = "10px";
  popup.style.background = "#ff5555";
  popup.style.color = "#fff";
  popup.style.padding = "10px 15px";
  popup.style.borderRadius = "10px";
  popup.style.fontSize = "14px";
  popup.style.zIndex = "9999";
  popup.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  popup.style.fontWeight = "bold";
  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 2000);
}

// Check every second for the Skip Ad button
setInterval(detectSkipAdButton, 1000);
