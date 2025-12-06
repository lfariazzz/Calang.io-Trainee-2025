interface YearFilterProps {
  ano: string;
  onAnoChange: (ano: string) => void;
}

export function YearFilter({ ano, onAnoChange }: YearFilterProps) {
  return (
    <div className="date-filter">
      <p className="filter-title">Ano de lançamento</p>
      
      <div className="year-input-container">
        <span>Ano</span>
        <input 
          type="text" 
          placeholder="2020" 
          value={ano}
          onChange={(e) => {
            // Permite apenas números
            const value = e.target.value.replace(/\D/g, '');
            onAnoChange(value);
          }}
          maxLength={4}
        />
      </div>
    </div>
  );
}