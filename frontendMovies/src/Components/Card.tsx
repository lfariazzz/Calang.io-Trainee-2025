type CardProps = {
  rating: number | string;
  image: string;
  title: string;
  year: string | number;
};

export function Card({ rating, image, title, year }: CardProps) {
  return (
    <div className="card">
      <span className="rating">⭐ {rating}</span>
      <img src={image} alt={title} />
      <h3 className="title">{title}</h3>
      <p className="meta">{year}</p>
    </div>
  );
}
