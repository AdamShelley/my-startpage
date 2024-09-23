let lastKey = null;
let matchingLinks = [];
let currentIndex = 0;

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const links = document.querySelectorAll(".bookmarks a");

if (key !== lastKey) {
    matchingLinks = Array.from(links).filter((link) => link.getAttribute("data-key") === key);
    currentIndex = 0;
  }
  
  if (matchingLinks.length > 0) {
    matchingLinks[currentIndex].focus();

    currentIndex = (currentIndex + 1) % matchingLinks.length;
  }

  lastKey = key;


  if (event.key === "Enter" && matchingLinks.length > 0) {
    window.location.href = matchingLinks[currentIndex === 0 ? matchingLinks.length - 1 : currentIndex - 1].href;
  }
});


