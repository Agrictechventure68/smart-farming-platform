console.log("Smart Farming Platform.");
// This script is part of a smart farming platform that integrates IoT devices for monitoring and managing agricultural activities.function alertWelcome() {
  alert("Welcome to Smart Farming Platform by Agrictechventure68!");
}

document.getElementById("language").addEventListener("change", function() {
  const selectedLang = this.value;
  fetch(assets/lang/${selectedLang}.json)
    .then(response => response.json())
    .then(translations => {
      for (let key in translations) {
        const element = document.getElementById(key);
        if (element) {
          element.textContent = translations[key];
        }
      }
    })
    .catch(err => console.error("Language load failed", err));
});


//=== Add the translation script below ===
document.getElementById("language-selector");

  // Default language
  loadLanguage("en");

  languageSelector.addEventListener("change", (e) => {
    const selectedLang = e.target.value;
    loadLanguage(selectedLang);
  });

  function loadLanguage(lang) {
    fetch(assets/lang/${lang}.json)
      .then((res) => res.json())
      .then((translations) => {
        for (const key in translations) {
          const element = document.querySelector([data-i18n="${key}"]);
          if (element) {
            element.textContent = translations[key];
          }
        }
      })
      .catch((err) => {
        console.error("Language load failed:", err);
      });
  }
});

