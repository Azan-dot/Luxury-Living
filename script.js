/* ==============================
   LUXURY LIVING
   JAVASCRIPT
================================= */


/* ==============================
   MOBILE MENU
================================= */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");

}


/* ==============================
   SEARCH PRODUCTS
================================= */

function searchItems() {

    const searchInput =
        document.getElementById("searchInput");

    const searchTerm =
        searchInput.value.toLowerCase().trim();

    const products =
        document.querySelectorAll(".product-card");

    const noResults =
        document.getElementById("noResults");

    let resultsFound = false;


    products.forEach(function(product) {

        const productText =
            product.innerText.toLowerCase();

        if (productText.includes(searchTerm)) {

            product.style.display = "block";

            resultsFound = true;

        } else {

            product.style.display = "none";

        }

    });


    if (!resultsFound) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* ==============================
   CATEGORY FILTER
================================= */

function filterCategory(category) {

    const products =
        document.querySelectorAll(".product-card");

    const noResults =
        document.getElementById("noResults");


    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");


        if (productCategory === category) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });


    noResults.style.display = "none";


    document.getElementById("featured").scrollIntoView({

        behavior: "smooth"

    });

}


/* ==============================
   PRODUCT POPUP
================================= */

function showMessage(productName) {

    const popup =
        document.getElementById("popup");

    const popupTitle =
        document.getElementById("popupTitle");


    popupTitle.innerText = productName;

    popup.style.display = "flex";

}


/* ==============================
   CLOSE POPUP
================================= */

function closePopup() {

    const popup =
        document.getElementById("popup");

    popup.style.display = "none";

}


/* ==============================
   CLOSE POPUP WHEN CLICKING
   OUTSIDE THE BOX
================================= */

window.addEventListener("click", function(event) {

    const popup =
        document.getElementById("popup");

    if (event.target === popup) {

        popup.style.display = "none";

    }

});
