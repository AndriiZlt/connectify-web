import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        console.log("user=>", user);
      } else {
        setAuthUser(null);
        console.log("No user");
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <Routes>
      {authUser ? (
        <Route exact path="/" restricted element={<Home />} />
      ) : (
        <Route exact path="/" restricted element={<Login />} />
      )}
    </Routes>
  );
}

export default App;
