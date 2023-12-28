import { Button } from "../../common/components";
import { IconPlus } from "../../common/components/Icons/IconPlus";
import { PharmaciesList } from "./components/PharmaciesList";

export const Content = () => {
  return (
    <article className="main-view">
      <section className="main-view__header">
        <h2>Reports</h2>
        <Button type="primary">
          <IconPlus />
          Create
        </Button>
      </section>
      <section className="main-view__subheader">
        <h3>Multiple Families</h3>
        <div className="main-view__display-options">
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
