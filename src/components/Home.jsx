import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { commentTrouverSecondCol, commentTrouverFirstCol } from "../constants";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const [artisanMois, setArtisanMois] = useState([]);
  useEffect(() => {
    // Je détecte si un élément est visible pour faire une animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
  }, []);
  useEffect(() => {
    // Je récupère les données JSON
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Je sort les données JSON pour obtenir les 3 artisan de mois en se basant sur leur notes
    const sortedData = data.sort(
      (a, b) => parseFloat(b.note) - parseFloat(a.note)
    );

    setArtisanMois(sortedData.slice(0, 3));
    console.log(artisanMois);
  }, [data]);

  return (
    <>
      <main className="main-section hidden">
        <div className="content">
          <h1>Trouver un artisan selon tes besoins</h1>
          <p>
            Trouver des artisans en fonction de tes besoins et de tes
            disponibilités dans la region d’Auvergne Rhône-Alpes
          </p>
        </div>

        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
              fill="#f1f8fc"
            ></path>
          </svg>
        </div>
      </main>
      <section className="etapes">
        <div className="circle-top"></div>
        <h2>
          Comment trouver <br /> mon artisan?
        </h2>
        <div className="etapes-content">
          <div className="col">
            {commentTrouverFirstCol.map((el) => (
              <div className={`etape hidden`} key={el.id}>
                <FontAwesomeIcon icon={el.icon} />
                <div className="text">
                  <h3>
                    {el.id}. {el.title}
                  </h3>
                  <p>{el.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="col">
            {commentTrouverSecondCol.map((el) => (
              <div className={`etape hidden`} key={el.id}>
                <FontAwesomeIcon icon={el.icon} />
                <div className="text">
                  <h3>
                    {el.id}. {el.title}
                  </h3>
                  <p>{el.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="col">
            <div className="image image-column">
              <img
                decoding="async"
                className="hidden"
                src="/comment.jpeg"
                alt="étapes-illustration"
              />
            </div>
          </div>
        </div>
        <article>
          <h2 className="heading-text">Nos 3 Artisans du mois</h2>
          <div className="artisan-mois">
            <div className="circle"></div>
            {artisanMois.map((artisan) => (
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
        </article>
      </section>
      <section className="cta hidden">
        <div className="cta-content">
          <h5 className="cta-title">
            La liste de tous les artisans de l’administration.
          </h5>

          <Link to="/nos-artisans" className="cta-button">
            La liste
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
