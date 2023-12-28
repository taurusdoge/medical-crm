import { Search } from "../../common/components/Search";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>Medical CRM</h1>
      <div className="header__actions">
        <Search />
        <section className="account">
          <button className="notifications">
            <i className="bell-icon" />
          </button>
          <span className="separator">|</span>
          <button className="account-menu">
            <img src="" alt="user avatar" />
            Mary Magelan
            <i className="shevron-down" />
          </button>
        </section>
      </div>
    </header>
  );
};
