import { baseUrl, apiUrl } from "./constants/variables.js";
import createHeader from "./components/createHeader.js";
import createFooter from "./components/createFooter.js";
import createShopInput from "./components/createShopInput.js";
import handleSearch from "./constants/handleSearch.js";
import createFeaturedProducts from "./components/createFeaturedProducts.js";
import createAdminBanner from "./components/createAdminBanner.js";
import createShop from "./components/createShop.js";
import displayMessage from "./constants/displayMessage.js";

(async function () {
  const url = baseUrl + apiUrl;

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("response", response);

    createHeader();
    createAdminBanner();
    createShopInput(json.length);
    createShop(json);
    createFeaturedProducts(json);
    createFooter();
    handleSearch(json, createShop);
  } catch (error) {
    console.log(error);
    const container = document.querySelector(".menu-wrapper .cards");
    container.innerHTML = displayMessage(
      "message-error message-error-center",
      "An error occurred. Please try again later."
    );
    createHeader();
    createFooter();
  }
})();
