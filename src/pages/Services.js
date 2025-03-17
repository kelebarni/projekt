import React, { useState } from "react";
import "../styles.css";
import kayakingImg from "../assets/kayaking.jpg";
import raftingImg from "../assets/rafting.jpg";

function Services() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Köszönjük a jelentkezésed!");
  };

  return (
    <div className="page-container">
      <h1>Szolgáltatásaink</h1>
      <div className="card-container">
        <div className="card light-blue-bg rounded-card card-spacing">
          <img
            src={raftingImg}
            alt="Rafting kaland"
            className="card-img square-img"
          />
          <h2>🚣‍♂️ Rafting (WW2-3)</h2>
          <p>3 órás biztonságos kaland profi vezetőkkel.</p>
          <p>
            <strong>Ár: 70€</strong>
          </p>
        </div>
        <div className="card light-blue-bg rounded-card card-spacing">
          <img
            src={kayakingImg}
            alt="Vadvízi kajakozás"
            className="card-img square-img"
          />
          <h2>🛶 Vadvízi kajakozás (WW1-3)</h2>
          <p>4 órás extrém élmény a bátrabbaknak.</p>
          <p>
            <strong>Ár: 100€</strong>
          </p>
        </div>
      </div>

      <h2>Foglalás</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Név:
          <input type="text" name="name" className="rounded-input" required />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" className="rounded-input" required />
        </label>
        <label>
          Válassz túrát:
          <select name="tour" className="rounded-input" required>
            <option value="Rafting">Rafting (WW2-3)</option>
            <option value="Vadvízi Kajakozás">Vadvízi kajakozás (WW1-3)</option>
          </select>
        </label>
        <label>
          Résztvevők száma:
          <input
            type="number"
            name="participants"
            className="rounded-input"
            min="1"
            required
          />
        </label>
        <button type="submit" className="booking-button rounded-button">
          Jelentkezés
        </button>
      </form>
      {message && <p className="thank-you">{message}</p>}

      <h2>Fizetési információk</h2>
      <p>A foglalás csak az utalás beérkezése után lesz érvényes.</p>
      <p>
        <strong>Banki adatok:</strong>
      </p>
      <p>Számlatulajdonos: Soca Rafting Kaland Kft.</p>
      <p>IBAN: SI56 1234 5678 9012 345</p>
      <p>BIC (SWIFT): SOCASL2X</p>
      <p>Közlemény: [Név] - [Túra típusa] - [Dátum]</p>
    </div>
  );
}

export default Services;
