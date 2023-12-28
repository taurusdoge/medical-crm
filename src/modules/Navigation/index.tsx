import { IconChevron } from "../../common/components/Icons/IconChevron";
import "./styles.css";

export const Navigation = () => {
  return (
    <section className="navigation">
      <IconChevron /> Database
      <nav id="nav-database">
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
        </ul>
      </nav>
      <h3>Products</h3>
      <nav id="nav-products">
        <ul>
          <li>Company Products</li>
          <li>Competitor's Products</li>
          <li>Archived Products</li>
          <li>Unassembled Goods</li>
        </ul>
      </nav>
      <h3>Reports</h3>
      <nav id="nav-reports">
        <ul>
          <li>Multiple Families</li>
          <li>Product Family</li>
          <li>Market Condition</li>
          <li>Intellix (MPH)</li>
        </ul>
      </nav>
      <h3>Handbooks</h3>
      <nav id="handbooks">
        <ul>
          <li>Lorem</li>
          <li>Ipsum</li>
        </ul>
      </nav>
    </section>
  );
};
