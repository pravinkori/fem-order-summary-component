/* eslint-disable react/prop-types */
import "../css/App.css";
import illustration from "../assets/images/illustration-hero.svg";
import musicIcon from "../assets/images/icon-music.svg";

function Card(props) {
  return (
    <article className="card" role="region" aria-label="Order Summary">
      <picture className="card__image">
        <img src={illustration} alt="illustration of a girl enjoying music" />
      </picture>

      <div className="card__content">
        <h1 className="card__title">Order Summary</h1>

        <p className="card__order-description">{props.orderDescription}</p>

        <div className="flex-group">
          <div className="card__plan">
            <img src={musicIcon} alt="music note icon" />
            <div>
              <p className="card__plan-details">{props.planType}</p>
              <p className="card__plan-price">${props.planPrice}/year</p>
            </div>
          </div>
          <span className="card__plan-change">Change</span>
        </div>

        <button className="card__button">Proceed to Payment</button>

        <button className="card__cancel-button">Cancel Order</button>
      </div>
    </article>
  );
}

export default Card;
