const Photos = [
  {
    id: "_bCzMXGvT5I",
    slug: "a-man-riding-a-bike-down-a-street-next-to-tall-buildings-_bCzMXGvT5I",
    url: "https://images.unsplash.com/photo-1709321954258-698bea8a21e6?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
  {
    id: "azIP-LUvIXs",
    slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
    url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
  },
];

getImage();
afficheImage();

let isScrolling;

window.addEventListener("scroll", function () {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    onScrollEnd();
  }, 200);
});
function onScrollEnd() {
  console.log("Le défilement est terminé !");
  getImage();
  afficheImage();
}
function afficheImage() {
  const ul = document.getElementById("images-listes");
  Photos.forEach((Photo, index) => {
    const li = document.createElement("li");
    li.className = "item";
    const img = document.createElement("img");
    img.id = `image-${index + 1}`;
    img.setAttribute("src", Photo.url);
    img.setAttribute("alt", Photo.slug);
    img.className = "image-item";
    li.appendChild(img);
    ul.appendChild(li);
  });
}
function getImage() {
  const apiUrl =
    "https://api.unsplash.com/photos/random?client_id=uToSPDlPAbSNbsNvbUBJdWO_MS7IV5wVzyDgJ-o1oJM&count=10";

  // Utilisation de fetch pour appeler l'API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur réseau : " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      Photos.push(data);
    })
    .catch((error) => {
      console.error("Il y a eu un problème avec l'appel à l'API :", error);
    });
  Photos.push(
    {
      id: "azIP-LUvIXs",
      slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
      url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
    },
    {
      id: "azIP-LUvIXs",
      slug: "a-red-building-sitting-on-the-side-of-a-body-of-water-azIP-LUvIXs",
      url: "https://images.unsplash.com/photo-1724271361924-ad07d11d4add?ixid=M3w2NTM2NzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc3ODE1MTh8&ixlib=rb-4.0.3",
    }
  );
}
