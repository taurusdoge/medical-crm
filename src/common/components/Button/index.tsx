import "./styles.css";

type ButtonProps = {
  className?: string;
  type: "primary" | "secondary" | "default" | "warning" | "danger";
  children: React.ReactNode;
};

export const Button = ({ className, type, children }: ButtonProps) => {
  return (
    <button className={`button ${className || ""} ${type || ""}`}>
      {children}
    </button>
  );
};
