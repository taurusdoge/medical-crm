import { Pharmacy } from "../../types/Pharmacy";
import { getLetterBackgroundColor, getShortName } from "../../utils";
import "./styles.css";

export const PharmacyCard = ({
  name,
  location,
  employees,
  reports,
}: Pharmacy) => {
  return (
    <li className="pharmacy-card">
      <div className="pharmacy-card__row pharmacy-card__header">
        <h4
          className="pharmacy-card__capital-letter"
          style={{ background: getLetterBackgroundColor(name[0]) }}
        >
          {name[0].toUpperCase()}
        </h4>
        <div className="pharmacy-card__info">
          <div className="pharmacy-card__name">{getShortName(name, 19)}</div>
          <div className="pharmacy-card__location label-dim">
            {getShortName(location, 20)}
          </div>
        </div>
        <span className="pharmacy-card__settings">...</span>
      </div>
      <div className="pharmacy-card__row pharmacy-card__body">
        <div className="pharmacy-card__employees">
          <h5 className="pharmacy-card__employee-label label-dim">Employees</h5>
          <div className="pharmacy-card__employee">
            {employees?.length > 0 &&
              employees.map((e) => (
                <img
                  key={e.id}
                  src={e.imageUrl}
                  alt="employee profile picture"
                  className="pharmacy-card__employees-avatar"
                />
              ))}
          </div>
        </div>
        <div className="pharmacy-card__reports">
          <h5 className="pharmacy-card__reports-label">Reports</h5>
          <div className="pharmacy-card__reports-number">{reports || 0}</div>
        </div>
      </div>
    </li>
  );
};
