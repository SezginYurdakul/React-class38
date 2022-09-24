const Product = ({ product: { title, image } }) => {
    return (
        <li className="productCard">
            <div className="product">
                <img key={title} className="img" src={image} alt={title}></img>
                <span className="title">{title}</span>
            </div>
        </li>
    );
};

export default Product;