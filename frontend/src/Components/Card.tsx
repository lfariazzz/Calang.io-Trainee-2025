type CardProps = {
  rating: number | string;
  image: string;
  title: string;
  year: string | number;
  onClick?: () => void; 
};

export function Card({ rating, image, title, year, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <span className="rating">⭐ {rating}</span>
      <img src={image} alt={title} />
      <h3 className="title">{title}</h3>
      <p className="meta">{year}</p>
    </div>
  );
}
