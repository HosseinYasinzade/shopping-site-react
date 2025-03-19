import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";

interface CardData {
  id: string;
  title: string;
  description: string;
  brand: string;
  price: number;
  off: string;
}

const CardsList = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cards")
      .then((response) => {
        setCards(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center p-10 md:p-30">
      {cards.length === 0 && (
        <p className="text-5xl font-bold text-gray-500">No item</p>
      )}

      <div className="flex flex-wrap gap-4 justify-between w-full mt-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            brand={card.brand}
            title={card.title}
            description={card.description}
            price={card.price}
            off={card.off}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
