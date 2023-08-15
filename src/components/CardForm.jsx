import "./CardForm.scss";
import TextInput from "./TextInput";
import CardNumberInput from "./CardNumberInput";
import CardExpiryInput from "./CardExpiryInput";
import CardCvcInput from "./CardCvcInput";
import Button from "./Button";

function CardForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="form-wrapper">
      <h2 className="visually-hidden">
        Enter your card information to finish adding a new card
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <TextInput label="Cardholder Name" placeholder="e.g. Jane Appleseed" />
        <CardNumberInput
          label="Card Number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="form__group-wrapper">
          <CardExpiryInput label="Exp. Date" monthFormat="MM" yearFormat="YY" />
          <CardCvcInput label="CVC" placeholder="e.g. 123" />
        </div>
        <Button
          text="Confirm"
          handleClick={() => {
            console.log("Confirmed");
          }}
        />
      </form>
    </div>
  );
}

export default CardForm;
