import { PHARMACIES } from "../../../../common/constants";
import { Pharmacy } from "../../types";
import { PharmacyCard } from "../PharmacyCard";
import "./styles.css";

export function PharmaciesList() {
  return (
    <ul className="pharmacies-list">
      {PHARMACIES &&
        PHARMACIES.map((pharmacy: Pharmacy) => (
          <PharmacyCard key={pharmacy.id} {...pharmacy} />
        ))}
    </ul>
  );
}
