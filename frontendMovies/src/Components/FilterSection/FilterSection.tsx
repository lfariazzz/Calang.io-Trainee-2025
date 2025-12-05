import { NameFilter } from "./NameFilter";
import { CategoryFilter } from "./CategoryFilter";
import { YearFilter } from "./YearFilter";

export function FilterSection() {
  return (
    <section id="filter-section">
      <div className="filter-container">
        <p className="title">FILTRAR</p>

        <NameFilter />
        <CategoryFilter />
        <YearFilter />
      </div>
    </section>
  );
}
