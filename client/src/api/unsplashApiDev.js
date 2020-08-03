export default function unsplashApiDev() {
  /* Development imagesArray */
  let imagesArray = [
    {
      alt_description: "Testing 1",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
        self: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1595480788080-b158faee4930?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
      user: {
        name: "Rodeos Vitriolations",
      },
    },
    {
      alt_description: "Testing 2",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
        self: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1586192889836-2a83cb685e1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
      user: {
        name: "Fake Concomitantly",
      },
    },
    {
      alt_description: "Testing 3",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
        self: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1595378502218-c4ff99cafee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
      user: {
        name: "Saltshakers Sportiness",
      },
    },
    {
      alt_description: "Testing 4",
      links: {
        html: "https://unsplash.com/photos/5a9dVfwhjd8",
        self: "https://unsplash.com/photos/5a9dVfwhjd8",
      },
      urls: {
        regular:
          "https://images.unsplash.com/photo-1590611380053-da6447021fbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      },
      user: {
        name: "Elogiums Calyciform",
      },
    },
  ];

  // Declare loader and imageContainer, which will hold these elements in the document
  let loader;
  let imageContainer;

  // readyToLoadMore becomes true when images from current response are all loaded
  // imagesLoaded is the current number of images loaded
  // totalImages is the total number of images given in the current API response
  let readyToLoadMore = false;
  let imagesLoaded = 0;
  let totalImages = 0;

  // Initial number of images to be requested from the API is 5 in order to
  // reduce initial loading times
  let imageLoadCount = 10;

  // Check if all the images were loaded
  const imageLoaded = () => {
    imagesLoaded++;

    // If we loaded all images from current response, we can load more
    if (imagesLoaded === totalImages) {
      readyToLoadMore = true;
      loader.hidden = true;
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
      // Create the image and information container
      const container = document.createElement("div");
      container.setAttribute("class", "image-and-info-container");

      // Create a link to the photo's Unsplash page
      const item = document.createElement("a");
      item.setAttribute("href", image.links.html);
      item.setAttribute("target", "_blank");

      // Create the image
      const img = document.createElement("img");
      img.setAttribute("src", image.urls.regular);
      img.setAttribute("alt", image.alt_description);
      img.setAttribute("title", image.alt_description);

      // Create the information container
      const info = document.createElement("div");
      info.setAttribute("class", "image-info");

      // Create author link
      const authorLink = document.createElement("a");
      authorLink.setAttribute("href", image.links.self);
      authorLink.setAttribute("target", "_blank");
      authorLink.setAttribute("class", "image-author-link");

      // Create the author name element
      const authorName = document.createElement("p");
      authorName.setAttribute("class", "image-author-name");
      authorName.textContent = image.user.name;

      // Check when the image is finished loading
      img.addEventListener("load", imageLoaded);

      // Put the image inside the link, put the link in the image container
      item.appendChild(img);
      container.appendChild(item);
      authorLink.append(authorName);
      info.appendChild(authorLink);
      container.appendChild(info);
      imageContainer.appendChild(container);
    });
  };

  // Get photos from the Unsplash API
  const getImages = async () => {
    // If the imageLoadCount is set to the initial value of 10, change the
    // value to 30
    if (imageLoadCount === 10) {
      imageLoadCount = 30;
    }

    // Load and display the new images
    displayImages();
  };

  // Define each variable that holds a document element
  const getDocumentElements = () => {
    loader = document.getElementById("loader");
    imageContainer = document.getElementById("image-container");
  };

  // Check if scrolling near bottom of page, if so then load more images
  window.addEventListener("scroll", () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1000 &&
      readyToLoadMore
    ) {
      // Set readyToLoadMore to false since 30 new images must be loaded
      readyToLoadMore = false;

      // Request the 30 new images
      getImages();
    }
  });

  return { getDocumentElements, getImages };
}
