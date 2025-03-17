import React from "react";
import "../styles.css";
import kayakingImg from "../assets/kayaking.jpg";
import raftingImg from "../assets/rafting.jpg";

function Home() {
  return (
    <div className="page-container">
      <h1 className="section-title">
        Üdvözlünk a Soca Rafting Kaland oldalán!
      </h1>
      <p>
        Fedezd fel Szlovénia legizgalmasabb vadvízi kalandjait és élvezd a
        természet szépségét.
      </p>

      <h1 className="section-title">Miért válaszd a Soca Rafting Kalandot?</h1>
      <ul>
        <li>
          🌊 <strong>Profi vezetők:</strong> Tapasztalt és képzett
          túravezetőkkel garantáljuk a biztonságos és izgalmas élményt.
        </li>
        <li>
          🚣‍♂️ <strong>Különböző nehézségi szintek:</strong> Kezdők és haladók
          számára egyaránt kínálunk rafting és kajakozás túrákat.
        </li>
        <li>
          🏞 <strong>Lélegzetelállító környezet:</strong> A Soca folyó
          kristálytiszta vize és a gyönyörű hegyvidéki táj felejthetetlen
          élményt nyújt.
        </li>
        <li>
          ✔ <strong>Teljes felszerelés biztosítva:</strong> Minden túrához
          biztosítunk mentőmellényt, sisakot és egyéb szükséges felszerelést.
        </li>
      </ul>

      <h1 className="section-title">Élmények, amik várnak rád</h1>
      <div className="experience-gallery center-content">
        <div className="experience-item">
          <img
            src={raftingImg}
            alt="Rafting kaland"
            className="experience-img square-img"
          />
          <p className="experience-label">🚣‍♂️ Rafting</p>
        </div>
        <div className="experience-item">
          <img
            src={kayakingImg}
            alt="Vadvízi kajakozás"
            className="experience-img square-img"
          />
          <p className="experience-label">🛶 Vadvízi kajakozás</p>
        </div>
      </div>

      <h1 className="section-title">Csatlakozz hozzánk!</h1>
      <p>
        Ne maradj le a szezon legjobb élményeiről! Foglald le most a helyed és
        készülj fel egy felejthetetlen kalandra.
      </p>
      <a href="/services" className="booking-button">
        Túrák megtekintése
      </a>
    </div>
  );
}

export default Home;
