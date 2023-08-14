function CardNumberInput({ label, placeholder }) {
  return (
    <div className="form__input-group">
      <label htmlFor="card-name" className="form__label">
        {`${label}`}
      </label>
      <input
        type="text"
        id="card-name"
        className="card__input card__input--cc-no"
        placeholder={placeholder}
      />
    </div>
  );
}

export default CardNumberInput;
