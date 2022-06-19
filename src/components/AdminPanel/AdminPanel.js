import { useDispatch, useSelector } from "react-redux"
import { LoginComponent } from "../Login/LoginComponent"
import React, { useState } from "react";
import { login } from "../../stores/auth";
import { addDuty, addPharmacy } from "../../stores/pharmacy";
import "./AdminPanel.css";


function AdminPanel() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [pharmacyId, setPharmacyId] = useState(1);
  const [tarih, setTarih] = useState(new Date().toISOString().split("T")[0]);
  const [userData, setuserData] = useState({
    userName: "",
    password: "",
  });
  const [pharmacy, setPharmacy] = useState({
    id: Math.random(),
    eczaneAdi: "",
    adres: "",
    ilce: "",
    tel: "",
    lat: "",
    lng: "",
    nobetTarih: [],
  });

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


  const { pharmacys } = useSelector(state => state.pharmacy)


  const onLoginClick = () => {
    if (userData.userName === "enes" && userData.password === "1234") {
      dispatch(login(true))
    } else {
      alert("Kullanıcı Adı veya Şifre Hatalı.");
    }
  };
  const onChangeUserHandler = (e) => {
    setuserData((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  const onChangePharmacyHandler = (e) => {
    setPharmacy((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });


  };
  const onClickAddPharmacy = () => {

    dispatch(addPharmacy({ pharmacy }));
    alert("Yeni eczane eklendi.");

  };
  const onClickAddDuty = (id, tarih) => {

    dispatch(addDuty({ id: id, tarih: tarih }));
    console.log(pharmacys)
  };

  return <div>
    {user === true ? (<div>
      <h1 style={{ textAlign: "center", userSelect: "none" }}>Yönetim Paneli</h1>
      <div className="admin_body">
        <div className="admin_panel_card">
          <div class="card-header">
            <h2>Eczane Ekle</h2>
          </div>

          <input
            className="input"
            name="eczaneAdi"
            placeholder="Eczane Adı"
            value={pharmacy.eczaneAdi}
            onChange={(e) => onChangePharmacyHandler(e)}
          />
          <input
            className="input"
            name="adres"
            placeholder="Adres"
            value={pharmacy.adres}
            onChange={(e) => onChangePharmacyHandler(e)}
          />
          <select
            className="input"
            name="İlçe"
            placeholder="İlçe"
            value={pharmacy.ilce}
            onChange={(e) => {setPharmacy({...pharmacy, ilce: e.target.value})}}>
            {ilceler.map((x, index) => (
              <option value={x.value} key={index}>
                {x.name}
              </option>
            ))}
          </select>
          <input
            className="input"
            name="tel"
            placeholder="Telefon Numarası"
            value={pharmacy.tel}
            onChange={(e) => onChangePharmacyHandler(e)}
          />
          <input
            className="input"
            name="lat"
            placeholder="Enlem"
            value={pharmacy.lat}
            onChange={(e) => onChangePharmacyHandler(e)}
          />
          <input

            className="input"
            name="lng"
            placeholder="Boylam"
            value={pharmacy.lng}
            onChange={(e) => onChangePharmacyHandler(e)}
          />
          <button className="btn" onClick={() => onClickAddPharmacy()}>Ekle</button>



        </div>
        <div className="admin_panel_card">
          <div class="card-header">
            <h2>Nöbet Tarihi Ekle</h2>
          </div>

          <select
            className="input"
            name="busType"
            value={pharmacyId}
            onChange={(e) => setPharmacyId(e.target.value)}
          >
            {pharmacys.map((x, index) => (<option value={x.id} key={index}>{x.eczaneAdi}</option>))}

          </select>

          <input
            type="date"
            className="input"
            name="date"
            placeholder="Tarih"
            value={tarih}
            onChange={(e) => setTarih(e.target.value)}
          />
          <button className="btn" onClick={() => onClickAddDuty(pharmacyId, tarih)}>Ekle</button>



        </div>

      </div>
    </div>) : (
      <LoginComponent
        onClick={onLoginClick}
        userData={userData}
        onChangeUserHandler={onChangeUserHandler}
      />)}

  </div>
}
export default AdminPanel