import { InputHTMLAttributes } from "react";

type InputProps = {
  value?: string;
  setValue: (value: string) => void;
};

export const Input = ({
  value,
  setValue,
  className,
  ...props
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <input
        type="text"
        className={className || ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </>
  );
};
