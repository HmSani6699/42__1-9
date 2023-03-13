const addCard = () => {
    const productFiled = document.getElementById('product-filed');
    const productQuantity = document.getElementById('product-quantity');
    const product = productFiled.value;
    const quantity = productQuantity.value;

    productFiled.value = ''
    productQuantity.value = ''

    // console.log(product, quantity);
    displayProduct(product, quantity);
    saveToLocalStorageFromCart(product, quantity)
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


const getProductToLocalStorage = () => {
    let cart = {}
    const cartString = localStorage.getItem('cart');
    if (cartString) {
        cart = JSON.parse(cartString)
    }
    return cart;
}

const saveToLocalStorageFromCart = (product, quantity) => {
    const cart = getProductToLocalStorage()
    cart[product] = quantity;

    const catToString = JSON.stringify(cart)
    console.log(cart)
    localStorage.setItem('cart', catToString)
}