export const Item = ({ product }) => {
  return (
    <div key={product.id} className="product-item">
      <img src={product.img} alt={product.name} />
      <div className="item-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
        </div>
        <div>
          <p>Precio: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      </div>
    </div>
  );
};
