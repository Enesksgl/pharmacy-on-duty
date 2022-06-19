import React from "react";
import "./pharmacyCard.css"
export const PharmacyListComponent = (props) => {
  const pharmacy = props.pharm;
  const { setPharmacy } = props;
  return (
    <div className="pharmacy_div">
      <span className="pharmacy_name" >{pharmacy.eczaneAdi}</span>
  
        <span className="pharmacy_adres" >{pharmacy.adres}</span>
        <span  className="pharmacy_tel">{pharmacy.tel}</span>
        <button className="pharmacy_btn" onClick={() => setPharmacy(pharmacy)}>
          Haritada Göster
        </button>
     
    </div>
  );
};

