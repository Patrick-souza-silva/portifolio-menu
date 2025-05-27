import "../styles/product.css";
import LikeButton from "./Liked";

export default function Product({ title, description, imageUrl, value, onOpenModal, productId, userId}) {
    return (
        <div id="div-product">
            <div id="div-text" onClick={onOpenModal}>
                <h3>{title}</h3>
                <span>{description}</span>
                <h2>{value}</h2>
            </div>
            <div id="div-img">
                <img src={imageUrl} alt={title} />
            </div>
                <LikeButton userId={userId} productId={productId}/>
        </div>
    );
}