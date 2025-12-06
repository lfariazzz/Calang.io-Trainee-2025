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

interface CategoryFilterProps {
  selectedCategories: string[];
  onCategoryChange: (category: string, checked: boolean) => void;
}

export function CategoryFilter({ 
  selectedCategories, 
  onCategoryChange 
}: CategoryFilterProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    onCategoryChange(value, checked);
  };

  return (
    <div className="filter-category">
      <p className="filter-title">Gênero</p>

      {categories.map((cat) => {
        const id = cat.toLowerCase().replace(" ", "-");
        const isChecked = selectedCategories.includes(cat);

        return (
          <div key={id} className="checkbox-item">
            <input 
              type="checkbox" 
              id={id} 
              value={cat}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={id}>{cat}</label>
          </div>
        );
      })}
    </div>
  );
}