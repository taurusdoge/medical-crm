import { useEffect, useState } from "react";
import { PHARMACIES } from "../../constants";
import { Pharmacy } from "../../types";
import { PharmacyCard } from "../PharmacyCard";
import "./styles.css";

export function PharmaciesList() {
  const [data, setData] = useState<Pharmacy[]>([]);
  useEffect(() => {
    setData(PHARMACIES);
  }, []);

  return (
    <ul className="pharmacies-list">
      {data &&
        data.map((pharmacy: Pharmacy) => (
          <PharmacyCard key={pharmacy.id} {...pharmacy} />
        ))}
    </ul>
  );
}
