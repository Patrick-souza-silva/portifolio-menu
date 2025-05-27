export default function Modal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        animation: "fadeInOverlay 0.3s ease forwards",
        padding: "15px", // para evitar que grude nas bordas em telas pequenas
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          padding: "30px 25px 25px 25px",
          borderRadius: "12px",
          maxWidth: "520px",
          width: "100%",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          position: "relative",
          animation: "slideUp 0.3s ease forwards",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#333",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            background: "transparent",
            border: "none",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#888",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#c48f56")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
        >
          &times;
        </button>

        <h2
          style={{
            marginBottom: "15px",
            fontWeight: "700",
            fontSize: "1.8rem",
            color: "#c48f56",
          }}
        >
          {product.title}
        </h2>

        <img
          src={product.imageUrl}
          alt={product.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "20px",
            objectFit: "cover",
            maxHeight: "300px",
          }}
        />

        <h3
          style={{
            marginBottom: "10px",
            fontWeight: "600",
            fontSize: "1.3rem",
            borderBottom: "2px solid #c48f56",
            paddingBottom: "6px",
          }}
        >
          Ingredientes
        </h3>

        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            lineHeight: "1.6",
            fontSize: "1rem",
          }}
        >
          {product.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <style>
        {`
          @keyframes fadeInOverlay {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @media (max-width: 768px) {
            .modal-content {
              max-width: 90% !important;
              width: 90% !important;
              padding: 25px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
}
