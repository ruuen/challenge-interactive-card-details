import { useState } from "react";
import { useIMask } from "react-imask";
import creditCardType from "credit-card-type";

const defaultCardMask = {
  mask: "0000{ }0000{ }0000{ }0000{ }000",
};

function CardNumberInput({ label, placeholder, handleInputChange, errors }) {
  const hasError = errors !== undefined ? true : false;
  const [cardMask, setCardMask] = useState(defaultCardMask);

  const { ref } = useIMask(cardMask, {
    onAccept(value) {
      // Normalise input
      const newValue = value.replace(/\D/g, "");

      const cardTypes = creditCardType(newValue);

      // If a card was matched, change the mask behavior of input to best match this card's format & length requirements
      if (cardTypes.length > 0) {
        const { gaps, lengths, niceType } = cardTypes[0];

        // Calc maximum available card length, including spaces
        const maxLengthWithSpaces = Math.max(...lengths) + gaps.length;
        // Calc updated array of card gap indexes to account for spaces
        const spaceIndexes = gaps.map((gap, index) => {
          return index === 0 ? gap : gap + index;
        });
        // Dynamic mask is regenerated and applied
        setCardMask({
          mask: generateCardMask(maxLengthWithSpaces, spaceIndexes),
        });
        handleInputChange(value, niceType);
        return;
      }

      // Else if no card was matched, use default mask behaviour
      setCardMask(defaultCardMask);
      handleInputChange(value, "Other");
      return;
    },
  });

  return (
    <div className="form__input-group form__input-group--number">
      <label htmlFor="name" className="form__label">
        {`${label}`}
      </label>
      <input
        ref={ref}
        type="text"
        id="name"
        className={`form__input form__input--cc-no ${
          errors ? "form__input--error" : ""
        }`}
        placeholder={placeholder}
      />
      {hasError ? (
        <span className="form__error-message">{`${errors.message}`}</span>
      ) : (
        <></>
      )}
    </div>
  );
}

/**
 * Returns a dynamic card mask string for IMaskJS when provided with a maximum card number length (including spaces) and an array of ints representing the index of each space in the card number
 * @param {int} maxLengthWithSpaces - Maximum length of the credit card number, inclusive of spaces. If using credit-card-type, this can be calced from the maximum length in lengths array + the length of the gap array from a CardType.
 * @param {number[]} spaceIndexes - An array of ints representing the index of where a space should exist between number blocks in the credit card number. If using credit-card-type, you can map the returned CardType gaps array into a new array & add the current map index to each value to account for spaces.
 */
function generateCardMask(maxLengthWithSpaces, spaceIndexes) {
  let dynamicMask = "";
  for (let i = 0; i < maxLengthWithSpaces; i++) {
    if (spaceIndexes.includes(i)) {
      dynamicMask += "{ }";
      continue;
    }

    dynamicMask += "0";
  }
  return dynamicMask;
}

export default CardNumberInput;
