import "./index.scss";

function ItemProduct({ srcImage, name, price }) {
  return (
    <div className="item-product">
      <img src={srcImage} alt={name} className="item-product__image" />
      <div className="item-product__name">{name}</div>
      <div className="item-product__price">${price}</div>
    </div>
  );
}

export default ItemProduct;
