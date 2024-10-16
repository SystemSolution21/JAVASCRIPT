// fetch API to read text file and display content
// Display the text containing html elements
const displayHtmlContent = function () {
  fetch("html-content.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("html-content").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("html-content").innerHTML = "Error loading file";
    });
};

// Display plain text
(async function displayPlainText() {
  await fetch("plain-text.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("plain-text").textContent = data;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("plain-text").textContent = "Error Loading File";
    });
})();

// Webpage load
window.addEventListener("load", displayHtmlContent);
