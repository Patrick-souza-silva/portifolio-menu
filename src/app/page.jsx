"use client";

import Header from "@/components/Header";
import SectionHeader from "@/components/SectionHeader";
import Nav from "@/components/Nav";
import Catalogo from "@/components/Catalogo";
import Product from "@/components/product";
import "../styles/page.css"
import { useEffect, useState } from "react";


export default function Home() {
  const [activeSection, setActiveSection] = useState("Cafés");

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
            imageUrl="https://dhg1h5j42swfq.cloudfront.net/2017/01/18142635/caf%C3%A9-expresso.png"
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://dhg1h5j42swfq.cloudfront.net/2017/01/18142635/caf%C3%A9-expresso.png"
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://dhg1h5j42swfq.cloudfront.net/2017/01/18142635/caf%C3%A9-expresso.png"
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://dhg1h5j42swfq.cloudfront.net/2017/01/18142635/caf%C3%A9-expresso.png"
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://dhg1h5j42swfq.cloudfront.net/2017/01/18142635/caf%C3%A9-expresso.png"
          />
          <Product
            title="Café Expresso"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://dhg1h5j42swfq.cloudfront.net/2017/01/18142635/caf%C3%A9-expresso.png"
          />
        </Catalogo>

        <Catalogo categoria="Bebidas Geladas">
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://blog.cybercook.com.br/wp-content/uploads/2022/07/bebidas-gelada.jpg"
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://blog.cybercook.com.br/wp-content/uploads/2022/07/bebidas-gelada.jpg"
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://blog.cybercook.com.br/wp-content/uploads/2022/07/bebidas-gelada.jpg"
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://blog.cybercook.com.br/wp-content/uploads/2022/07/bebidas-gelada.jpg"
          />
          <Product
            title="Suco natural"
            description="Um café forte e encorpado."
            value="R$ 4,45"
            imageUrl="https://blog.cybercook.com.br/wp-content/uploads/2022/07/bebidas-gelada.jpg"
          />
          <Product
            title="Suco natural"
            description="Bebida gelada, feita na hora."
            value="R$ 4,45"
            imageUrl="https://blog.cybercook.com.br/wp-content/uploads/2022/07/bebidas-gelada.jpg"
          />
        </Catalogo>

        <Catalogo categoria="Especialidades da Casa">
          <Product
            title="Capuccino Cremoso da Casa"
            description="Receita exclusiva com toque de canela e creme de leite."
            value="R$ 6,50"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/cappuccino-cremoso.jpg"
          />
          <Product
            title="Chocolate Quente Artesanal"
            description="Feito com chocolate belga e leite fresco, super cremoso."
            value="R$ 7,00"
            imageUrl="https://static.itdg.com.br/images/360-240/9b3bc0658166e9b659c4c8397ceabc49/357501-original.jpg"
          />
          <Product
            title="Latte com Baunilha"
            description="Café com leite vaporizado e essência natural de baunilha."
            value="R$ 6,90"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/latte-baunilha.jpg"
          />
          <Product
            title="Torta de Café com Nozes"
            description="Fatia de torta exclusiva feita com café coado e nozes caramelizadas."
            value="R$ 8,50"
            imageUrl="https://img.itdg.com.br/tdg/images/recipes/000/049/009/345193/345193_original.jpg"
          />
          <Product
            title="Pão Artesanal com Requeijão Caseiro"
            description="Pão fresquinho com requeijão feito na casa, servido quente."
            value="R$ 5,00"
            imageUrl="https://i.ytimg.com/vi/8goQOP2Jsm0/maxresdefault.jpg"
          />
          <Product
            title="Croissant de Amêndoas com Mel"
            description="Massa leve com recheio de amêndoas e toque de mel silvestre."
            value="R$ 7,90"
            imageUrl="https://img.cybercook.com.br/imagens/receitas/880/croissant-de-amendoas.jpg"
          />
        </Catalogo>

        <Catalogo categoria="Acompanhamentos">
          <Product
            title="Pão de Queijo"
            description="Clássico mineiro, crocante por fora e macio por dentro."
            value="R$ 2,50"
            imageUrl="https://img.cybercook.com.br/imagens/receitas/127/pao-de-queijo-mineiro.jpeg"
          />
          <Product
            title="Torradas com Geleia"
            description="Fatias crocantes com geleia artesanal de frutas vermelhas."
            value="R$ 4,00"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/torradas-com-geleia.jpg"
          />
          <Product
            title="Biscoito de Polvilho"
            description="Leve e crocante, perfeito para acompanhar o café."
            value="R$ 3,00"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3_7xk-YRkcz7e2BrgExqO9NKddYmGQg4Rw"
          />
          <Product
            title="Mini Tapioca"
            description="Com recheios variados: coco, queijo ou goiabada."
            value="R$ 3,50"
            imageUrl="https://claudia.abril.com.br/wp-content/uploads/2020/02/tapioca-com-coco.jpg"
          />
          <Product
            title="Queijo Minas Frescal"
            description="Fatias de queijo fresco e leve, direto da fazenda."
            value="R$ 6,00"
            imageUrl="https://img.itdg.com.br/tdg/images/recipes/000/003/478/34867/34867_original.jpg"
          />
          <Product
            title="Frutas da Estação"
            description="Porção mista de frutas frescas, servidas geladas."
            value="R$ 5,00"
            imageUrl="https://static.itdg.com.br/images/1200-630/e30a68f999fd18b24cbf196cc2379ee9/177473-original.jpg"
          />
        </Catalogo>

        <Catalogo categoria="Salgados">
          <Product
            title="Coxinha de Frango"
            description="Clássica e crocante, recheada com frango temperado."
            value="R$ 5,00"
            imageUrl="https://static.itdg.com.br/images/360-240/aae9d8a70563c6b1e6d21e1bfe1637f4/coxinha-de-frango.jpg"
          />
          <Product
            title="Empada de Palmito"
            description="Massa amanteigada recheada com palmito cremoso."
            value="R$ 5,50"
            imageUrl="https://www.receitasnestle.com.br/images/default-source/recipes/empada-de-palmito.jpg"
          />
          <Product
            title="Esfiha de Carne"
            description="Esfiha aberta com recheio suculento."
            value="R$ 4,00"
            imageUrl="https://receitinhas.com.br/wp-content/uploads/2022/12/esfiha-de-carne-1024x683.jpg"
          />
          <Product
            title="Quiche de Queijo"
            description="Tortinha salgada leve com toque francês."
            value="R$ 6,50"
            imageUrl="https://cdn0.tudoreceitas.com/pt/posts/3/2/9/quiche_de_queijo_1923_orig.jpg"
          />
          <Product
            title="Croissant de Presunto e Queijo"
            description="Folhado amanteigado com recheio cremoso."
            value="R$ 7,00"
            imageUrl="https://img.cybercook.com.br/receitas/792/croissant-de-presunto-e-queijo.jpeg"
          />
          <Product
            title="Pastel de Forno"
            description="Assado, com recheios variados. Escolha o seu!"
            value="R$ 4,50"
            imageUrl="https://www.receitasnestle.com.br/images/default-source/recipes/pastel-de-forno-de-carne.jpg"
          />
        </Catalogo>

        <Catalogo categoria="Doces">
          <Product
            title="Brownie de Chocolate com Nozes"
            description="Brownie caseiro, super macio, com pedaços de nozes e cobertura de chocolate."
            value="R$ 6,00"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/brownie-com-nozes-01.jpg"
          />
          <Product
            title="Bolo de Cenoura com Cobertura de Chocolate"
            description="Clássico e fofinho, com cobertura cremosa feita com cacau puro."
            value="R$ 5,50"
            imageUrl="https://img.cybercook.com.br/receitas/47/bolo-de-cenoura-com-cobertura-de-chocolate.jpeg"
          />
          <Product
            title="Torta de Limão"
            description="Base crocante, recheio suave e cobertura de merengue maçaricado."
            value="R$ 7,00"
            imageUrl="https://static.itdg.com.br/images/640-400/7b3985f2dfb1c41565ae1a8353886946/torta-de-limao.jpg"
          />
          <Product
            title="Brigadeiro Gourmet"
            description="Feito com chocolate belga e leite condensado premium, enrolado no granulado belga."
            value="R$ 2,50"
            imageUrl="https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/2e98384c6157c5064892b4328fcd91f8.webp"
          />
          <Product
            title="Cookie com Gotas de Chocolate"
            description="Cookie crocante por fora e macio por dentro, com gotas de chocolate meio amargo."
            value="R$ 4,00"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/cookie-com-gotas-de-chocolate.jpg"
          />
          <Product
            title="Pudim de Leite"
            description="Tradicional pudim cremoso com calda de caramelo caseira."
            value="R$ 6,50"
            imageUrl="https://img.cybercook.com.br/receitas/946/pudim-de-leite-condensado-2.jpeg"
          />
        </Catalogo>

        <Catalogo categoria="Combos">
          <Product
            title="Combo Café da Manhã"
            description="Café expresso, pão de queijo e suco natural. Ideal para começar o dia!"
            value="R$ 12,90"
            imageUrl="https://cdn.panelinha.com.br/receita/1632978500019-pao-de-queijo.jpg"
          />
          <Product
            title="Combo Café + Brownie"
            description="Café expresso com brownie de chocolate com nozes."
            value="R$ 9,90"
            imageUrl="https://www.daninoce.com.br/wp-content/uploads/2020/03/brownie-de-chocolate-tradicional-dani-noce-destaque.jpg"
          />
          <Product
            title="Combo Refrescante"
            description="Suco natural + salgado assado à sua escolha."
            value="R$ 10,00"
            imageUrl="https://blog.querocafe.com.br/wp-content/uploads/2022/11/Imagem-Blog-03-1024x683.jpg"
          />
          <Product
            title="Combo Doce"
            description="Bolo de cenoura + brigadeiro gourmet + cappuccino."
            value="R$ 13,50"
            imageUrl="https://img.itdg.com.br/images/recipes/000/180/532/218063/218063_original.jpg"
          />
          <Product
            title="Combo Almoço Leve"
            description="Sanduíche natural, suco e cookie de sobremesa."
            value="R$ 15,90"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-sanduiche-natural-0.jpg"
          />
          <Product
            title="Combo Kids"
            description="Mini pão de queijo, suco de laranja e docinho artesanal."
            value="R$ 8,90"
            imageUrl="https://comidinhasdochef.com/wp-content/uploads/2020/05/Receita-de-Mini-P%C3%A3o-de-Queijo.jpg"
          />
        </Catalogo>

        <Catalogo categoria="Kits & Presentes">
          <Product
            title="Kit Café Gourmet"
            description="Café especial moído, xícara personalizada e biscoitos artesanais."
            value="R$ 34,90"
            imageUrl="https://img.freepik.com/fotos-gratis/xicara-de-cafe-em-um-prato-com-graos-de-cafe-e-biscoitos_1220-4182.jpg"
          />
          <Product
            title="Box Doçura"
            description="Seleção com 4 doces artesanais e uma mensagem personalizada."
            value="R$ 29,90"
            imageUrl="https://s2.glbimg.com/sFAGovsbDcRCLByv8NHfNmy8pVI=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/Z/g/K0KfSmQrGtH66LyzPY0Q/2022-04-06-doce-de-presente.jpg"
          />
          <Product
            title="Kit Mini Degustação"
            description="Mini porções de cafés especiais com descrição de origem."
            value="R$ 22,90"
            imageUrl="https://static.wixstatic.com/media/7d4317_cfc63b367267476eaba90175ff1966ce~mv2.jpg"
          />
          <Product
            title="Cesta de Café da Manhã"
            description="Cesta com pães, frutas, bebidas e doces, perfeita para presentear."
            value="R$ 59,90"
            imageUrl="https://blog.carrefour.com.br/wp-content/uploads/2021/04/cesta-de-cafe-da-manha-1200x800.jpg"
          />
          <Product
            title="Caixa Premium Doces"
            description="Brigadeiros, bombons e trufas gourmet com embalagem de presente."
            value="R$ 39,90"
            imageUrl="https://images.tcdn.com.br/img/img_prod/1012570/caixa_com_15_doces_finos_personalizados_1941_1_3e2cf50ccf7982e5e9a23de244bfb873.jpg"
          />
          <Product
            title="Kit Amor em Café"
            description="Duo de cafés especiais, duas canecas e cartão personalizado."
            value="R$ 44,90"
            imageUrl="https://img.elo7.com.br/product/zoom/39B18F1/kit-cafe-namorado-pascoa-namoro.jpg"
          />
        </Catalogo>
        <footer>
          <h3>Desenvolvido por <a href="https://www.instagram.com/fortysoft/" target="_blank" rel="noopener noreferrer">Forty</a></h3>
        </footer>
      </main>
    </>
  );
}
