// Create dynamic layout on window onload event
window.onload = function () {
  loadContent("header", "header.html");
  loadContent("nav", "nav.html");
  loadContent("left-sidebar", "left-sidebar.html");
  loadContent("main", "main.html");
  loadContent("right-sidebar", "right-sidebar.html");
  loadContent("footer", "footer.html");
};

function loadContent(elementId, file) {
  fetch(`content/${file}`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading content:", error));
}
