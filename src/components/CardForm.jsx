import "./CardForm.scss";
import TextInput from "./TextInput";
import CardNumberInput from "./CardNumberInput";
import CardExpiryInput from "./CardExpiryInput";
import Button from "./Button";

function CardForm({
  handleInputChange,
  handleCardNumberChange,
  handleFormSubmit,
  errorList,
}) {
  return (
    <div className="form-wrapper">
      <h2 className="visually-hidden">
        Enter your card information to finish adding a new card
      </h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <TextInput
          id="name"
          label="Cardholder Name"
          placeholder="e.g. Jane Appleseed"
          maskString={/^\D+$/g}
          maxLength="30"
          handleInputChange={handleInputChange}
          errors={errorList.find((x) => x.id === "name")}
        />
        <CardNumberInput
          id="number"
          label="Card Number"
          placeholder="e.g. 1234 5678 9123 0000"
          handleInputChange={handleCardNumberChange}
          errors={errorList.find((x) => x.id === "number")}
        />
        <div className="form__group-wrapper">
          <CardExpiryInput
            monthOptions={{ id: "expiryMonth", format: "MM" }}
            yearOptions={{ id: "expiryYear", format: "YY" }}
            label="Exp. Date"
            handleInputChange={handleInputChange}
            errors={errorList.filter(
              (x) => x.id === "expiryMonth" || x.id === "expiryYear"
            )}
          />
          <TextInput
            id="cvc"
            label="CVC"
            placeholder="e.g. 123"
            maskString="000"
            maxLength="3"
            handleInputChange={handleInputChange}
            errors={errorList.find((x) => x.id === "cvc")}
          />
        </div>
        <Button text="Confirm" />
      </form>
    </div>
  );
}

export default CardForm;
