import "./ConfirmationView.scss";
import iconComplete from "../assets/images/icon-complete.svg";
import Button from "./Button";

function ConfirmationView() {
  return (
    <div className="confirmation">
      <img
        src={iconComplete}
        alt=""
        className="confirmation__icon"
        aria-hidden
      />
      <div className="confirmation__message-wrapper">
        <h2 className="confirmation__heading">Thank you!</h2>
        <p className="confirmation__message">We've added your card details.</p>
      </div>
      <Button
        text="Continue"
        handleClick={() => {
          console.log("Continuing");
        }}
      />
    </div>
  );
}

export default ConfirmationView;
