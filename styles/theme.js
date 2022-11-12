(() => {
  const isDarkModeActive =
    localStorage.getItem("isDarkMode") === "false" ? false : true;
  localStorage.setItem("isDarkMode", isDarkModeActive);

  if (isDarkModeActive) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
})();
