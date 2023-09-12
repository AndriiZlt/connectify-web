import React, { useEffect, useState } from "react";
import css from "./css/Header.module.css";
import logo from "../assets/connectify_logo.png";
import { auth } from "../firebase-config";
import { Button } from "@mui/material";

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    setUserEmail(auth.currentUser.email);
  }, []);

  return (
    <div className={css.header} style={{ width: "100%" }}>
      <img className={css.logo} src={logo} alt="Logo" />
      <p
        style={{
          color: "#fff",
          width: 100,
          overflow: "hidden",
          fontSize: 10,
        }}
      >
        {userEmail}
      </p>
      <Button
        variant="contained"
        sx={{ mt: 2, mb: 2, backgroundColor: "green", height: 20 }}
        onClick={() => auth.signOut()}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default Header;
