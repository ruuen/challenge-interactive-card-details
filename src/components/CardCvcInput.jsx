function CardCvcInput({ label, placeholder }) {
  return (
    <div className="form__input-group form__input-group--cvc">
      <label htmlFor="cvc" className="form__label">
        {`${label}`}
      </label>
      <input
        type="text"
        id="cvc"
        className="form__input form__input--cvc"
        placeholder={placeholder}
      />
    </div>
  );
}

export default CardCvcInput;
