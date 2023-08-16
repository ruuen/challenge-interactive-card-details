import { useReducer, useState } from "react";
import "./App.scss";
import CardForm from "./components/CardForm";
import CardView from "./components/CardView";
import ConfirmationView from "./components/ConfirmationView";

function formReducer(form, action) {
  switch (action.type) {
    case "update_field":
      return {
        ...form,
        data: {
          ...form.data,
          [action.id]: action.value,
        },
      };
    case "update_field_number":
      return {
        ...form,
        data: {
          ...form.data,
          number: action.number,
          type: action.cardType,
        },
      };
    case "throw_field_errors":
      return {
        ...form,
        errors: [...action.errors],
      };
    case "reset":
      return initialFormState;
    default:
      throw Error(`Unknown reducer action: ${action.type}`);
  }
}

const initialFormState = {
  data: {
    name: "",
    number: "",
    type: "Other",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  },
  errors: [],
};

function App() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [isFormValid, setIsFormValid] = useState(false);

  function handleInputChange(id, value) {
    dispatch({
      type: "update_field",
      id: id,
      value: value,
    });
  }

  function handleCardNumberChange(number, cardType) {
    dispatch({
      type: "update_field_number",
      number: number,
      cardType: cardType,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const errorList = [];
    for (const [id, value] of Object.entries(formState.data)) {
      // Ignore computed card type
      if (id === "type") continue;

      // Check if all fields have a value
      if (value === "") {
        errorList.push({ id: id, message: "Can't be blank" });
        continue;
      }

      const onlyNumbers = /^[0-9]+$/g;
      if (id !== "number" && id !== "name" && !onlyNumbers.test(value)) {
        errorList.push({ id: id, message: "Wrong format, numbers only" });
        continue;
      }

      // If field is credit card number, check only digits and spaces
      const onlyNumbersAndSpaces = /^[0-9\s]+$/g;
      if (id === "number" && !onlyNumbersAndSpaces.test(value)) {
        errorList.push({ id: id, message: "Wrong format, numbers only" });
        continue;
      }
    }

    if (errorList.length > 0) {
      dispatch({
        type: "throw_field_errors",
        errors: errorList,
      });
      return;
    }

    setIsFormValid(true);
  }

  function handleReset() {
    dispatch({
      type: "reset",
    });
    setIsFormValid(false);
  }

  return (
    <main className="page-container">
      <h1 className="visually-hidden">Add New Credit Card</h1>
      <CardView
        cardholderName={formState.data.name}
        cardNumber={formState.data.number}
        cardExpiry={{
          month: formState.data.expiryMonth,
          year: formState.data.expiryYear,
        }}
        cardCvc={formState.data.cvc}
      />
      {isFormValid ? (
        <ConfirmationView handleReset={handleReset} />
      ) : (
        <CardForm
          handleInputChange={handleInputChange}
          handleCardNumberChange={handleCardNumberChange}
          handleFormSubmit={handleFormSubmit}
          errorList={formState.errors}
        />
      )}
    </main>
  );
}

export default App;
