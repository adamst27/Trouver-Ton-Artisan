import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FicheArtisans = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Je récupère les données JSON
      try {
        const response = await fetch("/api/data.json");
        const jsonData = await response.json();
        if (id) {
          const artisan = jsonData.find((artisan) => artisan.id === id);
          setData(artisan);
        } else {
          setData(jsonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  const [formData, setFormData] = useState({
    // La state initiale de mon formulaire
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    // On récupère les valeurs du formulaire
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // Envoyons l'email puisque je n'a pas un serveur je vais seulment faire un output dans la console
    e.preventDefault();
    // On récupère les valeurs du formulaire
    console.log("Sending email:", formData);
    // Reset form
    setFormData({
      name: "",
      subject: "",
      message: "",
    });
  };
  if (!data) {
    return null;
  }
  return (
    <section className="fiche-specifique">
      <div className="fiche-artisan">
        <h1>Fiche de {data.name}</h1>
        <div className="rating">
          {/* Display stars for rating */}
          {[...Array(parseInt(data.note))].map((_, index) => (
            <span key={index} className="star">
              &#9733;
            </span>
          ))}
        </div>
        <p>Nom: {data.name} </p>
        <p>Spécialité: {data.specialty}</p>
        <p>Localisation: {data.location}</p>
        <div className="about">
          <h2>A propos</h2>
          <p>{data.about}</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Contactez-nous</h2>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Objet"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
        {/* Render website link if available */}
        {data.website && (
          <a href={data.website} className="website-link">
            Visitez notre site web
          </a>
        )}
      </div>
    </section>
  );
};

export default FicheArtisans;
