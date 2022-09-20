const Product = ({ product }) => {
    return (
        <li className="productCard">
            <div className="product">
                <img key={product.title} className="img" src={product.image} alt={product.title}></img>
                <span className="title">{product.title}</span>
            </div>
        </li>
    );
};

export default Product;