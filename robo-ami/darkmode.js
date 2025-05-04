// Function to apply dark mode
function applyDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.querySelector(".toggle-icon").textContent = "☀️";
    } else {
      document.body.classList.remove("dark-mode");
      document.querySelector(".toggle-icon").textContent = "🌙";
    }
  }
  
  // Initialize dark mode
  function initDarkMode() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const currentTheme = localStorage.getItem("theme");
    const isDark = currentTheme === "dark" || (!currentTheme && prefersDarkScheme.matches);
  
    applyDarkMode(isDark);
  
    // Toggle dark mode when button is clicked
    const toggleBtn = document.getElementById("darkModeToggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const newDarkMode = !document.body.classList.contains("dark-mode");
        localStorage.setItem("theme", newDarkMode ? "dark" : "light");
        applyDarkMode(newDarkMode);
      });
    }
  
    // Listen for system theme changes
    prefersDarkScheme.addEventListener("change", (e) => {
      const newTheme = e.matches ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      applyDarkMode(newTheme === "dark");
    });
  }
  
  // Initialize when page loads
  document.addEventListener("DOMContentLoaded", initDarkMode);