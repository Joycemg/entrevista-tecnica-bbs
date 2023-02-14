export const Item = ({ product }) => {
  return (
    <div key={product.id} className="product-item">
      <img src={product.img} alt={product.name} />
      <div className="item-info">
        <div className="item-text">
          <h3>{product.name}</h3>
          <p>{product.id}</p>
        </div>
        <div>
          <p>
            Precio: <span className="price">${product.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
