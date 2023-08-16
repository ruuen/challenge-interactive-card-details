import { initialFormState } from "./App";

export function formReducer(form, action) {
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
