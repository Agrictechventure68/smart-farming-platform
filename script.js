console.log("Smart Farming Platform.");
// This script is part of a smart farming platform that integrates IoT devices for monitoring and managing agricultural activities.

function alertWelcome() {
  alert("Welcome to the Smart Farming Platform!");
}
//=== Add the translation script below ===
const languageSelector = document.getElementById("language-selector");

// Default language
loadLanguage("en");

languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  loadLanguage(selectedLang);
});

function loadLanguage(lang) {
  fetch(`assets/lang/${lang}.json`)
    .then((res) => res.json())
    .then((translations) => {
      for (const key in translations) {
        const element = document.querySelector(`[data-i18n="${key}"]`);
        if (element) {
          element.textContent = translations[key];
        }
      }
    })
    .catch((err) => {
      console.error("Language load failed:", err);
    });
}
  ;

