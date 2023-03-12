const addCard = () => {
    const productFiled = document.getElementById('product-filed');
    const productQuantity = document.getElementById('quantity-filed');
    const product = productFiled.value;
    const quantity = productQuantity.value;

    productFiled.value = ''
    productQuantity.value = ''

    // console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStores(product, quantity)
}

// Display product
const displayProduct = (product, quantity) => {
    const listContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `
    ${product}: ${quantity}
    `;
    listContainer.appendChild(li)
}

// check product and  get product 
const getStoredShoppingCart = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}


// Save to LocalStores
const saveProductToLocalStores = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem('cart', cartStringified)
}

const displayProductFromLocalStores = () => {
    const saveCart = getStoredShoppingCart()
    for (const product in saveCart) {
        const quantity = saveCart[product];
        displayProduct(product, quantity)

    }
}
displayProductFromLocalStores()