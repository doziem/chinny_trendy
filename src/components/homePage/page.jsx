'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { logging } from '../../../next.config';

const homeData = [
  {
    id: 1,
    img: '/baby.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
    quantity: 1,
  },
  {
    id: 2,
    img: '/woman.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
    quantity: 1,
  },
  {
    id: 3,
    img: '/contactImg.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
    quantity: 1,
  },

  {
    id: 4,
    img: '/back.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
    quantity: 1,
  },
  {
    id: 5,
    img: '/baby.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
    quantity: 1,
  },

  {
    id: 6,
    img: '/back.jpg',
    price: 200,
    rating: 189,
    title: 'The Royal Gown',
    quantity: 1,
  },
];

const PageSection = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleSelectedProduct = (item) => {
    let itemArr = [...selectedProduct];
    const existProd = selectedProduct?.find((prod) => prod?.id === item?.id);
    if (existProd) {
      return;
    } else {
      itemArr.push(item);
      setSelectedProduct(itemArr);
    }
  };

  return (
    <div>
      <div className={styles.collectionHeader}>
        <button className={styles.btn}>Clothing Collection</button>
        <div className={styles.select}>
          <select className={styles.mySelectArrow}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
      </div>
      <div className={styles.collectionInfo}>
        {homeData.map((data) => (
          <div
            key={data?.id}
            className={styles.description}
            onClick={() => handleSelectedProduct(data)}
          >
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
