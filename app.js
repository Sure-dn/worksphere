// app.js (ES modules)
/**
 * Basic interactivity + an optional spot to plug in Firebase.
 * Open index.html in a browser (or serve locally), then push to GitHub.
 */

// Tiny utility
const $ = (sel) => document.querySelector(sel);

// Button demo
$("#actionBtn").addEventListener("click", () => {
  const el = $("#status");
  const stamp = new Date().toLocaleString();
  el.textContent = `Button clicked at ${stamp}`;
});

// Theme toggle
const applyTheme = (mode) => {
  document.documentElement.classList.toggle("light", mode === "light");
  localStorage.setItem("theme", mode);
};
const saved = localStorage.getItem("theme") || "dark";
applyTheme(saved);
$("#themeToggle").addEventListener("click", (e) => {
  e.preventDefault();
  const next = document.documentElement.classList.contains("light") ? "dark" : "light";
  applyTheme(next);
});

// =========================
// OPTIONAL: Firebase (client)
// =========================
// 1) Visit Firebase console → Project settings → General → Your apps.
// 2) Choose Web app, then copy the SDK snippet.
// 3) Paste your config below and initialize the SDK you need.
//
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"; // optional
//
// const firebaseConfig = {
//   apiKey: "…",
//   authDomain: "…",
//   projectId: "…",
//   storageBucket: "…",
//   messagingSenderId: "…",
//   appId: "…",
// };
//
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); // if you imported Firestore
// // Now you can use Firestore/Auth/etc. as needed.
