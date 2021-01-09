import React from "react";

import styles from "./index.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.connect}>
      <h3 className={styles.title}>Connecteer met NM Style</h3>
      <iframe
        className={styles.likeButton}
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNm.Style.Welden%2F&width=300&layout=standard&action=like&size=small&share=false&height=35&appId"
        width="320"
        height="35"
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
      <p className={styles.contact}>
        Stedelos 2<br />
        9700 Oudenaarde
      </p>
      <span className={styles.contact}>0470 00 00 00</span>
      <span className={styles.contact}>meirlaen_natalie@telenet.be</span>
    </div>

    <p className={styles.credits}>
      Website door <a href="https://robinwijnant.me">Robin Wijnant</a>
      <br />
      &copy; 2021 NM-Style. Alle rechten voorbehouden.
    </p>

    <div className={styles.right}>
      <h4 className={styles.title}>Openingsuren</h4>
      <ul className={styles.openingHours}>
        <li>Maandag: Gesloten</li>
        <li>Maandag: Gesloten</li>
        <li>Maandag: Gesloten</li>
        <li>Maandag: Gesloten</li>
        <li>Maandag: Gesloten</li>
        <li>Maandag: Gesloten</li>
        <li>Maandag: Gesloten</li>
      </ul>
    </div>
  </footer>
);

export default Footer;
