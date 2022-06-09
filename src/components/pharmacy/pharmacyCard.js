import React from "react";

export const PharmacyListComponent = (props) => {
    const pharmacy=props.pharm;
    const {setPharmacy} = props;
  return (
    <div class="card" style={{backgroundColor: "white"}}>
  <h4 className="card-header">{pharmacy.eczaneAdi}</h4>
  <div class="card-body">
    <h5 class="card-title">{pharmacy.adres}</h5>
    <p class="card-text">{pharmacy.tel}</p>
    <button  onClick={()=>setPharmacy(pharmacy)}>
         Haritada Göster
        </button>
  </div>
</div>
  );
};

