import React from "react";
import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input as ShadcnInput } from "../ui/input";
import { Textarea } from "../ui/textarea";

type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  label?: string;
};

const Input = ({ name, label, placeholder, type }: InputProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <ShadcnInput placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Input;
