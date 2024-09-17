HTML: Contains input fields for the product name, price, and rating, along with buttons to add products and sort them.
CSS: Styles the graph bars and input fields. The bar width is dynamically set based on the product's price and rating values.
JavaScript:
The products array stores the product details.
The renderGraph function dynamically generates bars for each product, updating the display every time a product is added or sorted.
The sort-price and sort-rating buttons allow sorting the products based on price or rating.
The bar width for price is calculated as price * 10 pixels, and for rating as rating * 50 pixels.
