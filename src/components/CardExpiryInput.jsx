function CardExpiryInput({ label, monthFormat, yearFormat }) {
  return (
    <div className="form__input-group">
      <span className="form__label-heading">{`${label} (${monthFormat}/${yearFormat})`}</span>
      <label htmlFor="expiry-month" className="visually-hidden">
        {`Month in ${monthFormat.length} digits`}
      </label>
      <input
        type="text"
        id="expiry-month"
        className="form__input form__input--expiry"
        placeholder={monthFormat}
      />
      <label htmlFor="expiry-year" className="visually-hidden">
        {`Year in ${yearFormat.length} digits`}
      </label>
      <input
        type="text"
        id="expiry-year"
        className="form__input form__input--expiry"
        placeholder={yearFormat}
      />
    </div>
  );
}

export default CardExpiryInput;
