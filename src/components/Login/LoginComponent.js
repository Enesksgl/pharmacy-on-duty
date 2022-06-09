import React from "react";
import "./LoginComponent.css";

export const LoginComponent = (props) => {
    const {userName,password}=props.userData;
    const {onChangeUserHandler,onClick}=props;
  return (
    <div className="login-div">
        <h1>Admin Girişi</h1>
      <input
        name="userName"
        placeholder="Kullanıcı Adı"
        value={userName}
        onChange={onChangeUserHandler}
      />
      <input
        type="password"
        name="password"
        placeholder="Şifre"
        value={password}
        onChange={onChangeUserHandler}
      />
      <button  onClick={onClick}>
          Giriş Yap
        </button>
    </div>
  );
};