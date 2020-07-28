export default function unsplashApi() {
  let imageOptions = "both";

  let loader;
  let imageContainer;

  let imagesArray = [];
  let ready = false;
  let imagesLoaded = 0;
  let totalImages = 0;

  let count = 5;
  const apiKey = "lA_pnbXwphLuyywI4jsVsH8_o43qhajfccxqwjiW6lQ";
  const apiUrlBoth = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=nature`;
  const apiUrlPortrait = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=nature&orientation=portrait`;
  const apiUrlLandscape = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=nature&orientation=landscape`;

  // Check if all the images were loaded
  const imageLoaded = () => {
    imagesLoaded++;

    if (imagesLoaded === totalImages) {
      ready = true;
      loader.hidden = true;
      count = 30;
    }
  };

  // Create elements for images to display to user
  const displayImages = () => {
    // Reset the number of images that have been loaded from latest response
    imagesLoaded = 0;

    // Set the total images count to the number of images given in the latest response
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
      let response;
      if (imageOptions === "both") {
        response = await fetch(apiUrlBoth);
      } else if (imageOptions === "portrait") {
        response = await fetch(apiUrlPortrait);
      } else if (imageOptions === "landscape") {
        response = await fetch(apiUrlLandscape);
      }
      imagesArray = await response.json();
      displayImages();
    } catch (error) {}
  };

  const getImageOptions = () => {
    loader = document.getElementById("loader");
    imageContainer = document.getElementById("image-container");

    document
      .getElementById("image-options-form")
      .addEventListener("click", () => {
        let imageContainer = document.getElementById("image-container");
        if (
          document.getElementById("portrait").checked &&
          imageOptions !== "portrait"
        ) {
          imageOptions = "portrait";
          imageContainer.textContent = "";
          window.scrollTo(0, 0);
          loader.hidden = false;
          count = 5;
          getImages();
        } else if (
          document.getElementById("landscape").checked &&
          imageOptions !== "landscape"
        ) {
          imageOptions = "landscape";
          imageContainer.textContent = "";
          window.scrollTo(0, 0);
          loader.hidden = false;
          count = 5;
          getImages();
        } else if (
          document.getElementById("both").checked &&
          imageOptions !== "both"
        ) {
          imageOptions = "both";
          imageContainer.textContent = "";
          window.scrollTo(0, 0);
          loader.hidden = false;
          count = 5;
          getImages();
        }
      });
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

  return { getImages, getImageOptions };
}
