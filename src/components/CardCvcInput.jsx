function CardCvcInput({ label, placeholder }) {
  return (
    <div className="form__input-group">
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
