import { Button } from "../../common/components";
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
          <button>Grid</button>
          <button>List</button>
        </div>
      </section>
      <section className="main-view__content">
        <PharmaciesList />
      </section>
    </article>
  );
};
