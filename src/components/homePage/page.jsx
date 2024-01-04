import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const homeData = [
  {
    id: 1,
    img: '/baby.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
  },
  {
    id: 2,
    img: '/woman.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
  },
  {
    id: 3,
    img: '/contactImg.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
  },

  {
    id: 4,
    img: '/back.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
  },
  {
    id: 5,
    img: '/baby.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
  },

  {
    id: 6,
    img: '/back.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
  },
];

const PageSection = () => {
  return (
    <div>
      <div className={styles.collectionHeader}>
        <button className={styles.btn}>Clothing Collection</button>
        {/* <select className={styles.filter}>
          <option value="men">men</option>
          <option value="female">female</option>
        </select> */}
        <div className={styles.select}>
          <select className={styles.mySelectArrow}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
      </div>
      <div className={styles.collectionInfo}>
        {homeData.map((data) => (
          <div key={data?.id} className={styles.description}>
            <Image
              src={data?.img}
              width={400}
              height={460}
              className={styles.img}
              alt={data?.title}
            />
            <p className={styles.title}>{data?.title}</p>
            <p className={styles.price}>Price: {data?.price} </p>
            <div className={styles.review}>
              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '30px', height: '30px' }}
                />
                {data?.rating} Review (5.7)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSection;
