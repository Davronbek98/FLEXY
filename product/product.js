// Добавление функциональности кнопкам добавления в корзину
const buttons = document.querySelectorAll(".product-details button");

buttons.forEach((button) => {
  button.addEventListener("click", function() {
    // Получение деталей продукта
    const productDetails = button.parentElement;
    const productName = productDetails.querySelector("h2").textContent;

    // Добавление продукта в корзину
    let cart = localStorage.getItem("cart");
    if (cart === null) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    cart.push(productName);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Отображение сообщения об успешном добавлении в корзину
    alert(${productName} добавлен в корзину.);
  });
});