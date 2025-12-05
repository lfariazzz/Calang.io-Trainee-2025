const categories = [
  "Ação",
  "Comédia",
  "Drama",
  "Terror",
  "Suspense",
  "Ficção Científica",
  "Romance",
  "Aventura"
];

export function CategoryFilter() {
  return (
    <div className="filter-category">
      <p className="filter-title">Gênero</p>

      {categories.map((cat) => {
        const id = cat.toLowerCase().replace(" ", "-");

        return (
          <div key={id}>
            <input type="checkbox" id={id} value={cat} />
            <label htmlFor={id}>{cat}</label>
          </div>
        );
      })}
    </div>
  );
}
