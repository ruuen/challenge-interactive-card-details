function CardNumberInput({ label, placeholder }) {
  return (
    <div className="form__input-group form__input-group--number">
      <label htmlFor="card-name" className="form__label">
        {`${label}`}
      </label>
      <input
        type="text"
        id="card-name"
        className="form__input form__input--cc-no"
        placeholder={placeholder}
      />
    </div>
  );
}

export default CardNumberInput;
