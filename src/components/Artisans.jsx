import { useState, useEffect } from "react";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Artisans = () => {
  const [artisans, setArtisans] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");
  const search = queryParams.get("search");
  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data.json");
        const jsonData = await response.json();
        if (search) {
          // filtrer les artisanns en cherchant dans les noms, spécialités et ville.
          const filteredArtisans = jsonData.filter(
            (artisan) =>
              artisan.name.toLowerCase().includes(search.toLowerCase()) || // nom complet
              artisan.specialty.toLowerCase().includes(search.toLowerCase()) || // spécialité
              artisan.location.toLowerCase().includes(search.toLowerCase()) // ville
          );
          setArtisans(filteredArtisans);
        } else if (category) {
          const filteredArtisans = jsonData.filter(
            (artisan) => artisan.category === category
          );
          setArtisans(filteredArtisans);
        } else {
          setArtisans(jsonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // appel de la fonction
  }, [location.search]);

  return (
    <section className="nos-artisans">
      <div className="col">
        <h2>Nos Artisans</h2>
        <p>Voir notre liste des artisans très expertiencés</p>
      </div>
      {artisans.length < 1 && (
        <div className="no-artisans">
          <p>Cette recherche ne renvoie aucun résultat</p>
        </div>
      )}
      <div className="artisans-liste">
        {artisans.map((artisan) => (
          <Card
            name={artisan.name}
            key={artisan.id}
            note={artisan.note}
            id={artisan.id}
            specialty={artisan.specialty}
            location={artisan.location}
          />
        ))}
      </div>
    </section>
  );
};

export default Artisans;
