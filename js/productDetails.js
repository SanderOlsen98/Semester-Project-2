import { baseUrl, apiUrl, cartKey } from "./constants/variables.js";
import createHeader from "./components/createHeader.js";
import createFooter from "./components/createFooter.js";
import createAdminBanner from "./components/createAdminBanner.js";
import {
  getLocalStorage,
  saveToLocalStorage,
} from "./constants/handleStorage.js";
import displayMessage from "./constants/displayMessage.js";

(async function () {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const url = baseUrl + apiUrl + id;

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("products", json);

    createHeader();
    createAdminBanner();
    createProductDetails(json);
    createFooter();
  } catch (error) {
    console.log(error);
    const container = document.querySelector(".product-details-container");
    container.innerHTML = displayMessage(
      "message-error message-error-center",
      "An error occurred. Please try again later."
    );
    createHeader();
    createFooter();
  }
})();

function createProductDetails(el) {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";

  document.title = "Merchiee " + el.title;

  const cart = getLocalStorage(cartKey);
  const productIsInCart = cart.find((product) => product.id == parseInt(el.id));

  let addToCartBtnTxt = "add to cart";
  let addToCartBtnCss = "";

  if (productIsInCart) {
    addToCartBtnTxt = "added";
    addToCartBtnCss = "added-to-cart";
  }

  const container = document.querySelector(".product-details-container");
  container.innerHTML = `
            <nav>
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="#">${el.title}</a></li>
                </ol>
            </nav>

            <section class="product-details-img" style="background: url('http://localhost:1337${el.image.formats.large.url}') center no-repeat; background-size: cover;>
                <i class="fas fa-heart heart"></i>
            </section>

            <section>
                <h1>${el.title}</h1>
                <div>
                    <div>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        62 reviews
                    </div>
                </div>
                <div class="price">&#36; ${el.price}</div>
                <p class="description">
                    " ${el.description} "
                </p>
                <div>
                    <button class="add-to-cart-btn ${addToCartBtnCss}" data-id="${el.id}">${addToCartBtnTxt}</button>
                </div>
            </section>`;

  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", (event) => {
    const storage = getLocalStorage(cartKey);
    const btn = event.target;
    const compareId = parseInt(btn.dataset.id);
    const isInStorage = storage.find((item) => item.id === compareId);

    if (
      isInStorage === undefined ||
      isInStorage === null ||
      isInStorage === false
    ) {
      storage.push(el);
      saveToLocalStorage(cartKey, storage);
    } else {
      const itemsToAdd = storage.filter((item) => item.id !== compareId);
      saveToLocalStorage(cartKey, itemsToAdd);
    }

    createProductDetails(el);
    createHeader();
  });
}
