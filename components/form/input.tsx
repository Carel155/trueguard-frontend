import React from "react";
import { useFormContext } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input as ShadcnInput } from "../ui/input";

type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  optional?: boolean;
  className?: string;
  label?: string;
};

const Input = ({ name, label, placeholder, className, type, optional }: InputProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className="flex text-white">
              {label} {optional && <p className="text-xs pl-1 text-gray-400"> - optional</p>}
            </FormLabel>
          )}
          <FormControl>
            <ShadcnInput placeholder={placeholder} type={type} className={className} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Input;
