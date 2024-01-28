import React from 'react';
import styles from './page.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.fashion}>
          <h2>Fashion</h2>
          <ul>
            <li></li>
          </ul>
        </div>
        <div className={styles.about}>
          <h2>About Us</h2>
        </div>
        <div className={styles.contact}>
          <h2>Contact Us</h2>
        </div>
      </div>
      <p>©2023 Chinny Trendy. All rights reserved.</p>
    </div>
  );
};

export default Footer;
