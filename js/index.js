const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav
const nav = document.querySelector("nav");
const navItems = document.querySelectorAll("a");
// loops through each 'a' and adds the value from our siteContent object
// starts at '1' when using 'i' to loop through values
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent["nav"][`nav-item-${i + 1}`];
  navItems[i].style.color = "green";
}

//navItems.style.color = "green";
const options = document.createElement("a");
options.textContent = "Options";
options.style.color = "green";
const styles = document.createElement("a");
styles.textContent = "Styles";
styles.style.color = "green";

nav.append(options);
nav.prepend(styles);

// top section
const h1 = document.querySelector(".cta-text h1");
const button = document.querySelector(".cta-text button");
const cicleImg = document.getElementById("cta-img");
const br = document.createElement("br");
// feel like the following is wrong but it works so...
h1.innerHTML = "DOM<br/> Is<br/> Awesome";
button.textContent = siteContent["cta"]["button"];
cicleImg.setAttribute("src", siteContent["cta"]["img-src"]);

// *all* h4's
// 'contSectNames' allows easy looping through the names for both 'h4' and 'p'
const contSectNames = [
  "features",
  "about",
  "services",
  "product",
  "vision",
  "contact"
];
// we want all h4's so use '...TagName'
const h4 = document.getElementsByTagName("h4");
// checks 'main-content' otherwise goes to 'contact'
for (let i = 0; i < contSectNames.length; i++) {
  h4[i].textContent =
    siteContent["main-content"][`${contSectNames[i]}-h4`] ||
    siteContent["contact"][`${contSectNames[i]}-h4`];
}
// only *text-content* p's, so use "querySelectorAll"
const textP = document.querySelectorAll(".text-content p");
for (let i = 0; i < textP.length; i++) {
  textP[i].textContent =
    siteContent["main-content"][`${contSectNames[i]}-content`];
}

// middle Image
const midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact section
const contactType = ["address", "phone", "email"];
//  only * .contact * p's, so use "querySelectorAll"
const contactP = document.querySelectorAll(".contact p");
// does same thing as 'for' loops above, just trying out '.forEach'
contactP.forEach(
  (item, i) => (item.textContent = siteContent["contact"][`${contactType[i]}`])
);
