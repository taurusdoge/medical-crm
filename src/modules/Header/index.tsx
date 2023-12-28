import { IconBell } from "../../common/components/Icons/IconBell";
import { IconChevron } from "../../common/components/Icons/IconChevron";
import { Search } from "../../common/components/Search";
import { CurrentUser } from "../../common/constants";
import "./styles.css";

export const Header = () => {
  const { firstName, lastName, imageUrl } = CurrentUser;

  return (
    <header className="header">
      <h1>Medical CRM</h1>
      <div className="header__actions">
        <Search />
        <section className="header__account">
          <button className="button-icon">
            <IconBell />
          </button>
          <div className="separator">|</div>
          <button className="account-menu-button button-icon">
            <img
              src={imageUrl}
              alt="Current user avatar"
              className="header__avatar"
            />
            <span className="header__username">
              {firstName} {lastName}
            </span>
            <IconChevron orientation="down" />
          </button>
        </section>
      </div>
    </header>
  );
};
