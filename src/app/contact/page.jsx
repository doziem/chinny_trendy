import Map from '@/components/map';
import React from 'react';
import styles from './page.module.css';
// import ReviewPage from '@/components/customer/ReviewPage';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Image
        src={'/contactImg.jpg'}
        alt=""
        width={250}
        height={450}
        className={styles.contactImg}
      />

      <div className={styles.contactInfo}>
        <button className={styles.contactHeader}>Contact Us</button>

        <form
          className={styles.form}
          // onSubmit={handleSubmit}
        >
          <label htmlFor="#name">Full Name</label>
          <input
            className={styles.input}
            placeholder="Enter contact name"
            type={'text'}
            id="name"
            name="name"
          />

          <label htmlFor="#email">Email Address </label>
          <input
            className={styles.input}
            placeholder="Enter Email Address"
            type={'text'}
            id="name"
            name="name"
          />

          <label htmlFor="#address"> Short Info</label>
          <textarea
            className={styles.textarea}
            placeholder="Enter Your Comment"
            type={'text'}
            id="short_info"
            name="short_info"
          />
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className={styles.contactBtn} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
