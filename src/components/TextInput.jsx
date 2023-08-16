import { useIMask } from "react-imask";

function TextInput({
  id,
  label,
  placeholder,
  maskString,
  maxLength,
  handleInputChange,
  errors,
}) {
  const hasError = errors !== undefined ? true : false;

  const { ref } = useIMask(
    { mask: maskString ? maskString : /^[a-zA-Z0-9]+$/g },
    {
      onAccept(value) {
        handleInputChange(id, value);
      },
    }
  );
  return (
    <div className={`form__input-group form__input-group--${id}`}>
      <label htmlFor={id} className="form__label">
        {`${label}`}
      </label>
      <div className="form__input-wrapper">
        <input
          ref={ref}
          type="text"
          maxLength={maxLength}
          id={id}
          className={`form__input form__input--${id} ${
            hasError ? "form__input--error" : ""
          }`}
          placeholder={placeholder}
        />
      </div>
      {hasError ? (
        <span className="form__error-message">{errors.message}</span>
      ) : (
        ""
      )}
    </div>
  );
}

export default TextInput;
