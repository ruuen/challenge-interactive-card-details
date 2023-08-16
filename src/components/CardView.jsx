import "./CardView.scss";
import imgCardFront from "../assets/images/bg-card-front.png";
import imgCardBack from "../assets/images/bg-card-back.png";
import imgCardLogo from "../assets/images/card-logo.svg";

function CardView({ cardholderName, cardNumber, cardExpiry, cardCvc }) {
  const cardholderNameOrPlaceholder =
    cardholderName !== "" ? cardholderName : "Jane Appleseed";
  const cardNumberOrPlaceholder =
    cardNumber !== "" ? cardNumber : "0000 0000 0000 0000";
  const monthOrPlaceholder = cardExpiry.month !== "" ? cardExpiry.month : "00";
  const yearOrPlaceholder = cardExpiry.year !== "" ? cardExpiry.year : "00";
  const cvcOrPlaceholder = cardCvc !== "" ? cardCvc : "000";

  return (
    <aside
      className="card-group"
      aria-label="An illustration of the front and back of a payment card."
    >
      <div className="card card__front" aria-hidden>
        <img
          src={imgCardFront}
          alt="Illustration of the front of a payment card."
          className="card__background"
        />
        <img
          src={imgCardLogo}
          alt="Two circles of different colours and size next to each other horizontally"
          className="card__logo"
        />
        <span className="card__text card__cc-no">
          {`${cardNumberOrPlaceholder}`}
        </span>
        <span className="card__text card__name">{`${cardholderNameOrPlaceholder}`}</span>
        <span className="card__text card__expiry">{`${monthOrPlaceholder}/${yearOrPlaceholder}`}</span>
      </div>
      <div className="card card__back" aria-hidden>
        <img
          src={imgCardBack}
          alt="Illustration of the back of a payment card."
          className="card__background"
        />
        <span className="card__text card__cvc">{cvcOrPlaceholder}</span>
      </div>
    </aside>
  );
}

export default CardView;
