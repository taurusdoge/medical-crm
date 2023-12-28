import { IconChevron } from "../../common/components/Icons/IconChevron";
import { IconGrid } from "../../common/components/Icons/IconGrid";
import "./styles.css";

export const Navigation = () => {
  return (
    <section className="navigation">
      <div className="navigation__section">
        <button className="button-link navigation__button">
          <span>
            <IconGrid />
            <h3>Database</h3>
          </span>
          <IconChevron orientation="down" />
        </button>
      </div>

      <div className="navigation__section">
        <button className="button-link navigation__button">
          <span>
            <IconGrid />
            <h3>Products</h3>
          </span>
          <IconChevron />
        </button>
        <nav id="nav-products" className="navigation__nav">
          <ul className="navigation__ul">
            <li className="navigation__navlink">Company Products</li>
            <li className="navigation__navlink">Competitor's Products</li>
            <li className="navigation__navlink">Archived Products</li>
            <li className="navigation__navlink">Unassembled Goods</li>
          </ul>
        </nav>
      </div>

      <div className="navigation__section navigation__section--active">
        <button className="button-link navigation__button">
          <span>
            <IconGrid />
            <h3>Reports</h3>
          </span>
          <IconChevron />
        </button>
        <nav id="nav-reports" className="navigation__nav">
          <ul className="navigation__ul">
            <li className="navigation__navlink navigation__navlink--active">
              Multiple Families
            </li>
            <li className="navigation__navlink">Product Family</li>
            <li className="navigation__navlink">Market Condition</li>
            <li className="navigation__navlink">Intellix (MPH)</li>
          </ul>
        </nav>
      </div>

      <div className="navigation__section">
        <button className="button-link navigation__button">
          <span>
            <IconGrid />
            <h3>Handbooks</h3>
          </span>
          <IconChevron orientation="down" />
        </button>
      </div>
    </section>
  );
};
