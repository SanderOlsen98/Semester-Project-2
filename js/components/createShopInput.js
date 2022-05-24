export default function createShopInput(totalProducts) {
  const container = document.querySelector(".menu-input-container");
  container.innerHTML = `
            <div class="menu-input">
                <div class="input-wrapper">
                    <input class="search" type="search" placeholder="Search...">
                    <button><i class="fas fa-search"></i></button>
                </div>
                <span>Total of ${totalProducts} products in our store currently.</span>
            </div>`;
}
