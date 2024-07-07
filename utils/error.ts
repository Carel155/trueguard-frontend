import { ApiValidationError } from "@/services/api";
import { UseFormReturn } from "react-hook-form";
import { capitalizeFirstLetter } from "./string";

export const setFormErrorsFromApiResponse = (
  form: UseFormReturn<any, any, any>,
  validationErrors?: ApiValidationError[],
  mapper?: Record<string, string>
): void => {
  form.clearErrors();

  if (!validationErrors) {
    return;
  }

  for (const err of validationErrors) {
    let path = err.path;

    if (mapper && mapper[path]) {
      path = mapper[path];
    }

    form.setError(path, { message: translateJoiErrorMessage(err) });
  }
};

const translateJoiErrorMessage = (err: ApiValidationError) => {
  if (err.message.includes("is not allowed to be empty")) {
    return "Value is required";
  }

  if (err.message.includes("length must be at least")) {
    return err.message.replace(`"${err.path}"`, capitalizeFirstLetter(err.path));
  }

  return "Validation failed";
};
