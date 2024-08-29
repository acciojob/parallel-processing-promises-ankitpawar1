const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    img.src = image.url;
  });
}

function displayImages(images) {
  images.forEach(image => {
    output.appendChild(image);
  });
}

btn.addEventListener("click", () => {
  Promise.all(images.map(img => loadImage(img)))
    .then(displayImages)
    .catch(error => {
      // Handle the error here, for example, log it to the console or display a message
      console.error(error.message);
    });
});