import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

const Button = ({ text, url, color, background, width }) => {
  return (
    <Link href={url}>
      <button
        style={{ color, backgroundColor: background, width: width }}
        className={styles.container}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
