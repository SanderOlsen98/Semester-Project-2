import { getLocalStorage } from "../constants/handleStorage.js";
import logoutUser from "../constants/logoutUser.js";
import { cartKey } from "../constants/variables.js";
import { isLoggedIn } from "../constants/loggedInStatus.js";

export default function createHeader() {
  let cart = getLocalStorage(cartKey);
  const howManyItemsInCart =
    cart.length < 1 ? (cart = 0) : (cart = cart.length);

  let links = "";

  if (isLoggedIn) {
    // what a logged in user sees
    links = `
                <li><a href="/account.html"><i class="far fa-login"></i> My Account</a></li>
                <li><a><span class="logout-btn">Logout</span></a></li>`;
  } else {
    // If youre not logged in, this is what the user will see
    links = `
                <li><a href="/login.html"><i class="fas fa-sign-in-alt"></i> Login</a></li>`;
  }

  const header = document.querySelector(".header-container");

  header.innerHTML = `
    <header>
        <div class="nav-top">
            <div class="container">
                <a href="index.html"><img src="img/merchiee-logo-blue.png" alt="merchiee logo"></a>
                <div class="nav-top-links">
                    <nav>
                        <ul>
                            ${links}
                        </ul>
                    </nav>
                </div>
                <div class="hamburger">
                    <div class="hamburger-inner">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bottom">
            <div class="container">
                <nav class="nav-desktop">
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/shop.html">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Buy Tickets!</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><a href="/faves.html"><i class="fas fa-star"></i></a></li>
                        <li>
                            <a href="/cart.html">
                                <i class="fas fa-shopping-cart"></i>
                                <span class="cart-sum">${howManyItemsInCart}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    
    <div class="nav-mobile hidden">
        <div class="nav-mobile-title-container"><h1>Navigation</h1></div>
        <div class="nav-mobile-inner">
            <nav>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                        <li><a href="/shop.html">Shop</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Buy Tickets!</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><a href="/cart.html"><i class="fas fa-shopping-cart"></i> Cart (${howManyItemsInCart})</a></li>
                    <li><a href="/faves.html"><i class="fas fa-heart"></i> Faves</a></li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li><a href="#">Customer service</a></li>
                    ${links}
                </ul>
            </nav>
            <div style="height: 200px;"></div>
        </div>
    </div>`;

  // match the href in the html tag with the actual current url
  const pathname = location.pathname;
  const anchorTags = document.querySelectorAll("header nav ul li a");

  anchorTags.forEach((link) => {
    if (link.getAttribute("href") === pathname) {
      link.className = "active";
    }
  });

  const logoutBtns = document.querySelectorAll(".logout-btn");
  logoutBtns.forEach((btn) => btn.addEventListener("click", logoutUser));

  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", navSlideIn);
}

function navSlideIn() {
  const body = document.body;
  const nav = document.querySelector(".nav-mobile");

  body.classList.toggle("fixed-position");
  nav.classList.toggle("hidden");
  nav.style.animation = "nav-mobile-slide-in 2s";

  const hamburgerLines = document.querySelectorAll(".line");

  for (let i = 0; i < hamburgerLines.length; i++) {
    hamburgerLines[i].classList.toggle("hamburger-close-animation");
    hamburgerLines[i].classList.toggle("line" + [i]);
  }
}
