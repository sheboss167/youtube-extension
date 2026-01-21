# youtube-extension
YouTube Ad Watcher
Overview

YouTube Ad Watcher is a browser extension (Chrome/Edge compatible) that detects and highlights the "Skip Ad" button on YouTube videos. It provides a visual indicator (glow + popup) when the skip button appears.

⚠️ This extension is for educational purposes only and does not automatically click or skip ads to comply with YouTube’s Terms of Service.

Features

Detects the Skip Ad button on YouTube videos.

Highlights the button with a red glow.

Shows a temporary popup notification when the button is detected.

Logs detection events in the browser console.

Installation (Developer Mode)

Clone or download this repository.

Open your browser (Chrome or Edge).

Navigate to the Extensions page:

Chrome: chrome://extensions/

Edge: edge://extensions/

Turn on Developer Mode.

Click “Load unpacked”.

Select the folder youtube-ad-watcher.

Make sure the extension appears and is enabled.

Usage

Go to YouTube
.

Play any video that shows ads.

When the Skip Ad button appears:

It will glow red.

A popup notification will briefly appear.

A message will be logged in the console.

Open the browser console (Ctrl+Shift+I → Console) to see log messages.

File Structure
youtube-ad-watcher/
│
├─ manifest.json       # Extension configuration
├─ content.js          # Detects and highlights the Skip Ad button
├─ background.js       # Background script, logs when the extension is loaded
└─ README.md           # Project overview and instructions

Future Improvements

Add a toolbar toggle to enable/disable detection without opening extensions page.

Customize highlight color or popup duration.

Add options for sound notifications when a Skip Ad button appears.

Author

Maryanne Sheboss
