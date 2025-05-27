import "../styles/nav.css";

export default function Nav({ activeSection, setActiveSection }) {
  const categories = [
    "Cafés",
    "Bebidas Geladas",
    "Especialidades da Casa",
    "Acompanhamentos",
    "Salgados",
    "Doces",
    "Combos",
    "Kits & Presentes",
  ];

  return (
    <nav>
      {categories.map((category) => (
        <a
          key={category}
          href={`#${category}`}
          className={activeSection === category ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection(category); // Define a seção ativa ao clicar
            document.getElementById(category)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {category}
        </a>
      ))}
    </nav>
  );
}