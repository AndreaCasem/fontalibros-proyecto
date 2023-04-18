const btnCartOpen = document.getElementById("btn-shopping-cart");
const btnCartClose = document.getElementById("btn-close-cart");
const containerCart = document.getElementById("container-cart");

//Mostrar carrito
btnCartOpen.addEventListener("click", () => {
    containerCart.style.display = "flex";
})

//Cerrar carrito
btnCartClose.addEventListener("click", () => {
    containerCart.style.display = "none";
});
