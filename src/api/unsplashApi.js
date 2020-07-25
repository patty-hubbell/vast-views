export default function unsplashApi() {
  let imagesArray = [];
  let ready = false;
  let imagesLoaded = 0;
  let totalImages = 0;

  const count = 30;
  const apiKey = "lA_pnbXwphLuyywI4jsVsH8_o43qhajfccxqwjiW6lQ";
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

  let loader;

  // Check if all the images were loaded
  const imageLoaded = () => {
    imagesLoaded++;
    const loader = document.getElementById("loader");

    if (imagesLoaded === totalImages) {
      ready = true;
      loader.hidden = true;
    }
  };

  // Create elements for images to display to user
  const displayImages = () => {
    const imageContainer = document.getElementById("image-container");

    imagesLoaded = 0;
    totalImages = imagesArray.length;

    // Populate the images container
    imagesArray.forEach((image) => {
      // Create a link to the photo's Unsplash page
      const item = document.createElement("a");
      item.setAttribute("href", image.links.html);
      item.setAttribute("target", "_blank");

      // Create the image
      const img = document.createElement("img");
      img.setAttribute("src", image.urls.regular);
      img.setAttribute("alt", image.alt_description);
      img.setAttribute("title", image.alt_description);

      // Check when the image is finished loading
      img.addEventListener("load", imageLoaded);

      // Put the image inside the link, put the link in the image container
      item.appendChild(img);
      imageContainer.appendChild(item);
    });
  };

  // Get photos from the Unsplash API
  const getImages = async () => {
    try {
      const response = await fetch(apiUrl);
      imagesArray = await response.json();
      displayImages();
    } catch (error) {}
  };

  // Check if scrolling near bottom of page, if so then load more images
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      ready
    ) {
      ready = false;
      getImages();
    }
  });

  return { getImages };
}
