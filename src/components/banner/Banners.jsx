import React from 'react';
import Button from '../Button';
import styles from './page.module.css';

const Banners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banneText}>
        <h1 className={styles.text}>
          The Best and Trending Fashion Collection
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam
          sapiente quaerat ipsum? Fugiat expedita deserunt sunt architecto earum
          facilis commodi consequatur ex, tempore natus dolorum, saepe eaque
          pariatur soluta?
        </p>
        <Button
          text="Shop Now"
          url={'/cart'}
          color={'#fff'}
          background={'#165baa'}
          width={'150px'}
        />
      </div>
      <div className={styles.bannerIcon}>
        <div className={styles.profileContainer}></div>
      </div>
    </div>
  );
};

export default Banners;
