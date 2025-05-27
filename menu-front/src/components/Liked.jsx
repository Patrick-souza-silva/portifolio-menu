import React, { useEffect, useState } from "react";

export default function LikeButton({ userId, productId }) {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [animate, setAnimate] = useState(false);

    async function fetchLikeData() {
        try {
            const res = await fetch(
                `http://localhost:4000/like?userId=${userId}&productId=${productId}`
            );
            if (!res.ok) {
                throw new Error("Erro ao buscar curtidas");
            }
            const data = await res.json();
            setLiked(data.likedByUser);
            setLikesCount(data.likesCount);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        fetchLikeData();
    }, [userId, productId]);

    async function likeProduct(userId, productId) {
        const res = await fetch("http://localhost:4000/like", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId, productId }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Erro desconhecido");
        }

        const data = await res.json();
        return data.message;
    }

    const handleLike = async () => {
        if (liked) return;

        setLoading(true);
        setError(null);
        setAnimate(true);

        try {
            await likeProduct(userId, productId);
            setLiked(true);
            setLikesCount((prev) => prev + 1);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            setTimeout(() => setAnimate(false), 600);
        }
    };

    return (
        <div style={{ display: "inline-block", textAlign: "center" }}>
            <button
                onClick={handleLike}
                disabled={loading || liked}
                aria-label={liked ? "Produto curtido" : "Curtir produto"}
                style={{
                    cursor: loading || liked ? "default" : "pointer",
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    outline: "none",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={liked ? "#c48f56" : "none"}
                    stroke="#c48f56"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        width: 48,
                        height: 48,
                        transition: "fill 0.3s ease",
                        filter: animate ? "drop-shadow(0 0 6px #c48f56)" : "none",
                        transform: animate ? "scale(1.3)" : "scale(1)",
                        transitionProperty: "fill, transform, filter",
                        transitionDuration: "0.3s",
                    }}
                >
                    <path d="M20.8 4.6c-1.4-1.3-3.6-1.3-5 0l-1.3 1.3-1.3-1.3c-1.4-1.3-3.6-1.3-5 0-1.4 1.3-1.4 3.5 0 4.8l6.3 6.2 6.3-6.2c1.4-1.3 1.4-3.5 0-4.8z" />
                </svg>
            </button>

            <div className="likes-count">
                {loading && <span>Carregando...</span>}
                {error && <span style={{ color: "red" }}>{error}</span>}
                {!loading && <span>{likesCount} curtidas</span>}
            </div>

            <style>
                {`
          .likes-count {
            font-size: 14px;
            margin-top: 6px;
            min-height: 20px;
          }

          @media (max-width: 600px) {
            .likes-count {
              font-size: 20px;
    font-family: "Source Sans Pro", sans-serif;

            }
          }
        `}
            </style>
        </div>
    );
}
