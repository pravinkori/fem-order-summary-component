import styles from "./Card.module.css";
import illustration from "/src/assets/images/illustration-hero.svg";
import musicIcon from "/src/assets/images/icon-music.svg";

function Card({ orderDescription, planPrice, planType }) {
  return (
    <article className={styles.card} role="region" aria-label="Order Summary">
      <picture className={styles.card__image}>
        <img src={illustration} alt="illustration of a girl enjoying music" />
      </picture>

      <div className={styles.card__content}>
        <h1 className={styles.card__title}>Order Summary</h1>

        <p className={styles["card__order-description"]}>{orderDescription}</p>

        <div className={styles["flex-group"]}>
          <div className={styles.card__plan}>
            <img src={musicIcon} alt="music note icon" />
            <div>
              <p className={styles["card__plan-details"]}>{planType}</p>
              <p className={styles["card__plan-price"]}>${planPrice}/year</p>
            </div>
          </div>
          <span className={styles["card__plan-change"]}>Change</span>
        </div>

        <button className={styles.card__button}>Proceed to Payment</button>

        <button className={styles["card__cancel-button"]}>Cancel Order</button>
      </div>
    </article>
  );
}

export default Card;
