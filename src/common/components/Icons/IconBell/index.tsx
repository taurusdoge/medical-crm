import "./styles.css";

type IconBellProps = {
  unread?: boolean;
  count?: number;
};

export const IconBell = ({ unread, count }: IconBellProps) => (
  <i className="icon-bell">
    {unread && <span className="icon-bell__unread-counter">{count}</span>}
  </i>
);
