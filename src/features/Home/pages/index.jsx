import { Header } from '@/layout';
import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Header />
      Home Page
      <br />
    </div>
  );
};

export default HomePage;
