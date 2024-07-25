import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription
} from "@/components/ui/form";
import React from "react";
import { Control } from "react-hook-form";
import { formSchema } from "./ContactForm";
import { z } from "zod";

type customFieldType = {
  control: Control<z.infer<typeof formSchema>> | undefined;
  name: keyof z.infer<typeof formSchema>;
  render: (props: { field: any }) => React.ReactNode;
  className?: string;
  formLabel?: string;
  formDescription?: string;
};

export default function CustomField({
  control,
  render,
  name,
  formLabel,
  formDescription,
  className = "",
}: customFieldType) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel>{formLabel}</FormLabel>}
          {formDescription && <FormDescription>{formDescription}</FormDescription>}
          <FormControl>{render({ field })}</FormControl>
        </FormItem>
      )}
    />
  );
}
