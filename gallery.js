window.addEventListener("resize", adjustGallery);

function adjustGallery() {
  const galleryItems = document.querySelectorAll(".gallery__item");
  const containerWidth = document.querySelector(".gallery").offsetWidth;
  const itemWidth = 300;

  const numItemsPerRow = Math.floor(containerWidth / itemWidth);
  const newWidth = containerWidth / numItemsPerRow - 20;

  galleryItems.forEach((item) => {
    item.style.flex = `1 0 ${newWidth}px`;
  });
}

adjustGallery();
