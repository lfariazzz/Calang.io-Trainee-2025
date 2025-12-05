export function YearFilter() {
  return (
    <div className="date-filter">
      <p className="filter-title">Ano de lançamento</p>

      <span>De</span>
      <input type="text" placeholder="2020" />

      <span>Até</span>
      <input type="text" placeholder="2024" />
    </div>
  );
}
