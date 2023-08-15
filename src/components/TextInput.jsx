function TextInput({ label, placeholder }) {
  return (
    <div className="form__input-group form__input-group--name">
      <label htmlFor="card-name" className="form__label">
        {`${label}`}
      </label>
      <input
        type="text"
        id="card-name"
        className="form__input form__input--name"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
