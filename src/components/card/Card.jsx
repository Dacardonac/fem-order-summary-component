import Plan from '../plan/Plan';
import Button from '../button/Button';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <article className={styles.card}>
        <img
          className={styles['card__hero-img']}
          src="/images/illustration-hero.svg"
          alt="Illustration Hero"
        />
      <h1 className={styles['card__title']}>Order Summary</h1>
      <p className={styles['card__paragraph']}>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <Plan />
      <Button />
        <a
          className={styles['card__cancel']}
          href="#"
        >
          Cancel Order
        </a>
    </article>
  );
};
export default Card;
