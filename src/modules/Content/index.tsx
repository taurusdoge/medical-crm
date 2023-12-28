import { Button } from "../../common/components";
import { IconGrid } from "../../common/components/Icons/IconGrid";
import { IconMenu } from "../../common/components/Icons/IconMenu";
import { IconPlus } from "../../common/components/Icons/IconPlus";
import { PharmaciesList } from "./components/PharmaciesList";
import "./styles.css";

export const Content = () => {
  return (
    <article className="main-view">
      <section className="main-view__header">
        <h2 className="main-view__header__caption">Reports</h2>
        <Button type="primary">
          <IconPlus />
          Create
        </Button>
      </section>
      <section className="main-view__subheader">
        <p className="main-view__subheader__caption">Multiple Families</p>
        <div className="main-view__subheader__display-options">
          <button className="main-view__display-option button-icon">
            <IconGrid />
          </button>
          <button className="main-view__display-option button-icon">
            <IconMenu />
          </button>
        </div>
      </section>
      <section className="main-view__content">
        <PharmaciesList />
      </section>
    </article>
  );
};
