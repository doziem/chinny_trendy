'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';

import styles from './page.module.css';
import Button from '../Button';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Academy',
    url: '/academy',
  },
  {
    id: 3,
    title: 'About',
    url: '/about',
  },

  {
    id: 4,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 5,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link href={'/'} className={styles.logo}>
          <Image src="/logo.jpg" width={40} height={40} />
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link href={link.url} key={link.id} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.shoppingContainer}>
        <div className={styles.cart}>
          <MdOutlineShoppingCart className={styles.cartIcon} />
        </div>
        <Button
          url={'/cart'}
          text="Shop Now"
          color={'#165baa'}
          background={'#fff'}
        />
      </div>
    </div>
  );
};

export default Navbar;
