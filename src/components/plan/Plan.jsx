import styles from './Plan.module.scss'

const Plan = () => {
  return (
    <section className={styles.plan}>
      <img className={styles['plan__icon']} src="/public/images/icon-music.svg" alt="Icon Music" />
      <div className={styles['plan__info']}>
        <span className={styles['plan__info-name']}>Annual Plan</span>
        <span className={styles['plan__info-price']}>$59.99/year</span>
      </div>
      <a href="#" className={styles['plan__link']}>Change</a>
    </section>
  );
}

export default Plan;