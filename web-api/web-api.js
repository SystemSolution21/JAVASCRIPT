// fetch API to read text file and display content
const displayContent = function () {
  fetch("content.txt")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").textContent = data;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("content").textContent = "Error loading file";
    });
};

// Webpage load
window.addEventListener("load", displayContent);
