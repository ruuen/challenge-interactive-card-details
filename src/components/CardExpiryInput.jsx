import { useIMask } from "react-imask";

function CardExpiryInput({
  monthOptions,
  yearOptions,
  label,
  handleInputChange,
  errors,
}) {
  const maskOptions = { mask: "00" };
  const monthRef = useIMask(maskOptions, {
    onAccept(value) {
      handleInputChange(monthOptions.id, value);
    },
  }).ref;
  const yearRef = useIMask(maskOptions, {
    onAccept(value) {
      handleInputChange(yearOptions.id, value);
    },
  }).ref;

  function getFieldError(id) {
    return errors.find((x) => x.id === id);
  }

  return (
    <div className="form__input-group form__input-group--expiry">
      <span className="form__label">{`${label} (${monthOptions.format}/${yearOptions.format})`}</span>
      <div className="form__input-wrapper">
        <label htmlFor={monthOptions.id} className="visually-hidden">
          {`Month in ${monthOptions.format.length} digits`}
        </label>
        <input
          ref={monthRef}
          type="text"
          id={monthOptions.id}
          className={`form__input form__input--expiry ${
            getFieldError(monthOptions.id) !== undefined
              ? "form__input--error"
              : ""
          }`}
          placeholder={monthOptions.format}
        />
        <label htmlFor={yearOptions.id} className="visually-hidden">
          {`Year in ${yearOptions.format.length} digits`}
        </label>
        <input
          ref={yearRef}
          type="text"
          id={yearOptions.id}
          className={`form__input form__input--expiry ${
            getFieldError(yearOptions.id) !== undefined
              ? "form__input--error"
              : ""
          }`}
          placeholder={yearOptions.format}
        />
      </div>
      {errors.length > 0 ? (
        <span className="form__error-message">{errors[0].message}</span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CardExpiryInput;
