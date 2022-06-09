import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux"
import { PharmacyListComponent } from "../pharmacy/pharmacyCard";
import React, { useState } from "react";
import "./Home.css";
import GoogleMap from "../GoogleMap.js"

function Home() {
  let navigate = useNavigate()
  const [ilce, setilce] = useState("");
  const [tarih, setTarih] = useState(new Date().toISOString().split("T")[0]);

  const { pharmacys } = useSelector(state => state.pharmacy)
  const [filteredPharmacy, setFilteredPharmacy] = useState([])
  const [selectedPharmacy, setSelectedPharmacy] = useState({
    eczaneAdi: "",
    adres: "",
    ilce: "",
    tel: "",
    lat: 41.66661911873516,
    lng: 26.584489657789838,
    nobetTarih: ["2022-06-08", "2022-06-15"],
  });

  const setPharmacy = (pharm) => {
    setSelectedPharmacy(pharm);
  }



  const ilceler = [
    { value: "-", name: "İlçe Seçiniz" },
    { value: "Merkez", name: "Merkez" },
    { value: "Enez", name: "Enez" },
    { value: "Havsa", name: "Havsa" },
    { value: "İpsala", name: "İpsala" },
    { value: "Keşan", name: "Keşan" },
    { value: "Lalapaşa", name: "Lalapaşa" },
    { value: "Meriç", name: "Meriç" },
    { value: "Süloğlu", name: "Süloğlu" },
    { value: "Uzunköprü", name: "Uzunköprü" },
  ];

  const applyFilter = (data) => {
    setFilteredPharmacy(data.filter(
      (x) => (ilce === "" ? false : x.ilce === ilce) && x.nobetTarih.includes(tarih)))
  };

  return <div>
    <div className="header" ><h7>Enes Köseoğlu 1191602019</h7> <button onClick={() => navigate("/adminPanel")}>AdminPanel</button> </div>

    <div className="row body">

      <div className="home_column_left"><GoogleMap pharmacy={selectedPharmacy}></GoogleMap></div>
      <div className="home_column_right">
        <h1>Nöbetçi Eczane</h1>
        <select
          className="ilce-select"
          name="İlçe"
          placeholder="İlçe"
          value={ilce}
          onChange={(e) => setilce(e.target.value)}>
          {ilceler.map((x, index) => (
            <option value={x.value} key={index}>
              {x.name}
            </option>
          ))}
        </select>
        <input
          type="date"
          className="ilce-select"
          name="date"
          placeholder="Tarih"
          value={tarih}
          onChange={(e) => setTarih(e.target.value)}
        />
        <button onClick={() => applyFilter(pharmacys)}>Filtrele</button>
        {filteredPharmacy.length === 0 ? (
          <div></div>
        ) : (
          <div style={{ width: "400px", height: "500px", overflow: "hidden", overflowY: "scroll" }}>
            {filteredPharmacy.map((pharmacy) => <PharmacyListComponent pharm={pharmacy} setPharmacy={setPharmacy}>
            </PharmacyListComponent>)}
          </div>
        )}
      </div>
    </div>

  </div>
}
export default Home