import "./styles.css";

type IconChevronProps = {
  orientation?: "up" | "down";
};

export const IconChevron = ({ orientation = "up" }: IconChevronProps) => {
  return (
    <i
      className={`${
        orientation === "down" ? "icon-chevron-down" : "icon-chevron-up"
      }`}
    />
  );
};
