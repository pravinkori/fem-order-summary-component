import "../css/App.css";
import illustration from "../assets/images/illustration-hero.svg";
import musicIcon from "../assets/images/icon-music.svg";

function Card() {
  return (
    <article className="card">
      <picture className="card__image" role="image">
        <img src={illustration} alt="illustration of a girl enjoying music" />
      </picture>

      <div className="card__content">
        <h1 className="card__title">Order Summary</h1>

        <p className="card__order-description">
          ou can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>

        <div className="flex-group">
          <img src={musicIcon} alt="mucis note icon" />
          <div className="card__plan-details">
            <p>Annual Plan</p>
            <span>$59.99/year</span>
          </div>
          <span>Change</span>
        </div>

        <button className="card__button">Proceed to Payment</button>

        <button className="card__cancel-button">Cancel Order</button>
      </div>
    </article>
  );
}

export default Card;
