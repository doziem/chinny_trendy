'use client';

import styles from './page.module.css';
import Image from 'next/image';
// import Button from '@/components/Button';
import { FaRegStarHalfStroke, FaLocationDot } from 'react-icons/fa6';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'leaflet/dist/leaflet.css';
import Map from '@/components/map';

const position = [51.505, -0.09];
// import Map from '@/components/map';

// import { Icon, divIcon, point } from 'leaflet';
const data = [
  {
    id: 1,
    img: '/baby.jpg',
  },
  {
    id: 2,
    img: '/woman.jpg',
  },
  {
    id: 3,
    img: '/contactImg.jpg',
  },

  {
    id: 4,
    img: '/back.jpg',
  },
  {
    id: 5,
    img: '/baby.jpg',
  },

  {
    id: 6,
    img: '/back.jpg',
  },
];

// const markers = [
//   {
//     geocode: [48.86, 2.3522],
//     popUp: 'Hello, I am pop up 1',
//   },
//   {
//     geocode: [48.85, 2.3522],
//     popUp: 'Hello, I am pop up 2',
//   },
//   {
//     geocode: [48.855, 2.34],
//     popUp: 'Hello, I am pop up 3',
//   },
// ];
const Academy = () => {
  return (
    <div className={styles?.container}>
      <div className={styles?.infoHeader}>
        <h1 className={styles?.haeder}>Chinny Trending Fashion Academy</h1>
        <p className={styles?.location}>Fashion Design School in Lagos </p>
        <p className={styles?.time}> Open today until 5:00 PM</p>
        <button className={styles?.btn}>Call 09031120758 </button>
        <Image
          src={'/contactImg.jpg'}
          width={1200}
          height={800}
          alt="Academy"
        />
      </div>
      <div className={styles?.testimonyBar}>
        <div className={styles?.bar} />
        <h3>TESTIMONIALS</h3>
      </div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <div className={styles?.testimony}>
          <div className={styles?.testimonyContainer}>
            <div className={styles?.rating}>
              <div className={styles?.ratingStar}>
                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />
                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  11 months ago
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <div className={styles?.testimonyTest}>
              <p>
                {
                  '"Precious Apparel Fashion Academy is a top notch fashion Academy in Nigeria delivering quality tutorials, fashion illustrations, fashion tips to both her physical and online students. In PAFA upgrade is a must, the Academy is the best for anyone who has the passion, zeal for fashion with or without a prior knowledge."'
                }
              </p>
              <p className={styles?.reviewName}>- Onyinyechi I</p>
            </div>
          </div>
        </div>

        <div className={styles?.testimony}>
          <div className={styles?.testimonyContainer}>
            <div className={styles?.rating}>
              <div className={styles?.ratingStar}>
                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />
                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  11 months ago
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <div className={styles?.testimonyTest}>
              <p>
                {
                  '"Precious Apparel Fashion Academy is a top notch fashion Academy in Nigeria delivering quality tutorials, fashion illustrations, fashion tips to both her physical and online students. In PAFA upgrade is a must, the Academy is the best for anyone who has the passion, zeal for fashion with or without a prior knowledge."'
                }
              </p>
              <p className={styles?.reviewName}>- Onyinyechi I</p>
            </div>
          </div>
        </div>

        <div className={styles?.testimony}>
          <div className={styles?.testimonyContainer}>
            <div className={styles?.rating}>
              <div className={styles?.ratingStar}>
                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />

                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />
                <FaRegStarHalfStroke
                  style={{ color: '#f8dc09', width: '20px', height: '20px' }}
                />
                <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                  11 months ago
                </p>
              </div>
              <BsThreeDotsVertical />
            </div>
            <div className={styles?.testimonyTest}>
              <p>
                {
                  '"Precious Apparel Fashion Academy is a top notch fashion Academy in Nigeria delivering quality tutorials, fashion illustrations, fashion tips to both her physical and online students. In PAFA upgrade is a must, the Academy is the best for anyone who has the passion, zeal for fashion with or without a prior knowledge."'
                }
              </p>
              <p className={styles?.reviewName}>- Onyinyechi I</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles?.galary}>
        <div className="review">
          <div className={styles?.moreBtn}>
            <h6>WRITE A REVIEW</h6>
            <h6>READ MORE</h6>
          </div>
          <div className={styles?.galaryBar}>
            <div className={styles?.bar} />

            <h3>Galary</h3>
          </div>
        </div>
        <div className={styles?.galaryImage}>
          {data?.map((item) => (
            <Image
              src={item?.img}
              alt="galagry"
              className={styles?.image}
              width={350}
              height={350}
              key={item?.id}
            />
          ))}
        </div>
      </div>
      <div className={styles?.testimonyBar}>
        <div className={styles?.bar} />
        <h3>Contact</h3>
      </div>
      <div className={styles?.contact}>
        <Map />

        <div className={styles?.contactInfo}>
          <div className={styles?.contactDetails}>
            <h6>Contact</h6>
            <button className={styles?.contactBtn}>Call Now</button>
            <p>09031120758</p>
            <p>09031120758</p>
          </div>
          <div className={styles?.contactDetails}>
            <h6>Address</h6>
            <button className={styles?.contactBtn}>Get Direction</button>
            <p>3rd avenue 31 Road Opposite D Close Gowon estate</p>
            <p>By Upper Chime</p>
            <p>New Haven</p>
            <p>Enugu 1000675</p>
            <p>Nigeria</p>
          </div>
          <div className={styles?.contactDetails}>
            <h6>Business Hour</h6>
            <p>Mon - Saturday</p>

            <p> 9:00 AM – 5:00 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
