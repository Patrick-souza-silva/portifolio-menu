import "../styles/product.css";

export default function Product({ title, description, imageUrl, value}) {
    return (
        <div id="div-product">
            <div id="div-text">
                <h3>{title}</h3>
                <span>{description}</span>
                <h2>{value}</h2>
            </div>
            <div id="div-img">
                <img src={imageUrl} alt={title} />
            </div>
        </div>
    );
}