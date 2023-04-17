let shoppingCartArray = [];
let total = 0;
let productContainer = document.querySelector(".last-book-container")


//Peticion de productos al servidor
//Utilizando la API de productos de platzi para simular el consumo de datos
fetch("https://api.escuelajs.co/api/v1/products")
    .then(response => response.json())
    .then(data => {
        //limitamos a 4 productos
        const productsArrays = data.slice(0,4)
        console.log(productsArrays);

        //Impresion de productos en pantalla
        productsArrays.forEach(product => {
            // console.log(product);
            productContainer.innerHTML += `
            <div class="card" id="${product.id}">
                <figure class="img-book">
                    <img src="${product.images[0]}" alt="libro">
                </figure>
                <h3 class="book-title" id="book-title">${product.title}</h3>
                <p id="author">Autor</p>
                <p id="status">Estado del libro</p>
                <span class="span-word" id="price">$${product.price}</span>
                <button class="btn-add-to-cart btn" id="btn-add-to-car" data id>Añadir al carrito</button>
            </div>`
        });

        //Escuchando cuando se hace click en un boton de agregar al carrito
        let addButton = document.querySelectorAll(".btn-add-to-cart");
        //Transformando el NodeList a arreglo
        // console.log(addButton);
        addButton = [...addButton];
        // console.log(addButton);


        let listContainer = document.querySelector(".list-cart");
        addButton.forEach((btn => {
            btn.addEventListener("click", e => {
                // console.log("click");
                //AGREGANDO PRODUCTOS AL CARRITO

                //Buscando el id del producto
                let actualId = parseInt(e.target.parentNode.id);
                console.log(actualId);
                
                //Con el id encontrar el objeto actual
                //El parametro item representa cada uno de los elementos del arreglo
                let actualProduct = productsArrays.find(item =>)

                //Agregando el producto al carrito
                listContainer.innerHTML += `
                <div class="product" id="product">
                    <img src="https://picsum.photos/400/310" alt="">
                    <div class="text-cart">
                        <p>Título libro</p>
                        <span class="span-word">Precio</span>
                    </div>
                    <span class="delete-product"><i class="fa-solid fa-trash"></i></span>
                </div>`
            })
        }))

        
    });


