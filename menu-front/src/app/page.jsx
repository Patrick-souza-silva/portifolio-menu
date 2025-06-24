"use client";

import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import Nav from "@/components/Nav";
import Catalogo from "@/components/Catalogo";
import Product from "@/components/product";
import "../styles/page.css"
import { useEffect, useState } from "react";
import suafoto from "@/assets/suafoto.png";
import Modal from "@/components/Modal";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Cafés");
  const [modalProduct, setModalProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "Cafés"; // Default section

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section.id; // Update to the section currently in view
        }
      });

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function getUserId() {
    if (typeof window !== "undefined") {
      let userId = localStorage.getItem("userId");
      if (!userId) {
        userId = generateUUID();
        localStorage.setItem("userId", userId);
      }
      return userId;
    }

    return null; // ou algum fallback
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  const userId = getUserId();

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function sendOrderWhatsApp() {
    if (cart.length === 0) return;
    const items = cart.map((item, idx) => `${idx + 1}. ${item.title} - ${item.value}`).join('\n');
    const msg = encodeURIComponent(`esse é meu pedido\n${items}`);
    window.open(`https://wa.me/5546999011726?text=${msg}`, "_blank");
  }

  return (
    <>
      <Header />
      <SectionHeader />
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Catalogo categoria="Cafés">
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s'}
            productId="1"
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Café Expresso",
              value: "R$ 4,45"
            })}
          />

          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s'}
            productId='2'
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Café Expresso",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s'}
            productId='3'
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Café Expresso",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s'}
            productId='4'
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Café Expresso",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s'}
            productId='5'
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Café Expresso",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s'}
            productId='6'
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1LGFciwIJLAVwHIFVz2pck3nsEyXRoYT56g&s',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Café Expresso",
              value: "R$ 4,45"
            })}
          />
        </Catalogo>

        <Catalogo categoria="Bebidas Geladas">
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg'}
            productId={'7'}
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Suco natural",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg'}
            productId={'8'}
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Suco natural",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg'}
            productId={'9'}
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Suco natural",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg'}
            productId={'10'}
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Suco natural",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl={'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg'}
            productId={'11'}
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Suco natural",
              value: "R$ 4,45"
            })}
          />
          <Product
            title="Suco natural"
            description="Bebida gelada, feita na hora."
            value="R$ 4,45"
            imageUrl={'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg'}
            productId={'12'}
            userId={userId}
            onOpenModal={() => setModalProduct({
              title: "Café Expresso",
              imageUrl: 'https://images.ctfassets.net/qfxflpv0atz9/sxSX7Ew5uMtc36IyEgCEF/131ddcebbc2530676c3547dce678f360/20220201144535-sucosnaturais-header-fita-scaled.jpg',
              ingredients: ["Café moído", "Água quente", "Açúcar opcional"],
            })}
            onAddToCart={() => addToCart({
              title: "Suco natural",
              value: "R$ 4,45"
            })}
          />
        </Catalogo>
        <Modal product={modalProduct} onClose={() => setModalProduct(null)} />
        <button
          onClick={sendOrderWhatsApp}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: "#25d366",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            padding: "16px 28px",
            fontSize: "1.1rem",
            fontWeight: "bold",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            cursor: cart.length === 0 ? "not-allowed" : "pointer",
            opacity: cart.length === 0 ? 0.6 : 1,
            zIndex: 2000,
          }}
          disabled={cart.length === 0}
        >
          Enviar pedido ({cart.length})
        </button>
        {cart.length > 0 && (
          <div style={{
            position: "fixed",
            bottom: 80,
            right: 24,
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 8,
            padding: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            maxWidth: 260,
            zIndex: 2000,
          }}>
            <strong>Carrinho:</strong>
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {cart.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 4 }}>
                  {item.title} - {item.value}
                  <button
                    onClick={() => removeFromCart(idx)}
                    style={{
                      marginLeft: 8,
                      color: "#c00",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 14,
                    }}
                  >x</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <footer>
          <h3>Desenvolvido por <a href="https://www.instagram.com/fortysoft/" target="_blank" rel="noopener noreferrer">Forty</a></h3>
        </footer>
      </main>
    </>
  );
}
