import {useState} from "react"
import { NameFilter } from "./NameFilter";
import { CategoryFilter } from "./CategoryFilter";
import { YearFilter } from "./YearFilter";
import "../../styles/catalogo.css";


interface FilterSectionProps {
  onFilter: (filters: {
    nome?: string;
    categorias?: string[];
    ano?: string;
  }) => void;
}

export function FilterSection({ onFilter }: FilterSectionProps) {
  const [nome, setNome] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [ano, setAno] = useState("");

  const handleFilter = () => {
    const filters: any = {};
    
    if (nome.trim()) filters.nome = nome;
    if (selectedCategories.length > 0) filters.categorias = selectedCategories;
    if (ano.trim()) filters.ano = ano;
    
    onFilter(filters);
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(c => c !== category));
    }
  };

  return (
    <section id="filter-section">
      <div className="filter-container">
        <p className="title">FILTRAR</p>

        <NameFilter nome={nome} onNomeChange={setNome} />
        <CategoryFilter 
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />
        <YearFilter ano={ano} onAnoChange={setAno} />
        
        <button className="filter-button" onClick={handleFilter}>
          Filtrar
        </button>
      </div>
    </section>
  );
}