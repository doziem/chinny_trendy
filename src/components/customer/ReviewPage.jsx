import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { RiDoubleQuotesR } from 'react-icons/ri';
import Button from '../Button';

const ReviewPage = () => {
  return (
    <div className={styles.review}>
      <button className={styles.btn}>Customer Review</button>
      <div className={styles.reviewInfo}>
        <div>
          <div className={styles.reviewText}>
            <p>
              <RiDoubleQuotesL className={styles.quote} />
            </p>
            <p className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              saepe maxime nihil vero ipsam quidem officia ullam? Ab, nemo eum?
              Animi, modi exercitationem. Facere ex accusamus amet soluta
              dignissimos delectus
            </p>
            <p>
              <RiDoubleQuotesR className={styles.quoteRight} />
            </p>
          </div>

          <div className={styles.profileContainer}>
            <Image
              src={'/back.jpg'}
              alt=""
              width={70}
              height={60}
              className={styles.avater}
            />
            <div className={styles.avaterName}>
              <p className={styles.text}>Chinny Trendy </p>
              <p>2 hours Ago</p>
            </div>
          </div>
        </div>
        <div className={styles.commentInfo}>
          <div className={styles.imgBackground}></div>
          <Image
            alt=""
            src={'/back.jpg'}
            width={450}
            height={500}
            className={styles.commentImg}
          />
        </div>
      </div>
      <div className={styles.contact}>
        <Image
          alt=""
          src={'/contactImg.jpg'}
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
    </div>
  );
};

export default ReviewPage;
