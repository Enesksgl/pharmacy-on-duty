import { useDispatch, useSelector } from "react-redux"
import { LoginComponent } from "../Login/LoginComponent"
import React, { useState } from "react";
import { login } from "../../stores/auth";
import { addDuty, addPharmacy } from "../../stores/pharmacy";
import "./AdminPanel.css";

function AdminPanel() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [pharmacyId, setPharmacyId] = useState(Math.random());
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
  const onClickAddPharmacy =()=>{
    dispatch(addPharmacy(pharmacy));
    alert("Yeni eczane eklendi.");
    console.log(pharmacys)
  };
  const onClickAddDuty =(tarih ,id)=>{
    dispatch(addDuty([id,tarih]));
    console.log(pharmacys)
  };
  
  return <div>
    {user === true ? (<div>
      <h3>Yönetim Paneli</h3>
      <div className="row body">
        <div className="column_left"><div class="card">
          <div class="card-header">
            <h2>Eczane Ekle</h2>
          </div>
          <div class="card-body ">
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
            <input
              className="input"
              name="ilce"
              placeholder="İlçe"
              value={pharmacy.ilce}
              onChange={(e) =>onChangePharmacyHandler(e)}
            />
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
            <button className="btn" onClick={()=>onClickAddPharmacy()}>Ekle</button>

          </div>
        </div>
        </div>
        <div className="column_right"><div class="card">
          <div class="card-header">
            <h2>Nöbet Tarihi Ekle</h2>
          </div>
          <div class="card-body">
            <select
              className="travel-select"
              name="busType"
              value={pharmacyId}
              onChange={(e) => setPharmacyId(e.target.value)}
            >
              {pharmacys.map((x,index)=>(<option value = {x.id} key={index}>{x.eczaneAdi}</option>))}
        
            </select>

            <input
              type="date"
              className="ilce-select"
              name="date"
              placeholder="Tarih"
              value={tarih}
              onChange={(e) => setTarih(e.target.value)}
            />
               <button className="btn" onClick={()=>onClickAddDuty(pharmacyId, tarih)}>Ekle</button>
          </div>

        </div>
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