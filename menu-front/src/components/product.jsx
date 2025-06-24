import "../styles/product.css";

export default function Product({ title, description, imageUrl, value, onOpenModal, onAddToCart }) {
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
            <button
                onClick={onAddToCart}
                style={{
                    marginTop: 8,
                    background: "#c48f56",
                    color: "#fff",
                    border: "none",
                    width:'90%',
                    borderRadius: 6,
                    padding: "8px 16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                Adicionar ao Carrinho
            </button>
        </div>
    );
}