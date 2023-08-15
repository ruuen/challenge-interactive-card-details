import "./CardView.scss";
import imgCardFront from "../assets/images/bg-card-front.png";
import imgCardBack from "../assets/images/bg-card-back.png";
import imgCardLogo from "../assets/images/card-logo.svg";

function CardView() {
  return (
    <aside className="card-group">
      <div className="card card__front">
        <img src={imgCardFront} alt="" className="card__background" />
        <img src={imgCardLogo} alt="" className="card__logo" />
        <span className="card__text card__cc-no">0000 0000 0000 0000</span>
        <span className="card__text card__name">Jane Appleseed</span>
        <span className="card__text card__expiry">00/00</span>
      </div>
      <div className="card card__back">
        <img src={imgCardBack} alt="" className="card__background" />
        <span className="card__text card__cvc">000</span>
      </div>
    </aside>
  );
}

export default CardView;
