export default function unsplashApi() {
  let imagesArray = [
    {
      alt_description: "Testing",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1595480788080-b158faee4930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      alt_description: "Testing",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1586192889836-2a83cb685e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      alt_description: "Testing",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1595378502218-c4ff99cafee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
    },
    {
      alt_description: "Testing",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1590611380053-da6447021fbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
    },
  ];

  let imageOptions = "both";

  //let imagesArray = [];
  let ready = false;
  let imagesLoaded = 0;
  let totalImages = 0;

  const count = 30;
  const apiKey = "lA_pnbXwphLuyywI4jsVsH8_o43qhajfccxqwjiW6lQ";
  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=nature`;

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
      //const response = await fetch(apiUrl);
      //imagesArray = await response.json();
      displayImages();
    } catch (error) {}
  };

  const getImageOptions = () => {
    document
      .getElementById("image-options-form")
      .addEventListener("click", () => {
        if (
          document.getElementById("portrait").checked &&
          imageOptions !== "portrait"
        ) {
          imageOptions = "portrait";
          console.log("Portrait checked");
        } else if (
          document.getElementById("landscape").checked &&
          imageOptions !== "landscape"
        ) {
          imageOptions = "landscape";
          console.log("Landscape checked");
        } else if (
          document.getElementById("both").checked &&
          imageOptions !== "both"
        ) {
          imageOptions = "both";
          console.log("Both checked");
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
