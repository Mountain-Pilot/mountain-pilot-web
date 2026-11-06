function Products() {
  const catalog = {
    products: [
      {
        name: "Shirt",
        brand: "Nike",
        price: 60,
        rating: 4.5,
        numReviews: 10,
      },
      {
        name: "Pants",
        brand: "Adidas",
        price: 80,
        rating: 4.7,
        numReviews: 15,
      },
    ],
  };

  return (
    <div className="content">
      <ul className="products">
        {catalog.products.map((product) => (
          <li key={product.name}>
            <div className="product">
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating} Stars ({product.numReviews} Reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;