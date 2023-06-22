import axios from "axios";
import React from "react";

const User = ({ userData }) => {
  const { email, username } = userData;

  return (
    <div>
      <h1>Hola </h1>
      <span>{username}</span>
      <h3>
        correo:<span>{email}</span>
      </h3>
    </div>
  );
};

export default User;
