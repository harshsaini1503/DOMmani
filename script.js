let products = [];

document.getElementById('add-product').addEventListener('click', () => {
    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseInt(document.getElementById('product-rating').value);

    if (name && price >= 0 && rating >= 1 && rating <= 5) {
        products.push({ name, price, rating });
        renderGraph();
        clearInputs();
    } else {
        alert('Please enter valid product information.');
    }
});

document.getElementById('sort-price').addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    renderGraph();
});

document.getElementById('sort-rating').addEventListener('click', () => {
    products.sort((a, b) => a.rating - b.rating);
    renderGraph();
});

function renderGraph() {
    const container = document.getElementById('graph-container');
    container.innerHTML = '';

    products.forEach(product => {
        const bar = document.createElement('div');
        bar.className = 'bar';

        const name = document.createElement('span');
        name.textContent = product.name;

        const priceBar = document.createElement('div');
        priceBar.className = 'price-bar';
        priceBar.style.width = `${product.price * 10}px`;
        priceBar.textContent = `$${product.price}`;

        const ratingBar = document.createElement('div');
        ratingBar.className = 'rating-bar';
        ratingBar.style.width = `${product.rating * 50}px`;
        ratingBar.textContent = `${product.rating}/5`;

        bar.appendChild(name);
        bar.appendChild(priceBar);
        bar.appendChild(ratingBar);

        container.appendChild(bar);
    });
}

function clearInputs() {
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-rating').value = '';
}
