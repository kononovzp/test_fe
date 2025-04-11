import { CSSProperties } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type Props = {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  formStyle?: CSSProperties | undefined;
  onSubmit?: VoidFunction;
  id?: string;
};

export default function FormProvider({ children, onSubmit, methods, formStyle, id }: Props) {
  return (
    <Form {...methods}>
      <form style={formStyle} onSubmit={onSubmit} id={id}>
        {children}
      </form>
    </Form>
  );
}
