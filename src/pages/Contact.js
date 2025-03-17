import React, { useState } from "react";
import "../styles.css";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Hamarosan felvesszük veled a kapcsolatot!");
  };

  return (
    <div className="page-container">
      <h1 className="section-title">Kapcsolat</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Név:
          <input type="text" name="name" className="rounded-input" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" className="rounded-input" required />
        </label>
        <label>
          Üzenet:
          <textarea
            name="message"
            className="rounded-input"
            required
          ></textarea>
        </label>
        <button type="submit" className="rounded-button">
          Küldés
        </button>
      </form>
      {message && <p className="thank-you">{message}</p>}

      <h1 className="section-title">Így juthatsz el hozzánk</h1>
      <p>
        <strong>Cím:</strong> Bovec Industrijska cona 4a, 5230 Bovec, Szlovénia
      </p>
      <p>Őrzött parkoló áll a vendégek rendelkezésére.</p>
      <p>
        <a
          href="https://www.google.com/maps?q=Bovec+Industrijska+cona+4a,+5230+Bovec,+Szlov%C3%A9nia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Maps
        </a>{" "}
        |
        <a
          href="https://www.waze.com/ul/Bovec+Industrijska+cona+4a,+5230+Bovec,+Szlov%C3%A9nia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Waze
        </a>
      </p>
    </div>
  );
}

export default Contact;
