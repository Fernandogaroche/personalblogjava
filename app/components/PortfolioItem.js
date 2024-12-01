import Image from "next/image";

export default function PortfolioItem({ title, description, image }) {
  return (
    <div className="portfolio-item">
      <Image src={image} alt={title} width={300} height={200} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}