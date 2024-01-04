import Image from 'next/image';
import styles from './page.module.css';
import Banners from '@/components/banner/Banners';
import PageSection from '@/components/homePage/page';
import ReviewPage from '@/components/customer/ReviewPage';

export default function Home() {
  return (
    <div className={styles.container}>
      <Banners />
      <PageSection />
      <ReviewPage />
    </div>
  );
}
