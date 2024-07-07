import React from "react";
import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea as ShadcnTextarea } from "../ui/textarea";

type TextareaProps = {
  name: string;
  placeholder: string;
  rows?: number;
  label?: string;
};

const Textarea = ({ name, label, placeholder, rows }: TextareaProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <ShadcnTextarea placeholder={placeholder} rows={rows ?? 4} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Textarea;
