import "xp.css/dist/XP.css"
import './styles.css';

// const { event, window: tauriWindow, path } = window.__Tauri__;

setInterval(() => {
    const now = new Date();
    document.getElementById("text").innerText = `The time is: ${now.toLocaleTimeString()}`;
  }, 1000); // 1000ms = 1 second

document.getElementById("ok").addEventListener("click", () => {
  document.getElementById("text").innerText = `stop it`;
});

