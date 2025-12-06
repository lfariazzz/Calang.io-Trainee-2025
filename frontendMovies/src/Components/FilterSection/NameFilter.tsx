interface NameFilterProps {
  nome: string;
  onNomeChange: (nome: string) => void;
}

export function NameFilter({ nome, onNomeChange }: NameFilterProps) {
  return (
    <div className="search-name">
      <p className="filter-title">Nome</p>
      <input 
        type="text" 
        placeholder="Pesquisar por nome" 
        value={nome}
        onChange={(e) => onNomeChange(e.target.value)}
      />
    </div>
  );
}