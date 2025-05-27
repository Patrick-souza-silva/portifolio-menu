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
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = generateUUID();
      localStorage.setItem("userId", userId);
    }
    return userId;
  }

  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  const userId = getUserId();

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
          />
        </Catalogo>
        <Modal product={modalProduct} onClose={() => setModalProduct(null)} />
        <footer>
          <h3>Desenvolvido por <a href="https://www.instagram.com/fortysoft/" target="_blank" rel="noopener noreferrer">Forty</a></h3>
        </footer>
      </main>
    </>
  );
}
